# Class: Monitor

Defined in: [src/lib/entity/monitor/monitor.ts:16](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitor.ts#L16)

Monitor

## Extends

- [`Entity`](../../../entity/classes/Entity.md)

## Implements

- [`IMonitor`](../../../../../type/entity/monitor/monitor/interfaces/IMonitor.md)

## Constructors

### Constructor

> **new Monitor**(`monitorId`, `value`): `Monitor`

Defined in: [src/lib/entity/monitor/monitor.ts:38](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitor.ts#L38)

#### Parameters

##### monitorId

`string`

{string}

##### value

[`NumberProxy`](../../../../../type/entity/monitor/monitoring/interfaces/NumberProxy.md) \| [`StringProxy`](../../../../../type/entity/monitor/monitoring/interfaces/StringProxy.md)

#### Returns

`Monitor`

#### Overrides

[`Entity`](../../../entity/classes/Entity.md).[`constructor`](../../../entity/classes/Entity.md#constructor)

## Properties

### drawableID

> **drawableID**: `number` = `-1`

Defined in: [src/lib/entity/entity/index.ts:34](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L34)

#### Inherited from

[`Entity`](../../../entity/classes/Entity.md).[`drawableID`](../../../entity/classes/Entity.md#drawableid)

***

### id

> **id**: `string`

Defined in: [src/lib/entity/entity/index.ts:33](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L33)

#### Inherited from

[`Entity`](../../../entity/classes/Entity.md).[`id`](../../../entity/classes/Entity.md#id)

***

### Events

> `static` **Events**: `object`

Defined in: [src/lib/entity/monitor/monitor.ts:17](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitor.ts#L17)

#### DROP\_COMPLETE

> **DROP\_COMPLETE**: `string` = `'DropComplete'`

#### DROP\_START

> **DROP\_START**: `string` = `'DropStart'`

## Accessors

### $fonts

#### Get Signature

> **get** **$fonts**(): [`IFont`](../../../../../type/font/interfaces/IFont.md)[]

Defined in: [src/lib/entity/entity/index.ts:73](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L73)

##### Returns

[`IFont`](../../../../../type/font/interfaces/IFont.md)[]

#### Inherited from

[`Entity`](../../../entity/classes/Entity.md).[`$fonts`](../../../entity/classes/Entity.md#fonts)

***

### $image

#### Get Signature

> **get** **$image**(): [`IEntityImage`](../../../../../type/entity/entity/IEntityImage/interfaces/IEntityImage.md)

Defined in: [src/lib/entity/entity/index.ts:67](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L67)

##### Returns

[`IEntityImage`](../../../../../type/entity/entity/IEntityImage/interfaces/IEntityImage.md)

#### Inherited from

[`Entity`](../../../entity/classes/Entity.md).[`$image`](../../../entity/classes/Entity.md#image)

***

### $images

#### Get Signature

> **get** **$images**(): [`IImage`](../../../../../type/image/interfaces/IImage.md)[]

Defined in: [src/lib/entity/entity/index.ts:70](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L70)

##### Returns

[`IImage`](../../../../../type/image/interfaces/IImage.md)[]

#### Inherited from

[`Entity`](../../../entity/classes/Entity.md).[`$images`](../../../entity/classes/Entity.md#images)

***

### Broadcast

#### Get Signature

> **get** **Broadcast**(): [`IEntityBroadCast`](../../../../../type/entity/entity/IEntityBroadcast/interfaces/IEntityBroadCast.md)

Defined in: [src/lib/entity/entity/index.ts:76](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L76)

メッセージ送受信

##### Returns

[`IEntityBroadCast`](../../../../../type/entity/entity/IEntityBroadcast/interfaces/IEntityBroadCast.md)

メッセージ送受信

#### Inherited from

[`Entity`](../../../entity/classes/Entity.md).[`Broadcast`](../../../entity/classes/Entity.md#broadcast)

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

[`Entity`](../../../entity/classes/Entity.md).[`isAlive`](../../../entity/classes/Entity.md#isalive)

***

### isSprite

#### Get Signature

> **get** **isSprite**(): `boolean`

Defined in: [src/lib/entity/entity/index.ts:88](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L88)

##### Returns

`boolean`

#### Inherited from

[`Entity`](../../../entity/classes/Entity.md).[`isSprite`](../../../entity/classes/Entity.md#issprite)

***

### monitorId

#### Get Signature

> **get** **monitorId**(): `string`

Defined in: [src/lib/entity/monitor/monitor.ts:111](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitor.ts#L111)

##### Returns

`string`

#### Implementation of

[`IMonitor`](../../../../../type/entity/monitor/monitor/interfaces/IMonitor.md).[`monitorId`](../../../../../type/entity/monitor/monitor/interfaces/IMonitor.md#monitorid)

***

### mouse

#### Get Signature

> **get** **mouse**(): [`TMouse`](../../../../../type/mouse/type-aliases/TMouse.md)

Defined in: [src/lib/entity/entity/index.ts:85](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L85)

##### Returns

[`TMouse`](../../../../../type/mouse/type-aliases/TMouse.md)

#### Inherited from

[`Entity`](../../../entity/classes/Entity.md).[`mouse`](../../../entity/classes/Entity.md#mouse)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [src/lib/entity/entity/index.ts:61](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L61)

##### Returns

`string`

#### Inherited from

[`Entity`](../../../entity/classes/Entity.md).[`name`](../../../entity/classes/Entity.md#name)

***

### position

#### Get Signature

> **get** **position**(): [`TPosition`](../../../../../type/common/typeCommon/type-aliases/TPosition.md)

Defined in: [src/lib/entity/monitor/monitor.ts:114](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitor.ts#L114)

##### Returns

[`TPosition`](../../../../../type/common/typeCommon/type-aliases/TPosition.md)

#### Set Signature

> **set** **position**(`_position`): `void`

Defined in: [src/lib/entity/monitor/monitor.ts:117](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitor.ts#L117)

##### Parameters

###### \_position

[`TPosition`](../../../../../type/common/typeCommon/type-aliases/TPosition.md)

##### Returns

`void`

#### Implementation of

[`IMonitor`](../../../../../type/entity/monitor/monitor/interfaces/IMonitor.md).[`position`](../../../../../type/entity/monitor/monitor/interfaces/IMonitor.md#position)

***

### render

#### Get Signature

> **get** **render**(): [`Render`](../../../../render/classes/Render.md)

Defined in: [src/lib/entity/entity/index.ts:64](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L64)

##### Returns

[`Render`](../../../../render/classes/Render.md)

#### Inherited from

[`Entity`](../../../entity/classes/Entity.md).[`render`](../../../entity/classes/Entity.md#render)

***

### scale

#### Set Signature

> **set** **scale**(`_scale`): `void`

Defined in: [src/lib/entity/monitor/monitor.ts:126](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitor.ts#L126)

##### Parameters

###### \_scale

[`TScale`](../../../../../type/common/typeCommon/type-aliases/TScale.md)

##### Returns

`void`

#### Implementation of

[`IMonitor`](../../../../../type/entity/monitor/monitor/interfaces/IMonitor.md).[`scale`](../../../../../type/entity/monitor/monitor/interfaces/IMonitor.md#scale)

***

### skin

#### Get Signature

> **get** **skin**(): [`S3MonitorSkin`](../../s3MonitorSkin/classes/S3MonitorSkin.md)

Defined in: [src/lib/entity/monitor/monitor.ts:156](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitor.ts#L156)

##### Returns

[`S3MonitorSkin`](../../s3MonitorSkin/classes/S3MonitorSkin.md)

#### Set Signature

> **set** **skin**(`_skin`): `void`

Defined in: [src/lib/entity/monitor/monitor.ts:159](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitor.ts#L159)

##### Parameters

###### \_skin

[`S3MonitorSkin`](../../s3MonitorSkin/classes/S3MonitorSkin.md)

##### Returns

`void`

***

### Sound

#### Get Signature

> **get** **Sound**(): [`IEntitySound`](../../../../../type/entity/entity/IEntitySound/interfaces/IEntitySound.md)

Defined in: [src/lib/entity/entity/index.ts:79](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L79)

サウンド

##### Returns

[`IEntitySound`](../../../../../type/entity/entity/IEntitySound/interfaces/IEntitySound.md)

サウンド

#### Inherited from

[`Entity`](../../../entity/classes/Entity.md).[`Sound`](../../../entity/classes/Entity.md#sound)

***

### SOUND\_FORCE\_STOP

#### Get Signature

> **get** **SOUND\_FORCE\_STOP**(): `string`

Defined in: [src/lib/entity/entity/index.ts:27](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L27)

##### Returns

`string`

#### Inherited from

[`Entity`](../../../entity/classes/Entity.md).[`SOUND_FORCE_STOP`](../../../entity/classes/Entity.md#sound_force_stop)

***

### Speech

#### Get Signature

> **get** **Speech**(): [`IEntitySpeech`](../../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md)

Defined in: [src/lib/entity/entity/index.ts:82](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L82)

スピーチ

##### Returns

[`IEntitySpeech`](../../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md)

スピーチ

#### Inherited from

[`Entity`](../../../entity/classes/Entity.md).[`Speech`](../../../entity/classes/Entity.md#speech)

***

### visible

#### Get Signature

> **get** **visible**(): `boolean`

Defined in: [src/lib/entity/monitor/monitor.ts:147](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitor.ts#L147)

##### Returns

`boolean`

## Methods

### \_drop()

> **\_drop**(): `void`

Defined in: [src/lib/entity/monitor/monitor.ts:217](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitor.ts#L217)

#### Returns

`void`

***

### \_isMouseDown()

> **\_isMouseDown**(): `boolean`

Defined in: [src/lib/entity/monitor/monitor.ts:214](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitor.ts#L214)

#### Returns

`boolean`

***

### \_isMouseTouching()

> **\_isMouseTouching**(): `boolean`

Defined in: [src/lib/entity/monitor/monitor.ts:198](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitor.ts#L198)

#### Returns

`boolean`

***

### createDrawable()

> **createDrawable**(`layer`): `void`

Defined in: [src/lib/entity/entity/index.ts:56](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L56)

#### Parameters

##### layer

[`StageLayeringValue`](../../../../../type/entity/stage/CStageLayering/type-aliases/StageLayeringValue.md)

#### Returns

`void`

#### Inherited from

[`Entity`](../../../entity/classes/Entity.md).[`createDrawable`](../../../entity/classes/Entity.md#createdrawable)

***

### createTextSkin()

> **createTextSkin**(): `void`

Defined in: [src/lib/entity/monitor/monitor.ts:150](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitor.ts#L150)

#### Returns

`void`

***

### draw()

> **draw**(): `void`

Defined in: [src/lib/entity/monitor/monitor.ts:179](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitor.ts#L179)

#### Returns

`void`

***

### getDefaultHeight()

> **getDefaultHeight**(): `number`

Defined in: [src/lib/entity/monitor/monitor.ts:162](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitor.ts#L162)

#### Returns

`number`

***

### getDrawingDimension()

> **getDrawingDimension**(): `object`

Defined in: [src/lib/entity/monitor/monitor.ts:168](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitor.ts#L168)

#### Returns

`object`

##### h

> **h**: `number` = `height`

##### w

> **w**: `number` = `width`

***

### hide()

> **hide**(): `void`

Defined in: [src/lib/entity/monitor/monitor.ts:141](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitor.ts#L141)

隠す

#### Returns

`void`

#### Implementation of

[`IMonitor`](../../../../../type/entity/monitor/monitor/interfaces/IMonitor.md).[`hide`](../../../../../type/entity/monitor/monitor/interfaces/IMonitor.md#hide)

***

### imageLoadCompleteAll()

> **imageLoadCompleteAll**(): `boolean`

Defined in: [src/lib/entity/entity/index.ts:97](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L97)

#### Returns

`boolean`

#### Inherited from

[`Entity`](../../../entity/classes/Entity.md).[`imageLoadCompleteAll`](../../../entity/classes/Entity.md#imageloadcompleteall)

***

### loadCompleteAll()

> **loadCompleteAll**(): `boolean`

Defined in: [src/lib/entity/entity/index.ts:105](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L105)

#### Returns

`boolean`

#### Inherited from

[`Entity`](../../../entity/classes/Entity.md).[`loadCompleteAll`](../../../entity/classes/Entity.md#loadcompleteall)

***

### renderDraw()

> **renderDraw**(): `void`

Defined in: [src/lib/entity/monitor/monitor.ts:186](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitor.ts#L186)

#### Returns

`void`

***

### show()

> **show**(): `void`

Defined in: [src/lib/entity/monitor/monitor.ts:135](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitor.ts#L135)

表示する

#### Returns

`void`

#### Implementation of

[`IMonitor`](../../../../../type/entity/monitor/monitor/interfaces/IMonitor.md).[`show`](../../../../../type/entity/monitor/monitor/interfaces/IMonitor.md#show)

***

### update()

> **update**(): `void`

Defined in: [src/lib/entity/entity/index.ts:59](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/index.ts#L59)

#### Returns

`void`

#### Inherited from

[`Entity`](../../../entity/classes/Entity.md).[`update`](../../../entity/classes/Entity.md#update)
