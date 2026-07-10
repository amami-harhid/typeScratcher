# Class: Stage

Defined in: [src/lib/entity/stage/index.ts:26](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/stage/index.ts#L26)

Stage

## Extends

- [`Entity`](../../entity/classes/Entity.md)

## Implements

- [`IStage`](../../../../type/entity/stage/interfaces/IStage.md)

## Constructors

### Constructor

> **new Stage**(): `Stage`

Defined in: [src/lib/entity/stage/index.ts:33](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/stage/index.ts#L33)

#### Returns

`Stage`

#### Overrides

[`Entity`](../../entity/classes/Entity.md).[`constructor`](../../entity/classes/Entity.md#constructor)

## Properties

### drawableID

> **drawableID**: `number` = `-1`

Defined in: [src/lib/entity/entity/index.ts:34](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/index.ts#L34)

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`drawableID`](../../entity/classes/Entity.md#drawableid)

***

### id

> **id**: `string`

Defined in: [src/lib/entity/entity/index.ts:33](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/index.ts#L33)

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`id`](../../entity/classes/Entity.md#id)

## Accessors

### $fonts

#### Get Signature

> **get** **$fonts**(): [`IFont`](../../../../type/font/interfaces/IFont.md)[]

Defined in: [src/lib/entity/entity/index.ts:73](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/index.ts#L73)

##### Returns

[`IFont`](../../../../type/font/interfaces/IFont.md)[]

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`$fonts`](../../entity/classes/Entity.md#fonts)

***

### $image

#### Get Signature

> **get** **$image**(): [`IEntityImage`](../../../../type/entity/entity/IEntityImage/interfaces/IEntityImage.md)

Defined in: [src/lib/entity/entity/index.ts:67](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/index.ts#L67)

##### Returns

[`IEntityImage`](../../../../type/entity/entity/IEntityImage/interfaces/IEntityImage.md)

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`$image`](../../entity/classes/Entity.md#image)

***

### $images

#### Get Signature

> **get** **$images**(): [`IImage`](../../../../type/image/interfaces/IImage.md)[]

Defined in: [src/lib/entity/entity/index.ts:70](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/index.ts#L70)

##### Returns

[`IImage`](../../../../type/image/interfaces/IImage.md)[]

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`$images`](../../entity/classes/Entity.md#images)

***

### Backdrop

#### Get Signature

> **get** **Backdrop**(): [`IStageBackdrop`](../../../../type/entity/stage/IStageBackdrop/interfaces/IStageBackdrop.md)

Defined in: [src/lib/entity/stage/index.ts:50](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/stage/index.ts#L50)

背景

##### Returns

[`IStageBackdrop`](../../../../type/entity/stage/IStageBackdrop/interfaces/IStageBackdrop.md)

背景

#### Implementation of

[`IStage`](../../../../type/entity/stage/interfaces/IStage.md).[`Backdrop`](../../../../type/entity/stage/interfaces/IStage.md#backdrop)

***

### Broadcast

#### Get Signature

> **get** **Broadcast**(): [`IEntityBroadCast`](../../../../type/entity/entity/IEntityBroadcast/interfaces/IEntityBroadCast.md)

Defined in: [src/lib/entity/entity/index.ts:76](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/index.ts#L76)

メッセージ送受信

##### Returns

[`IEntityBroadCast`](../../../../type/entity/entity/IEntityBroadcast/interfaces/IEntityBroadCast.md)

メッセージ送受信

#### Implementation of

[`IStage`](../../../../type/entity/stage/interfaces/IStage.md).[`Broadcast`](../../../../type/entity/stage/interfaces/IStage.md#broadcast)

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`Broadcast`](../../entity/classes/Entity.md#broadcast)

***

### Control

#### Get Signature

> **get** **Control**(): [`IEntityControl`](../../../../type/entity/entity/IEntityControl/interfaces/IEntityControl.md)

Defined in: [src/lib/entity/stage/index.ts:56](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/stage/index.ts#L56)

制御

##### Returns

[`IEntityControl`](../../../../type/entity/entity/IEntityControl/interfaces/IEntityControl.md)

制御

#### Implementation of

[`IStage`](../../../../type/entity/stage/interfaces/IStage.md).[`Control`](../../../../type/entity/stage/interfaces/IStage.md#control)

***

### Event

#### Get Signature

> **get** **Event**(): [`IEntityEvent`](../../../../type/entity/entity/IEntityEvent/interfaces/IEntityEvent.md)

Defined in: [src/lib/entity/stage/index.ts:59](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/stage/index.ts#L59)

イベント

##### Returns

[`IEntityEvent`](../../../../type/entity/entity/IEntityEvent/interfaces/IEntityEvent.md)

イベント

#### Implementation of

[`IStage`](../../../../type/entity/stage/interfaces/IStage.md).[`Event`](../../../../type/entity/stage/interfaces/IStage.md#event)

***

### isAlive

#### Get Signature

> **get** **isAlive**(): `boolean`

Defined in: [src/lib/entity/entity/index.ts:91](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/index.ts#L91)

##### Returns

`boolean`

#### Set Signature

> **set** **isAlive**(`isAlive`): `void`

Defined in: [src/lib/entity/entity/index.ts:94](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/index.ts#L94)

##### Parameters

###### isAlive

`boolean`

##### Returns

`void`

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`isAlive`](../../entity/classes/Entity.md#isalive)

***

### isSprite

#### Get Signature

> **get** **isSprite**(): `boolean`

Defined in: [src/lib/entity/entity/index.ts:88](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/index.ts#L88)

##### Returns

`boolean`

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`isSprite`](../../entity/classes/Entity.md#issprite)

***

### Looks

#### Get Signature

> **get** **Looks**(): [`IStageLooks`](../../../../type/entity/stage/IStageLooks/interfaces/IStageLooks.md)

Defined in: [src/lib/entity/stage/index.ts:53](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/stage/index.ts#L53)

見た目

##### Returns

[`IStageLooks`](../../../../type/entity/stage/IStageLooks/interfaces/IStageLooks.md)

見た目

#### Implementation of

[`IStage`](../../../../type/entity/stage/interfaces/IStage.md).[`Looks`](../../../../type/entity/stage/interfaces/IStage.md#looks)

***

### mouse

#### Get Signature

> **get** **mouse**(): [`TMouse`](../../../../type/mouse/type-aliases/TMouse.md)

Defined in: [src/lib/entity/entity/index.ts:85](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/index.ts#L85)

##### Returns

[`TMouse`](../../../../type/mouse/type-aliases/TMouse.md)

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`mouse`](../../entity/classes/Entity.md#mouse)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [src/lib/entity/entity/index.ts:61](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/index.ts#L61)

##### Returns

`string`

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`name`](../../entity/classes/Entity.md#name)

***

### Properties

#### Get Signature

> **get** **Properties**(): [`StageProperties`](../stageProperties/classes/StageProperties.md)

Defined in: [src/lib/entity/stage/index.ts:47](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/stage/index.ts#L47)

##### Returns

[`StageProperties`](../stageProperties/classes/StageProperties.md)

#### Implementation of

[`IStage`](../../../../type/entity/stage/interfaces/IStage.md).[`Properties`](../../../../type/entity/stage/interfaces/IStage.md#properties)

***

### render

#### Get Signature

> **get** **render**(): [`Render`](../../../render/classes/Render.md)

Defined in: [src/lib/entity/entity/index.ts:64](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/index.ts#L64)

##### Returns

[`Render`](../../../render/classes/Render.md)

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`render`](../../entity/classes/Entity.md#render)

***

### Sensing

#### Get Signature

> **get** **Sensing**(): [`IEntitySensing`](../../../../type/entity/entity/IEntitySensing/interfaces/IEntitySensing.md)

Defined in: [src/lib/entity/stage/index.ts:62](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/stage/index.ts#L62)

調べる

##### Returns

[`IEntitySensing`](../../../../type/entity/entity/IEntitySensing/interfaces/IEntitySensing.md)

調べる

#### Implementation of

[`IStage`](../../../../type/entity/stage/interfaces/IStage.md).[`Sensing`](../../../../type/entity/stage/interfaces/IStage.md#sensing)

***

### Sound

#### Get Signature

> **get** **Sound**(): [`IEntitySound`](../../../../type/entity/entity/IEntitySound/interfaces/IEntitySound.md)

Defined in: [src/lib/entity/entity/index.ts:79](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/index.ts#L79)

サウンド

##### Returns

[`IEntitySound`](../../../../type/entity/entity/IEntitySound/interfaces/IEntitySound.md)

サウンド

#### Implementation of

[`IStage`](../../../../type/entity/stage/interfaces/IStage.md).[`Sound`](../../../../type/entity/stage/interfaces/IStage.md#sound)

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`Sound`](../../entity/classes/Entity.md#sound)

***

### SOUND\_FORCE\_STOP

#### Get Signature

> **get** **SOUND\_FORCE\_STOP**(): `string`

Defined in: [src/lib/entity/entity/index.ts:27](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/index.ts#L27)

##### Returns

`string`

#### Inherited from

[`Monitor`](../../monitor/monitor/classes/Monitor.md).[`SOUND_FORCE_STOP`](../../monitor/monitor/classes/Monitor.md#sound_force_stop)

***

### Speech

#### Get Signature

> **get** **Speech**(): [`IEntitySpeech`](../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md)

Defined in: [src/lib/entity/entity/index.ts:82](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/index.ts#L82)

スピーチ

##### Returns

[`IEntitySpeech`](../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md)

スピーチ

#### Implementation of

[`IStage`](../../../../type/entity/stage/interfaces/IStage.md).[`Speech`](../../../../type/entity/stage/interfaces/IStage.md#speech)

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`Speech`](../../entity/classes/Entity.md#speech)

## Methods

### createDrawable()

> **createDrawable**(`layer`): `void`

Defined in: [src/lib/entity/entity/index.ts:56](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/index.ts#L56)

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

Defined in: [src/lib/entity/entity/index.ts:97](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/index.ts#L97)

#### Returns

`boolean`

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`imageLoadCompleteAll`](../../entity/classes/Entity.md#imageloadcompleteall)

***

### init()

> **init**(): `Promise`\<`void`\>

Defined in: [src/lib/entity/stage/index.ts:65](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/stage/index.ts#L65)

#### Returns

`Promise`\<`void`\>

***

### loadCompleteAll()

> **loadCompleteAll**(): `boolean`

Defined in: [src/lib/entity/entity/index.ts:105](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/index.ts#L105)

#### Returns

`boolean`

#### Inherited from

[`Entity`](../../entity/classes/Entity.md).[`loadCompleteAll`](../../entity/classes/Entity.md#loadcompleteall)

***

### update()

> **update**(): `void`

Defined in: [src/lib/entity/stage/index.ts:102](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/stage/index.ts#L102)

#### Returns

`void`

#### Overrides

[`Entity`](../../entity/classes/Entity.md).[`update`](../../entity/classes/Entity.md#update)
