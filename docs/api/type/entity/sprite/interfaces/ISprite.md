# Interface: ISprite

Defined in: [src/type/entity/sprite/index.ts:24](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/index.ts#L24)

## Extends

- [`IEntity`](../../entity/interfaces/IEntity.md)

## Properties

### Broadcast

> `readonly` **Broadcast**: [`IEntityBroadCast`](../../entity/IEntityBroadcast/interfaces/IEntityBroadCast.md)

Defined in: [src/type/entity/entity/index.ts:9](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/entity/index.ts#L9)

メッセージ送受信

#### Inherited from

[`IEntity`](../../entity/interfaces/IEntity.md).[`Broadcast`](../../entity/interfaces/IEntity.md#broadcast)

***

### Control

> `readonly` **Control**: [`ISpriteControl`](../ISpriteControl/interfaces/ISpriteControl.md)

Defined in: [src/type/entity/sprite/index.ts:53](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/index.ts#L53)

制御

***

### Costume

> `readonly` **Costume**: [`ISpriteCostume`](../ISpriteCostume/interfaces/ISpriteCostume.md)

Defined in: [src/type/entity/sprite/index.ts:45](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/index.ts#L45)

コスチューム番号、コスチューム名を取り出すためのオブジェクト
使用例：this.Costume.no, this.Costume.name

#### Returns

***

### DragMode

> `readonly` **DragMode**: [`ISpriteDragMode`](../ISpriteDragMode/interfaces/ISpriteDragMode.md)

Defined in: [src/type/entity/sprite/index.ts:85](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/index.ts#L85)

DragModeを設定するためのオブジェクト

***

### Event

> `readonly` **Event**: [`ISpriteEvent`](../ISpriteEvent/interfaces/ISpriteEvent.md)

Defined in: [src/type/entity/sprite/index.ts:61](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/index.ts#L61)

イベント

***

### Looks

> `readonly` **Looks**: [`ISpriteLooks`](../ISpriteLooks/interfaces/ISpriteLooks.md)

Defined in: [src/type/entity/sprite/index.ts:49](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/index.ts#L49)

見た目

***

### Motion

> `readonly` **Motion**: [`ISpriteMotion`](../ISpriteMotion/interfaces/ISpriteMotion.md)

Defined in: [src/type/entity/sprite/index.ts:33](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/index.ts#L33)

動き

***

### name

> `readonly` **name**: `string`

Defined in: [src/type/entity/sprite/index.ts:28](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/index.ts#L28)

スプライト名

***

### Pen

> `readonly` **Pen**: [`IPenSprite`](../pen/interfaces/IPenSprite.md)

Defined in: [src/type/entity/sprite/index.ts:38](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/index.ts#L38)

PEN

***

### Sensing

> `readonly` **Sensing**: [`ISpriteSensing`](../ISpriteSensing/interfaces/ISpriteSensing.md)

Defined in: [src/type/entity/sprite/index.ts:57](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/index.ts#L57)

調べる

***

### Sound

> `readonly` **Sound**: [`IEntitySound`](../../entity/IEntitySound/interfaces/IEntitySound.md)

Defined in: [src/type/entity/sprite/index.ts:66](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/index.ts#L66)

サウンド

#### Overrides

[`IEntity`](../../entity/interfaces/IEntity.md).[`Sound`](../../entity/interfaces/IEntity.md#sound)

***

### Speech

> `readonly` **Speech**: [`IEntitySpeech`](../../entity/IEntitySpeech/interfaces/IEntitySpeech.md)

Defined in: [src/type/entity/entity/index.ts:17](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/entity/index.ts#L17)

スピーチ

#### Inherited from

[`IEntity`](../../entity/interfaces/IEntity.md).[`Speech`](../../entity/interfaces/IEntity.md#speech)
