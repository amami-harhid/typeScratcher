import { Playground, playground } from '../../vm/playground';
import { ScratchEvent } from '../../vm/scratchEvent';
import { Entity } from '../entity';
import { EntityBroadCast } from './entityBroadcast';
import { Element } from '../../gui/element';
/** イベント */
export class EntityEvent{

    private _broadcast: EntityBroadCast;
    private _entity: Entity;
    /**
     * @internal
     * @param entity {Entity}
     */
    constructor(entity:Entity){
        this._entity = entity;
        this._broadcast = new EntityBroadCast(entity);
    }

    get Broadcast() {
        return this._broadcast;
    }
    set whenflagger(func: CallableFunction) {
        this.whenFlag(func);
    }
    /**
     * 旗が押されたときの動作を定義
     * @param func 
     */
    whenFlag(func: CallableFunction) : void {
        playground.runtime.scratchEvent.once(ScratchEvent.GREEN_FLAG_CLICKED, ()=>{
            Playground.addThread(func, this._entity);

        })
        const greenFlag = Element.getGreenFlag();
        const clickFunc = async(e:MouseEvent)=>{
            Playground.addThread(func, this._entity);
            e.stopPropagation();
        }
//        greenFlag.addEventListener('click', clickFunc);
    }
    /**
     * 指定したキーが押されたときの動作を定義
     * @param key 
     * @param func 
     */
    whenKeyPressed( key: string, func: CallableFunction ): void {


    }

    whenClicked(func: CallableFunction): void {


    }
    /**
     * 背景が〇〇になったときの動作を定義
     * @param {*} backdropName 
     * @param {*} func 
     */
    whenBackdropSwitches(backdropName: string, func: CallableFunction): void {


    }
}