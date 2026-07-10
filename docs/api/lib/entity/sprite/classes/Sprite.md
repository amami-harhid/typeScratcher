# Class: Sprite

Defined in: [src/lib/entity/sprite/index.ts:35](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/index.ts#L35)

Sprite

## Extends

- [`Entity`](../../entity/classes/Entity.md)

## Implements

- [`ISprite`](../../../../type/entity/sprite/interfaces/ISprite.md)

## Constructors

### Constructor

> **new Sprite**(`name`): `Sprite`

Defined in: [src/lib/entity/sprite/index.ts:52](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/index.ts#L52)

#### Parameters

##### name

`string`

#### Returns

`Sprite`

#### Overrides

[`Entity`](../../entity/classes/Entity.md).[`constructor`](../../entity/classes/Entity.md#constructor)

## Properties

### drawableID

> **drawableID**: `number` = `-1`

Defined in: [src/lib/entity/entity/index.ts:34](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L34)

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`drawableID`](../../entity/classes/Entity.md#drawableid)

***

### id

> **id**: `string`

Defined in: [src/lib/entity/entity/index.ts:33](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L33)

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`id`](../../entity/classes/Entity.md#id)

## Accessors

### $fonts

#### Get Signature

> **get** **$fonts**(): [`IFont`](../../../../type/font/interfaces/IFont.md)[]

Defined in: [src/lib/entity/entity/index.ts:73](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L73)

##### Returns

[`IFont`](../../../../type/font/interfaces/IFont.md)[]

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`$fonts`](../../entity/classes/Entity.md#fonts)

***

### $image

#### Get Signature

> **get** **$image**(): [`IEntityImage`](../../../../type/entity/entity/IEntityImage/interfaces/IEntityImage.md)

Defined in: [src/lib/entity/entity/index.ts:67](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L67)

##### Returns

[`IEntityImage`](../../../../type/entity/entity/IEntityImage/interfaces/IEntityImage.md)

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`$image`](../../entity/classes/Entity.md#image)

***

### $images

#### Get Signature

> **get** **$images**(): [`IImage`](../../../../type/image/interfaces/IImage.md)[]

Defined in: [src/lib/entity/entity/index.ts:70](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L70)

##### Returns

[`IImage`](../../../../type/image/interfaces/IImage.md)[]

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`$images`](../../entity/classes/Entity.md#images)

***

### Broadcast

#### Get Signature

> **get** **Broadcast**(): [`IEntityBroadCast`](../../../../type/entity/entity/IEntityBroadcast/interfaces/IEntityBroadCast.md)

Defined in: [src/lib/entity/entity/index.ts:76](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L76)

メッセージ送受信

##### Returns

[`IEntityBroadCast`](../../../../type/entity/entity/IEntityBroadcast/interfaces/IEntityBroadCast.md)

メッセージ送受信

#### Implementation of

[`ISprite`](../../../../type/entity/sprite/interfaces/ISprite.md).[`Broadcast`](../../../../type/entity/sprite/interfaces/ISprite.md#broadcast)

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`Broadcast`](../../entity/classes/Entity.md#broadcast)

***

### clones

#### Get Signature

> **get** **clones**(): [`ISprite`](../../../../type/entity/sprite/interfaces/ISprite.md)[]

Defined in: [src/lib/entity/sprite/index.ts:101](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/index.ts#L101)

##### Returns

[`ISprite`](../../../../type/entity/sprite/interfaces/ISprite.md)[]

***

### Control

#### Get Signature

> **get** **Control**(): [`ISpriteControl`](../../../../type/entity/sprite/ISpriteControl/interfaces/ISpriteControl.md)

Defined in: [src/lib/entity/sprite/index.ts:85](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/index.ts#L85)

制御

##### Returns

[`ISpriteControl`](../../../../type/entity/sprite/ISpriteControl/interfaces/ISpriteControl.md)

制御

#### Implementation of

[`ISprite`](../../../../type/entity/sprite/interfaces/ISprite.md).[`Control`](../../../../type/entity/sprite/interfaces/ISprite.md#control)

***

### Costume

#### Get Signature

> **get** **Costume**(): [`ISpriteCostume`](../../../../type/entity/sprite/ISpriteCostume/interfaces/ISpriteCostume.md)

Defined in: [src/lib/entity/sprite/index.ts:76](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/index.ts#L76)

コスチューム番号、コスチューム名を取り出すためのオブジェクト
使用例：this.Costume.no, this.Costume.name

##### Returns

[`ISpriteCostume`](../../../../type/entity/sprite/ISpriteCostume/interfaces/ISpriteCostume.md)

コスチューム番号、コスチューム名を取り出すためのオブジェクト
使用例：this.Costume.no, this.Costume.name

#### Implementation of

[`ISprite`](../../../../type/entity/sprite/interfaces/ISprite.md).[`Costume`](../../../../type/entity/sprite/interfaces/ISprite.md#costume)

***

### DragMode

#### Get Signature

> **get** **DragMode**(): [`SpriteDragMode`](../spriteDragMode/classes/SpriteDragMode.md)

Defined in: [src/lib/entity/sprite/index.ts:92](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/index.ts#L92)

DragModeを設定するためのオブジェクト

##### Returns

[`SpriteDragMode`](../spriteDragMode/classes/SpriteDragMode.md)

DragModeを設定するためのオブジェクト

#### Implementation of

[`ISprite`](../../../../type/entity/sprite/interfaces/ISprite.md).[`DragMode`](../../../../type/entity/sprite/interfaces/ISprite.md#dragmode)

***

### Event

#### Get Signature

> **get** **Event**(): [`ISpriteEvent`](../../../../type/entity/sprite/ISpriteEvent/interfaces/ISpriteEvent.md)

Defined in: [src/lib/entity/sprite/index.ts:89](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/index.ts#L89)

イベント

##### Returns

[`ISpriteEvent`](../../../../type/entity/sprite/ISpriteEvent/interfaces/ISpriteEvent.md)

イベント

#### Implementation of

[`ISprite`](../../../../type/entity/sprite/interfaces/ISprite.md).[`Event`](../../../../type/entity/sprite/interfaces/ISprite.md#event)

***

### isAlive

#### Get Signature

> **get** **isAlive**(): `boolean`

Defined in: [src/lib/entity/entity/index.ts:91](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L91)

##### Returns

`boolean`

#### Set Signature

> **set** **isAlive**(`isAlive`): `void`

Defined in: [src/lib/entity/entity/index.ts:94](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L94)

##### Parameters

###### isAlive

`boolean`

##### Returns

`void`

#### Inherited from

[`Monitor`](../../monitor/monitor/classes/Monitor.md).[`isAlive`](../../monitor/monitor/classes/Monitor.md#isalive)

***

### isClone

#### Get Signature

> **get** **isClone**(): `boolean`

Defined in: [src/lib/entity/sprite/index.ts:104](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/index.ts#L104)

##### Returns

`boolean`

#### Set Signature

> **set** **isClone**(`isClone`): `void`

Defined in: [src/lib/entity/sprite/index.ts:107](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/index.ts#L107)

##### Parameters

###### isClone

`boolean`

##### Returns

`void`

***

### isSprite

#### Get Signature

> **get** **isSprite**(): `boolean`

Defined in: [src/lib/entity/entity/index.ts:88](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L88)

##### Returns

`boolean`

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`isSprite`](../../entity/classes/Entity.md#issprite)

***

### Looks

#### Get Signature

> **get** **Looks**(): [`ISpriteLooks`](../../../../type/entity/sprite/ISpriteLooks/interfaces/ISpriteLooks.md)

Defined in: [src/lib/entity/sprite/index.ts:82](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/index.ts#L82)

見た目

##### Returns

[`ISpriteLooks`](../../../../type/entity/sprite/ISpriteLooks/interfaces/ISpriteLooks.md)

見た目

#### Implementation of

[`ISprite`](../../../../type/entity/sprite/interfaces/ISprite.md).[`Looks`](../../../../type/entity/sprite/interfaces/ISprite.md#looks)

***

### Motion

#### Get Signature

> **get** **Motion**(): [`ISpriteMotion`](../../../../type/entity/sprite/ISpriteMotion/interfaces/ISpriteMotion.md)

Defined in: [src/lib/entity/sprite/index.ts:79](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/index.ts#L79)

動き

##### Returns

[`ISpriteMotion`](../../../../type/entity/sprite/ISpriteMotion/interfaces/ISpriteMotion.md)

動き

#### Implementation of

[`ISprite`](../../../../type/entity/sprite/interfaces/ISprite.md).[`Motion`](../../../../type/entity/sprite/interfaces/ISprite.md#motion)

***

### mouse

#### Get Signature

> **get** **mouse**(): [`TMouse`](../../../../type/mouse/type-aliases/TMouse.md)

Defined in: [src/lib/entity/entity/index.ts:85](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L85)

##### Returns

[`TMouse`](../../../../type/mouse/type-aliases/TMouse.md)

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`mouse`](../../entity/classes/Entity.md#mouse)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [src/lib/entity/entity/index.ts:61](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L61)

スプライト名

##### Returns

`string`

スプライト名

#### Implementation of

[`ISprite`](../../../../type/entity/sprite/interfaces/ISprite.md).[`name`](../../../../type/entity/sprite/interfaces/ISprite.md#name)

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`name`](../../entity/classes/Entity.md#name)

***

### parent

#### Get Signature

> **get** **parent**(): [`ISprite`](../../../../type/entity/sprite/interfaces/ISprite.md) \| `undefined`

Defined in: [src/lib/entity/sprite/index.ts:110](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/index.ts#L110)

##### Returns

[`ISprite`](../../../../type/entity/sprite/interfaces/ISprite.md) \| `undefined`

#### Set Signature

> **set** **parent**(`parent`): `void`

Defined in: [src/lib/entity/sprite/index.ts:113](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/index.ts#L113)

##### Parameters

###### parent

[`ISprite`](../../../../type/entity/sprite/interfaces/ISprite.md)

##### Returns

`void`

***

### Pen

#### Get Signature

> **get** **Pen**(): [`PenSprite`](../pen/classes/PenSprite.md)

Defined in: [src/lib/entity/sprite/index.ts:98](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/index.ts#L98)

PEN

##### Returns

[`PenSprite`](../pen/classes/PenSprite.md)

PEN

#### Implementation of

[`ISprite`](../../../../type/entity/sprite/interfaces/ISprite.md).[`Pen`](../../../../type/entity/sprite/interfaces/ISprite.md#pen)

***

### Properties

#### Get Signature

> **get** **Properties**(): [`IEntityProperties`](../../../../type/entity/entity/IEntityProperties/interfaces/IEntityProperties.md)

Defined in: [src/lib/entity/sprite/index.ts:73](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/index.ts#L73)

##### Returns

[`IEntityProperties`](../../../../type/entity/entity/IEntityProperties/interfaces/IEntityProperties.md)

***

### render

#### Get Signature

> **get** **render**(): [`Render`](../../../render/classes/Render.md)

Defined in: [src/lib/entity/entity/index.ts:64](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L64)

##### Returns

[`Render`](../../../render/classes/Render.md)

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`render`](../../entity/classes/Entity.md#render)

***

### Sensing

#### Get Signature

> **get** **Sensing**(): [`ISpriteSensing`](../../../../type/entity/sprite/ISpriteSensing/interfaces/ISpriteSensing.md)

Defined in: [src/lib/entity/sprite/index.ts:95](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/index.ts#L95)

調べる

##### Returns

[`ISpriteSensing`](../../../../type/entity/sprite/ISpriteSensing/interfaces/ISpriteSensing.md)

調べる

#### Implementation of

[`ISprite`](../../../../type/entity/sprite/interfaces/ISprite.md).[`Sensing`](../../../../type/entity/sprite/interfaces/ISprite.md#sensing)

***

### Sound

#### Get Signature

> **get** **Sound**(): [`IEntitySound`](../../../../type/entity/entity/IEntitySound/interfaces/IEntitySound.md)

Defined in: [src/lib/entity/entity/index.ts:79](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L79)

サウンド

##### Returns

[`IEntitySound`](../../../../type/entity/entity/IEntitySound/interfaces/IEntitySound.md)

サウンド

#### Implementation of

[`ISprite`](../../../../type/entity/sprite/interfaces/ISprite.md).[`Sound`](../../../../type/entity/sprite/interfaces/ISprite.md#sound)

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`Sound`](../../entity/classes/Entity.md#sound)

***

### SOUND\_FORCE\_STOP

#### Get Signature

> **get** **SOUND\_FORCE\_STOP**(): `string`

Defined in: [src/lib/entity/entity/index.ts:27](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L27)

##### Returns

`string`

#### Inherited from

[`Monitor`](../../monitor/monitor/classes/Monitor.md).[`SOUND_FORCE_STOP`](../../monitor/monitor/classes/Monitor.md#sound_force_stop)

***

### Speech

#### Get Signature

> **get** **Speech**(): [`IEntitySpeech`](../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md)

Defined in: [src/lib/entity/entity/index.ts:82](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L82)

スピーチ

##### Returns

[`IEntitySpeech`](../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md)

スピーチ

#### Implementation of

[`ISprite`](../../../../type/entity/sprite/interfaces/ISprite.md).[`Speech`](../../../../type/entity/sprite/interfaces/ISprite.md#speech)

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`Speech`](../../entity/classes/Entity.md#speech)

## Methods

### createDrawable()

> **createDrawable**(`layer`): `void`

Defined in: [src/lib/entity/entity/index.ts:56](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L56)

#### Parameters

##### layer

[`StageLayeringValue`](../../../../type/entity/stage/CStageLayering/type-aliases/StageLayeringValue.md)

#### Returns

`void`

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`createDrawable`](../../entity/classes/Entity.md#createdrawable)

***

### imageLoadCompleteAll()

> **imageLoadCompleteAll**(): `boolean`

Defined in: [src/lib/entity/entity/index.ts:97](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L97)

#### Returns

`boolean`

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`imageLoadCompleteAll`](../../entity/classes/Entity.md#imageloadcompleteall)

***

### init()

> **init**(): `Promise`\<`void`\>

Defined in: [src/lib/entity/sprite/index.ts:116](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/index.ts#L116)

#### Returns

`Promise`\<`void`\>

***

### loadCompleteAll()

> **loadCompleteAll**(): `boolean`

Defined in: [src/lib/entity/entity/index.ts:105](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L105)

#### Returns

`boolean`

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`loadCompleteAll`](../../entity/classes/Entity.md#loadcompleteall)

***

### makeClone()

> **makeClone**(`name`): `Sprite`

Defined in: [src/lib/entity/sprite/index.ts:191](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/index.ts#L191)

SpriteControl.clone()内で使われる
クローンインスタンス作成メソッド
必要に応じて オーバーライドして利用してよい

#### Parameters

##### name

`string`

#### Returns

`Sprite`

***

### update()

> **update**(): `void`

Defined in: [src/lib/entity/sprite/index.ts:169](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/index.ts#L169)

#### Returns

`void`

#### Overrides

[`Entity`](../../entity/classes/Entity.md).[`update`](../../entity/classes/Entity.md#update)
