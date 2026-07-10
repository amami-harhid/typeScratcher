# Class: S3MonitorSkin

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:55](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L55)

S3MonitorSkin

## Extends

- `EventEmitter`

## Implements

- [`IMonitorSkin`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md)

## Constructors

### Constructor

> **new S3MonitorSkin**(`id`, `renderer`, `title`, `x?`, `y?`): `S3MonitorSkin`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:101](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L101)

Create a S3Skin, which stores and/or generates textures for use in rendering.

#### Parameters

##### id

`number`

The unique ID for this S3Skin.

##### renderer

[`IRenderWebGL`](../../../../../type/render/IRenderWebGL/interfaces/IRenderWebGL.md)

{RenderWebGL} - The renderer which will use this skin.

##### title

`string`

{string} - monitor title

##### x?

`number` = `0`

{number}

##### y?

`number` = `0`

{number}

#### Returns

`S3MonitorSkin`

#### Overrides

`EventEmitter.constructor`

## Properties

### \_canvas

> **\_canvas**: `HTMLCanvasElement` \| `null`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:80](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L80)

***

### Events

> `static` **Events**: `object`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:56](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L56)

#### WasAltered

> **WasAltered**: `string` = `'WasAltered'`

This constant value is same as Skin class
Emitted when anything about the Skin has been altered, such as the appearance or rotation center.
 S3MonitorSkin.event:WasAltered

## Accessors

### canvas

#### Get Signature

> **get** **canvas**(): `HTMLCanvasElement`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:262](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L262)

##### Returns

`HTMLCanvasElement`

#### Implementation of

[`IMonitorSkin`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md).[`canvas`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md#canvas)

***

### ctx

#### Get Signature

> **get** **ctx**(): `CanvasRenderingContext2D`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:270](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L270)

##### Returns

`CanvasRenderingContext2D`

#### Implementation of

[`IMonitorSkin`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md).[`ctx`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md#ctx)

***

### dropping

#### Get Signature

> **get** **dropping**(): `boolean`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:170](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L170)

##### Returns

`boolean`

#### Set Signature

> **set** **dropping**(`_dropping`): `void`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:173](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L173)

##### Parameters

###### \_dropping

`boolean`

##### Returns

`void`

#### Implementation of

[`IMonitorSkin`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md).[`dropping`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md#dropping)

***

### id

#### Get Signature

> **get** **id**(): `number`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:206](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L206)

##### Returns

`number`

the unique ID for this Skin.

#### Implementation of

[`IMonitorSkin`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md).[`id`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md#id)

***

### measurementProvider

#### Get Signature

> **get** **measurementProvider**(): [`MeasurementProvider`](../../../../utils/MeasurementProvider/classes/MeasurementProvider.md)

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:276](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L276)

##### Returns

[`MeasurementProvider`](../../../../utils/MeasurementProvider/classes/MeasurementProvider.md)

#### Implementation of

[`IMonitorSkin`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md).[`measurementProvider`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md#measurementprovider)

***

### rotationCenter

#### Get Signature

> **get** **rotationCenter**(): `Vec3`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:209](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L209)

##### Returns

`Vec3`

#### Implementation of

[`IMonitorSkin`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md).[`rotationCenter`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md#rotationcenter)

***

### size

#### Get Signature

> **get** **size**(): `number`[]

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:215](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L215)

##### Returns

`number`[]

the "native" size, in texels, of this skin.

#### Implementation of

[`IMonitorSkin`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md).[`size`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md#size)

***

### text

#### Set Signature

> **set** **text**(`text`): `void`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:350](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L350)

##### Parameters

###### text

`string`

##### Returns

`void`

***

### textAreaSize

#### Get Signature

> **get** **textAreaSize**(): [`TSize`](../../../../../type/common/typeCommon/type-aliases/TSize.md)

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:249](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L249)

textAreaSize

##### Returns

[`TSize`](../../../../../type/common/typeCommon/type-aliases/TSize.md)

textAreaSize

textAreaSize

#### Implementation of

[`IMonitorSkin`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md).[`textAreaSize`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md#textareasize)

***

### value

#### Get Signature

> **get** **value**(): `string` \| `number`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:359](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L359)

Set parameters for this text monitor.

##### Returns

`string` \| `number`

#### Set Signature

> **set** **value**(`value`): `void`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:342](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L342)

Set parameters for this text monitor.

##### Parameters

###### value

`number`

##### Returns

`void`

Set parameters for this text monitor.

#### Param

**value**

#### Implementation of

[`IMonitorSkin`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md).[`value`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md#value)

***

### x

#### Get Signature

> **get** **x**(): `number`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:233](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L233)

##### Returns

`number`

#### Set Signature

> **set** **x**(`_x`): `void`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:239](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L239)

##### Parameters

###### \_x

`number`

##### Returns

`void`

#### Implementation of

[`IMonitorSkin`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md).[`x`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md#x)

***

### y

#### Get Signature

> **get** **y**(): `number`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:236](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L236)

##### Returns

`number`

#### Set Signature

> **set** **y**(`_y`): `void`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:242](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L242)

##### Parameters

###### \_y

`number`

##### Returns

`void`

#### Implementation of

[`IMonitorSkin`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md).[`y`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md#y)

## Methods

### \_reflowLines()

> **\_reflowLines**(): `void`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:369](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L369)

Update the array of wrapped lines and the text dimensions.

#### Returns

`void`

#### Implementation of

[`IMonitorSkin`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md).[`_reflowLines`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md#_reflowlines)

***

### \_renderTextMonitor()

> **\_renderTextMonitor**(`scale`): `void`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:400](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L400)

