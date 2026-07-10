# Class: Entity

Defined in: [src/lib/entity/entity/index.ts:26](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/index.ts#L26)

## Extends

- `EventEmitter`

## Extended by

- [`Monitor`](../../monitor/monitor/classes/Monitor.md)
- [`Sprite`](../../sprite/classes/Sprite.md)
- [`Stage`](../../stage/classes/Stage.md)

## Implements

- [`IEntity`](../../../../type/entity/entity/interfaces/IEntity.md)

## Constructors

### Constructor

> **new Entity**(): `Entity`

Defined in: [src/lib/entity/entity/index.ts:43](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/index.ts#L43)

#### Returns

`Entity`

#### Overrides

`EventEmitter.constructor`

## Properties

### drawableID

> **drawableID**: `number` = `-1`

Defined in: [src/lib/entity/entity/index.ts:34](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/index.ts#L34)

***

### id

> **id**: `string`

Defined in: [src/lib/entity/entity/index.ts:33](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/index.ts#L33)

## Accessors

### $fonts

#### Get Signature

> **get** **$fonts**(): [`IFont`](../../../../type/font/interfaces/IFont.md)[]

Defined in: [src/lib/entity/entity/index.ts:73](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/index.ts#L73)

##### Returns

[`IFont`](../../../../type/font/interfaces/IFont.md)[]

***

### $image

#### Get Signature

> **get** **$image**(): [`IEntityImage`](../../../../type/entity/entity/IEntityImage/interfaces/IEntityImage.md)

Defined in: [src/lib/entity/entity/index.ts:67](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/index.ts#L67)

##### Returns

[`IEntityImage`](../../../../type/entity/entity/IEntityImage/interfaces/IEntityImage.md)

***

### $images

#### Get Signature

> **get** **$images**(): [`IImage`](../../../../type/image/interfaces/IImage.md)[]

Defined in: [src/lib/entity/entity/index.ts:70](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/index.ts#L70)

##### Returns

[`IImage`](../../../../type/image/interfaces/IImage.md)[]

***

### Broadcast

#### Get Signature

> **get** **Broadcast**(): [`IEntityBroadCast`](../../../../type/entity/entity/IEntityBroadcast/interfaces/IEntityBroadCast.md)

Defined in: [src/lib/entity/entity/index.ts:76](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/index.ts#L76)

メッセージ送受信

##### Returns

[`IEntityBroadCast`](../../../../type/entity/entity/IEntityBroadcast/interfaces/IEntityBroadCast.md)

メッセージ送受信

#### Implementation of

[`IEntity`](../../../../type/entity/entity/interfaces/IEntity.md).[`Broadcast`](../../../../type/entity/entity/interfaces/IEntity.md#broadcast)

***

### isAlive

#### Get Signature

> **get** **isAlive**(): `boolean`

Defined in: [src/lib/entity/entity/index.ts:91](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/index.ts#L91)

##### Returns

`boolean`

#### Set Signature

> **set** **isAlive**(`isAlive`): `void`

Defined in: [src/lib/entity/entity/index.ts:94](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/index.ts#L94)

##### Parameters

###### isAlive

`boolean`

##### Returns

`void`

***

### isSprite

#### Get Signature

> **get** **isSprite**(): `boolean`

Defined in: [src/lib/entity/entity/index.ts:88](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/index.ts#L88)

##### Returns

`boolean`

***

### mouse

#### Get Signature

> **get** **mouse**(): [`TMouse`](../../../../type/mouse/type-aliases/TMouse.md)

Defined in: [src/lib/entity/entity/index.ts:85](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/index.ts#L85)

##### Returns

[`TMouse`](../../../../type/mouse/type-aliases/TMouse.md)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [src/lib/entity/entity/index.ts:61](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/index.ts#L61)

##### Returns

`string`

***

### render

#### Get Signature

> **get** **render**(): [`Render`](../../../render/classes/Render.md)

Defined in: [src/lib/entity/entity/index.ts:64](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/index.ts#L64)

##### Returns

[`Render`](../../../render/classes/Render.md)

***

### Sound

#### Get Signature

> **get** **Sound**(): [`IEntitySound`](../../../../type/entity/entity/IEntitySound/interfaces/IEntitySound.md)

Defined in: [src/lib/entity/entity/index.ts:79](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/index.ts#L79)

サウンド

##### Returns

[`IEntitySound`](../../../../type/entity/entity/IEntitySound/interfaces/IEntitySound.md)

サウンド

#### Implementation of

[`IEntity`](../../../../type/entity/entity/interfaces/IEntity.md).[`Sound`](../../../../type/entity/entity/interfaces/IEntity.md#sound)

***

### SOUND\_FORCE\_STOP

#### Get Signature

> **get** **SOUND\_FORCE\_STOP**(): `string`

Defined in: [src/lib/entity/entity/index.ts:27](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/index.ts#L27)

##### Returns

`string`

***

### Speech

#### Get Signature

> **get** **Speech**(): [`IEntitySpeech`](../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md)

Defined in: [src/lib/entity/entity/index.ts:82](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/index.ts#L82)

スピーチ

##### Returns

[`IEntitySpeech`](../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md)

スピーチ

#### Implementation of

[`IEntity`](../../../../type/entity/entity/interfaces/IEntity.md).[`Speech`](../../../../type/entity/entity/interfaces/IEntity.md#speech)

## Methods

### createDrawable()

> **createDrawable**(`layer`): `void`

Defined in: [src/lib/entity/entity/index.ts:56](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/index.ts#L56)

#### Parameters

##### layer

[`StageLayeringValue`](../../../../type/entity/stage/CStageLayering/type-aliases/StageLayeringValue.md)

#### Returns

`void`

***

### imageLoadCompleteAll()

> **imageLoadCompleteAll**(): `boolean`

Defined in: [src/lib/entity/entity/index.ts:97](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/index.ts#L97)

#### Returns

`boolean`

***

### loadCompleteAll()

> **loadCompleteAll**(): `boolean`

Defined in: [src/lib/entity/entity/index.ts:105](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/index.ts#L105)

#### Returns

`boolean`

***

### update()

> **update**(): `void`

Defined in: [src/lib/entity/entity/index.ts:59](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/index.ts#L59)

#### Returns

`void`
