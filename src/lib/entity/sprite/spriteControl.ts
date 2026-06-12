import { engine, Engine } from '../../engine';
import { EntityEffect } from '../entity/entityEffect';
import { EntitySound } from '../entity/entitySound';
import { ScratchEvent } from '../../engine/scratchEvent';
import { Sprite } from '.';
import { Sound } from '../../sounds';
import { StageLayering } from '../../engine/stageLayering';
import { threadManager } from '../../engine/thread/threads';
import { Timer } from '../../utils/timer';
import * as Until from '../../utils/wait';
import type { TEntityEffects } from '../../../type/entity/entity/TEntityOptions';
import type { ISprite } from '../../../type/entity/sprite';
import type { ISpriteControl } from '../../../type/entity/sprite/ISpriteControl';
import type { IEntityProxy } from '../../../type/entity/entity/IEntityProxy';
import type { ISound } from 'src/type/sound';

/**
 * Sprite Control(制御)
 */
export class SpriteControl implements ISpriteControl {
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
    async wait(sec: number): Promise<void>{
        await Timer.wait(sec);
    }
    /**
     * 条件が成立する迄、待つ。
     * @param condition {Until.ConditionFunction} - 条件結果を返す関数
     */
    async waitUntil(condition: Until.ConditionFunction): Promise<void> {
        await Until.untilCondition(condition);
    }
    /**
     * 条件が成立する間、待つ。
     * 
     * @param condition {Until.ConditionFunction} - 条件結果を返す関数
     */
    async waitWhile(condition: Until.ConditionFunction): Promise<void> {
        await Until.whileCondition(condition);
    }
    /**
     * クローンを作る
     */
    clone(): void {
        const _sprite = this.entity as Sprite;
        const clonesCount = _sprite.clones.length;
        const name = `${_sprite.name}_${clonesCount+1}`;
        // クローン作製
        const clone = new Sprite(name);
        clone.isClone = true;
        _sprite.clones.push(clone);
        clone.Looks.layer.goBackwardLayers(1);
        // 各種コピー
        (clone.Control as SpriteControl)._propertiesCopyFrom(_sprite);

        // 初期化
        clone.init();
    }
    _propertiesCopyFrom( target: Sprite ) {
        const _sprite = this.entity as Sprite;
        if(_sprite.isClone) {
            // Imageコピー
            const _images = (target as Sprite).$image.images;
            this.entity.Costume.add(_images);
            // Soundコピー(DeepCopy)
            const _soundMap = (target.Sound as EntitySound).soundMap;
            const _soundKeys = (target.Sound as EntitySound).soundKeys;
            const _arr: ISound[] = [];
            for( const key of _soundKeys) {
                console.log(key)
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
    whenCloned(func: CallableFunction): void {
        
    }
    /**
     * 全てのスプライトの動作を停止する
     */
    stopAll() : void {
        (engine as Engine).runtime.scratchEvent.emit(ScratchEvent.STOP_CLICKED);
    }
    /**
     * クローンを抹消する
     */
    removeClone() : void {
        console.log('removeClone')
        const _sprite = this.entity as Sprite;
        if(_sprite.isClone === true){
            console.log('[2]removeClone=', _sprite.clones)
            if(_sprite.clones && _sprite.clones.length > 0){
                console.log('[3]removeClone');
                const _engine = engine as Engine;
                _engine.removeSprites(_sprite);
                for(const _clone of _sprite.clones){
                    const $clone = _clone as Sprite;
                    $clone.render.renderer.destroyDrawable($clone.drawableID, StageLayering.SPRITE_LAYER);
                }
                // IDが一致しない要素をフィルターで取得
                const _clones:ISprite[] = _sprite.clones.filter(entity => (entity as Sprite).id != (this.entity as Sprite).id);
                // 全削除して要素を追加
                _sprite.clones.splice(0, _sprite.clones.length).concat(_clones);
                _sprite.isAlive = false;
            }
        }
    }
    /**
     * クローンを全て削除する
     */
    removeAllClones() : void {
        const _sprite = this.entity as Sprite;
        const _clones = [..._sprite.clones];
        console.log('removeAllClones, _clones', _clones);
        for(const _clone of _clones) {
            _clone.Control.removeClone();
        }
    }
    /**
     * このスクリプトを停止する
     */
    stopThisScript(proxy:IEntityProxy) : void {
        proxy.setStopThisScriptSwitch(true);
    }
    /**
     * このスプライトの他のスクリプトを停止する
     */
    stopOtherScripts(proxy:IEntityProxy) : void {
        threadManager.stopOtherScripts(proxy);
    }

};