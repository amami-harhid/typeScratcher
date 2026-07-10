# Interface: IMonitorSkin

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:23](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/monitor/IMonitorSkin.ts#L23)

S3MonitorSkin

## Properties

### canvas

> `readonly` **canvas**: `HTMLCanvasElement`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:79](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/monitor/IMonitorSkin.ts#L79)

#### Returns

***

### ctx

> `readonly` **ctx**: `CanvasRenderingContext2D`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:84](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/monitor/IMonitorSkin.ts#L84)

#### Returns

***

### dropping

> **dropping**: `boolean`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:25](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/monitor/IMonitorSkin.ts#L25)

***

### id

> `readonly` **id**: `number`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:41](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/monitor/IMonitorSkin.ts#L41)

#### Returns

the unique ID for this Skin.

***

### measurementProvider

> `readonly` **measurementProvider**: [`IMeasurementProvider`](../../../../util/IMeasurementProvider/interfaces/IMeasurementProvider.md)

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:89](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/monitor/IMonitorSkin.ts#L89)

#### Returns

***

### rotationCenter

> `readonly` **rotationCenter**: `Vec3`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:43](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/monitor/IMonitorSkin.ts#L43)

***

### size

> `readonly` **size**: `number`[]

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:48](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/monitor/IMonitorSkin.ts#L48)

#### Returns

the "native" size, in texels, of this skin.

***

### textAreaSize

> `readonly` **textAreaSize**: [`TSize`](../../../../common/typeCommon/type-aliases/TSize.md)

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:68](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/monitor/IMonitorSkin.ts#L68)

textAreaSize

#### Returns

textAreaSize

***

### value

> **value**: `string` \| `number`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:117](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/monitor/IMonitorSkin.ts#L117)

Set parameters for this text monitor.

#### Param

**value**

***

### x

> **x**: `number`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:60](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/monitor/IMonitorSkin.ts#L60)

***

### y

> **y**: `number`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:62](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/monitor/IMonitorSkin.ts#L62)

## Methods

### \_reflowLines()

> **\_reflowLines**(): `void`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:124](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/monitor/IMonitorSkin.ts#L124)

Update the array of wrapped lines and the text dimensions.

#### Returns

`void`

***

### \_renderTextMonitor()

> **\_renderTextMonitor**(`scale`): `void`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:130](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/monitor/IMonitorSkin.ts#L130)

Render this text monitor at a certain scale, using the current parameters, to the canvas.

#### Parameters

##### scale

`number`

#### Returns

`void`

***

### \_restyleCanvas()

> **\_restyleCanvas**(): `void`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:119](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/monitor/IMonitorSkin.ts#L119)

#### Returns

`void`

***

### \_setTexture()

> **\_setTexture**(`textureData`): `void`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:107](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/monitor/IMonitorSkin.ts#L107)

Set this skin's texture to the given image.

#### Parameters

##### textureData

`HTMLCanvasElement` \| `ImageData`

The canvas or image data to set the texture to.

#### Returns

`void`

***

### calculateRotationCenter()

> **calculateRotationCenter**(): `number`[]

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:74](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/monitor/IMonitorSkin.ts#L74)

Get the center of the current bounding box

#### Returns

`number`[]

the center of the current bounding box

***

### createCanvas()

> **createCanvas**(): `CanvasRenderingContext2D`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:30](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/monitor/IMonitorSkin.ts#L30)

#### Returns

`CanvasRenderingContext2D`

***

### dispose()

> **dispose**(): `void`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:36](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/monitor/IMonitorSkin.ts#L36)

Dispose of this object. Do not use it after calling this method.

#### Returns

`void`

***

### getDefaultHeight()

> **getDefaultHeight**(): `void`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:32](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/monitor/IMonitorSkin.ts#L32)

#### Returns

`void`

***

### getTexture()

> **getTexture**(`scale`): `WebGLTexture`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:95](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/monitor/IMonitorSkin.ts#L95)

#### Parameters

##### scale

`number`[]

The scaling factors to be used.

#### Returns

`WebGLTexture`

The GL texture representation of this skin when drawing at the given size.

***

### getUniforms()

> **getUniforms**(`scale`): `TUniform`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:137](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/monitor/IMonitorSkin.ts#L137)

#### Parameters

##### scale

`number`[]

#### Returns

`TUniform`

***

### hide()

> **hide**(): `void`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:111](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/monitor/IMonitorSkin.ts#L111)

#### Returns

`void`

***

### isTouchingLinear()

> **isTouchingLinear**(`vec`): `boolean`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:159](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/monitor/IMonitorSkin.ts#L159)

Does this point touch an opaque or translucent point on this skin?
Linear Interpolation version
The caller is responsible for ensuring this skin's silhouette is up-to-date.

#### Parameters

##### vec

[`TVec3`](../../../../common/typeCommon/type-aliases/TVec3.md)

A texture coordinate.

#### Returns

`boolean`

Did it touch?

#### See

 - updateSilhouette
 - Drawable.updateCPURenderAttributes

***

### isTouchingNearest()

> **isTouchingNearest**(`vec`): `boolean`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:148](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/monitor/IMonitorSkin.ts#L148)

Does this point touch an opaque or translucent point on this skin?
Nearest Neighbor version
The caller is responsible for ensuring this skin's silhouette is up-to-date.

#### Parameters

##### vec

[`TVec3`](../../../../common/typeCommon/type-aliases/TVec3.md)

A texture coordinate.

#### Returns

`boolean`

Did it touch?

#### See

 - updateSilhouette
 - Drawable.updateCPURenderAttributes

***

### show()

> **show**(): `void`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:109](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/monitor/IMonitorSkin.ts#L109)

#### Returns

`void`

***

### updateSilhouette()

> **updateSilhouette**(`scale`): `void`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:101](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/monitor/IMonitorSkin.ts#L101)

If the skin defers silhouette operations until the last possible minute,
this will be called before isTouching uses the silhouette.

#### Parameters

##### scale

`number`[]

#### Returns

`void`

***

### useNearest()

> **useNearest**(`scale`, `drawable`): `boolean`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:58](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/monitor/IMonitorSkin.ts#L58)

Should this skin's texture be filtered with nearest-neighbor or linear interpolation at the given scale?

#### Parameters

##### scale

`number`[]

The screen-space X and Y scaling factors at which this skin's texture will be
displayed, as percentages (100 means 1 "native size" unit is 1 screen pixel; 200 means 2 screen pixels, etc).

##### drawable

[`IDrawable`](../../../../render/IDrawable/interfaces/IDrawable.md)

The drawable that this skin's texture will be applied to.

#### Returns

`boolean`

True if this skin's texture, as returned by [getTexture](#gettexture), should be filtered with
nearest-neighbor interpolation.
