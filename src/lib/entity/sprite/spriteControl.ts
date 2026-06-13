import { engine, Engine } from '../../engine';
import { DoubleRunning } from '../entity/entityEvent';
import { EntityEffect } from '../entity/entityEffect';
import { EntitySound } from '../entity/entitySound';
import { ScratchEvent } from '../../engine/scratchEvent';
import { Sprite } from '.';
import { Sound } from '../../sounds';
import { StageLayering } from '../../engine/stageLayering';
import { threadManager, ThreadObj } from '../../engine/thread/threads';
import { ThreadStatus } from '../../../type/engine/thread/threads';
import { Timer } from '../../utils/timer';
import * as Until from '../../utils/wait';
import type { EventFunctionSetter } from '../../../type/entity/entity/IEntityEvent';
import type { TEntityEffects } from '../../../type/entity/entity/TEntityOptions';
import type { IEntityProxy } from '../../../type/entity/entity/IEntityProxy';
import type { ISprite } from '../../../type/entity/sprite';
import type { ISpriteControl } from '../../../type/entity/sprite/ISpriteControl';
import type { ISound } from '../../../type/sound';
import { EntityImage } from '../entity/entityImage';

const CLONE_MAX_SIZE = 300;


/**
 * Sprite Control(制御)
 */
export class SpriteControl implements ISpriteControl {
    //private static _clonedEventElements : CLONED_EVENT_ELEMENT[] = [];
    private static _clonedFuncElements : CallableFunction[] = [];
    private static _clonedEventElementKeys : string[] = [];
    private static _cloneCount: number = 0;
    
    public static set cloneCount(_count: number) {
        SpriteControl._cloneCount = _count;
    }
    protected entity: ISprite;
    /**
     * @internal
     * @param entity {Sprite}
     */
    constructor(entity:ISprite){
        this.entity = entity;
    }
    /**
     * 指定秒数分、待つ。
     * @param sec 
     */
    public async wait(sec: number): Promise<void>{
        await Timer.wait(sec);
    }
    /**
     * 条件が成立する迄、待つ。
     * @param condition {Until.ConditionFunction} - 条件結果を返す関数
     */
    public async waitUntil(condition: Until.ConditionFunction): Promise<void> {
        await Until.untilCondition(condition);
    }
    /**
     * 条件が成立する間、待つ。
     * 
     * @param condition {Until.ConditionFunction} - 条件結果を返す関数
     */
    public async waitWhile(condition: Until.ConditionFunction): Promise<void> {
        await Until.whileCondition(condition);
    }
    /**
     * クローンを作る
     */
    public clone(): void {
        SpriteControl._cloneCount+=1;
        this._clone();
    }
    private async _clone():Promise<void> {
        if(SpriteControl._cloneCount > CLONE_MAX_SIZE) {
            return;
        }
        return new Promise<void>(resolve=>{
        const _sprite = this.entity as Sprite;
        const clonesCount = _sprite.clones.length;
        const name = `${_sprite.name}_${clonesCount+1}`;
        // クローン作製
        const clone = new Sprite(name);
        clone.isClone = true;
        _sprite.clones.push(clone);
        clone.parent = this.entity;
        clone.Looks.layer.goBackwardLayers(1);
        // 各種コピー
        (clone.Control as SpriteControl)._propertiesCopyFrom(_sprite);

        // イベント登録
        const scratchEvent = (engine as Engine).runtime.scratchEvent;
        const messageId = scratchEvent.getClonedEventMessageId(_sprite);
        if(SpriteControl._clonedEventElementKeys.includes(messageId)) {
            // メッセージIDの登録があるとき
            scratchEvent.emit(messageId, clone);
        }else{
            // 何もしない
        }

        // 初期化
        clone.init();
            resolve();
        });
    }
    private _propertiesCopyFrom( target: Sprite ) {
        const _sprite = this.entity as Sprite;
        if(_sprite.isClone === true) {
            // Imageコピー
            const _images = (target as Sprite).$image.images;
            this.entity.Costume.add(_images);
            // Soundコピー(DeepCopy)
            const _soundMap = (target.Sound as EntitySound).soundMap;
            const _soundKeys = (target.Sound as EntitySound).soundKeys;
            const _arr: ISound[] = [];
            for( const key of _soundKeys) {
                const _sound = _soundMap[key];  
                _arr.push( (_sound as Sound).deepCopy() as ISound );
            }
            if( _arr.length > 0){
                _sprite.Sound.add( _arr );
            }

            // プロパティコピー
            _sprite.Properties.degree = target.Properties.degree;
            _sprite.Properties.position.x = target.Properties.position.x;
            _sprite.Properties.position.y = target.Properties.position.y;
            _sprite.Properties.rotationStyle = target.Properties.rotationStyle;
            _sprite.Properties.scale.w = target.Properties.scale.w;
            _sprite.Properties.scale.h = target.Properties.scale.h;
            _sprite.Properties.visible = target.Properties.visible;
            // コスチューム番号
            _sprite.Costume.no = target.Costume.no;

            // 画像効果
            const _effect:TEntityEffects = target.Looks.effect.get();
            const _copyEffect:TEntityEffects = {..._effect};
            (_sprite.Looks.effect as EntityEffect).effect = _copyEffect;
            
        }
    }
    /**
     * クローンされたときの動作を定義する
     * @param func {CallableFunction} 動作を記述する関数
     */
    public cloned() : EventFunctionSetter {
        const me = this;
        return class {
            static set func(func: CallableFunction) {
                me._whenCloned(func);
            }
        };
    }
    /**
     * 動作をスレッドとして登録する
     * 親スプライトとして動作する。
     */
    private _whenCloned(func: CallableFunction): void {
        const _parentSprite = this.entity as Sprite; // <== 本体スプライトである
        if(_parentSprite.isClone === true){
            // 何もしない
            return;
        }
        const scratchEvent = (engine as Engine).runtime.scratchEvent;
        const messageId = scratchEvent.getClonedEventMessageId(_parentSprite);
        SpriteControl._clonedFuncElements.push(func);

        const threadObj = new ThreadObj(this.entity, DoubleRunning.TRUE); // 多重起動許す
        threadObj.setFunc(func);
        threadManager.registThread(threadObj);

        if(SpriteControl._clonedEventElementKeys.includes(messageId)) {
            // 何もしない
        }else{
            // キーを保存
            SpriteControl._clonedEventElementKeys.push(messageId);
            // イベントを登録
            scratchEvent.clonedEventRegist(_parentSprite);              
        }
    }