Render this text monitor at a certain scale, using the current parameters, to the canvas.

#### Parameters

##### scale

`number`

#### Returns

`void`

#### Implementation of

[`IMonitorSkin`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md).[`_renderTextMonitor`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md#_rendertextmonitor)

***

### \_restyleCanvas()

> **\_restyleCanvas**(): `void`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:362](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L362)

#### Returns

`void`

#### Implementation of

[`IMonitorSkin`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md).[`_restyleCanvas`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md#_restylecanvas)

***

### \_setTexture()

> **\_setTexture**(`textureData`): `void`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:323](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L323)

Set this skin's texture to the given image.

#### Parameters

##### textureData

[`TBitMapData`](../../../../../type/entity/monitor/ISilhouette/type-aliases/TBitMapData.md)

The canvas or image data to set the texture to.

#### Returns

`void`

#### Implementation of

[`IMonitorSkin`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md).[`_setTexture`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md#_settexture)

***

### calculateRotationCenter()

> **calculateRotationCenter**(): `number`[]

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:256](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L256)

Get the center of the current bounding box

#### Returns

`number`[]

the center of the current bounding box

#### Implementation of

[`IMonitorSkin`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md).[`calculateRotationCenter`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md#calculaterotationcenter)

***

### createCanvas()

> **createCanvas**(): `CanvasRenderingContext2D`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:179](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L179)

#### Returns

`CanvasRenderingContext2D`

#### Implementation of

[`IMonitorSkin`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md).[`createCanvas`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md#createcanvas)

***

### dispose()

> **dispose**(): `void`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:195](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L195)

Dispose of this object. Do not use it after calling this method.

#### Returns

`void`

#### Implementation of

[`IMonitorSkin`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md).[`dispose`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md#dispose)

***

### getDefaultHeight()

> **getDefaultHeight**(): `number`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:187](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L187)

#### Returns

`number`

#### Implementation of

[`IMonitorSkin`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md).[`getDefaultHeight`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md#getdefaultheight)

***

### getTexture()

> **getTexture**(`scale`): `WebGLTexture`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:284](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L284)

#### Parameters

##### scale

`number`[]

The scaling factors to be used.

#### Returns

`WebGLTexture`

The GL texture representation of this skin when drawing at the given size.

#### Implementation of

[`IMonitorSkin`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md).[`getTexture`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md#gettexture)

***

### getUniforms()

> **getUniforms**(`scale`): `TUniform`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:525](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L525)

#### Parameters

##### scale

`any`

#### Returns

`TUniform`

#### Implementation of

[`IMonitorSkin`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md).[`getUniforms`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md#getuniforms)

***

### hide()

> **hide**(): `void`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:335](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L335)

#### Returns

`void`

#### Implementation of

[`IMonitorSkin`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md).[`hide`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md#hide)

***

### isTouchingLinear()

> **isTouchingLinear**(`vec`): `boolean`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:552](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L552)

Does this point touch an opaque or translucent point on this skin?
Linear Interpolation version
The caller is responsible for ensuring this skin's silhouette is up-to-date.

#### Parameters

##### vec

[`TVec3`](../../../../../type/common/typeCommon/type-aliases/TVec3.md)

A texture coordinate.

#### Returns

`boolean`

Did it touch?

#### See

 - updateSilhouette
 - Drawable.updateCPURenderAttributes

#### Implementation of

[`IMonitorSkin`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md).[`isTouchingLinear`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md#istouchinglinear)

***

### isTouchingNearest()

> **isTouchingNearest**(`vec`): `boolean`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:539](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L539)

Does this point touch an opaque or translucent point on this skin?
Nearest Neighbor version
The caller is responsible for ensuring this skin's silhouette is up-to-date.

#### Parameters

##### vec

`any`

A texture coordinate.

#### Returns

`boolean`

Did it touch?

#### See

 - updateSilhouette
 - Drawable.updateCPURenderAttributes

#### Implementation of

[`IMonitorSkin`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md).[`isTouchingNearest`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md#istouchingnearest)

***

### show()

> **show**(): `void`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:332](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L332)

#### Returns

`void`

#### Implementation of

[`IMonitorSkin`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md).[`show`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md#show)

***

### updateSilhouette()

> **updateSilhouette**(`scale?`): `void`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:316](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L316)

If the skin defers silhouette operations until the last possible minute,
this will be called before isTouching uses the silhouette.

#### Parameters

##### scale?

`number`[] = `...`

#### Returns

`void`

#### Implementation of

[`IMonitorSkin`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md).[`updateSilhouette`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md#updatesilhouette)

***

### useNearest()

> **useNearest**(`scale`, `drawable`): `boolean`

Defined in: [src/lib/entity/monitor/s3MonitorSkin.ts:229](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/monitor/s3MonitorSkin.ts#L229)

Should this skin's texture be filtered with nearest-neighbor or linear interpolation at the given scale?

#### Parameters

##### scale

`number`[]

The screen-space X and Y scaling factors at which this skin's texture will be
displayed, as percentages (100 means 1 "native size" unit is 1 screen pixel; 200 means 2 screen pixels, etc).

##### drawable

[`IDrawable`](../../../../../type/render/IDrawable/interfaces/IDrawable.md)

The drawable that this skin's texture will be applied to.

#### Returns

`boolean`

True if this skin's texture, as returned by [getTexture](#gettexture), should be filtered with
nearest-neighbor interpolation.

#### Implementation of

[`IMonitorSkin`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md).[`useNearest`](../../../../../type/entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md#usenearest)