    /**
     * クローンのイベントを開始する
     * @param messageId 
     * @param clone 
     */
    public clonedEventKick(messageId: string, clone: ISprite): void {

        // このメソッドは ScratchEventから呼ばれる。
        // クローンのメソッドである( this == clone )

        if( (this.entity as Sprite).isClone === false ){
            // クローンでない場合は何もしない
            return;
        }
        // スレッドを作成する
        for(const func of SpriteControl._clonedFuncElements) {
            const threadObj = new ThreadObj(this.entity, DoubleRunning.FALSE); // 多重起動許さない
            threadObj.setFunc(func);
            threadManager.registThread(threadObj);
            threadObj.status = ThreadStatus.YIELD;
        }
    }

    /**
     * 全てのスプライトの動作を停止する
     */
    public stopAll() : void {
        (engine as Engine).runtime.scratchEvent.emit(ScratchEvent.STOP_CLICKED);
    }
    /**
     * クローンを抹消する
     */
    public removeClone() : void {
        const _sprite = this.entity as Sprite;
        if(_sprite.isClone === true){
            const _clone = _sprite;
            const _engine = engine as Engine;
            _engine.removeSprites(_clone);
            _clone.Sound.stopImmediately(); // <=== thread.next() のなかで止めると落ちる。
            //(_clone.$image as EntityImage).destoryAllSkins();
            _clone.render.renderer.destroyDrawable(_clone.drawableID, StageLayering.SPRITE_LAYER);
            _clone.isAlive = false;

            SpriteControl._cloneCount-=1;
            const _parent = _clone.parent;
            if(_parent) {
                const _parentSprite = (_parent as Sprite);
                const _clones = _parentSprite.clones.filter((element)=>(element as Sprite).id != _clone.id);
                _parentSprite.clones.splice(0, _parentSprite.clones.length);
                _parentSprite.clones.push(..._clones);
            }
        }
    }
    /**
     * クローンを全て削除する
     */
    public removeAllClones() : void {
        const _sprite = this.entity as Sprite;
        const _clones = [..._sprite.clones];
        for(const _clone of _clones) {
            _clone.Control.removeClone();
        }
    }
    /**
     * このスクリプトを停止する
     */
    public stopThisScript(proxy:IEntityProxy) : void {
        proxy.setStopThisScriptSwitch(true);
    }
    /**
     * このスプライトの他のスクリプトを停止する
     */
    public stopOtherScripts(proxy:IEntityProxy) : void {
        threadManager.stopOtherScripts(proxy);
    }

};