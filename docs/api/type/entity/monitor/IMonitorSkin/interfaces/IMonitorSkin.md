# Interface: IMonitorSkin

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:21](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/IMonitorSkin.ts#L21)

## Properties

### canvas

> `readonly` **canvas**: `HTMLCanvasElement`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:77](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/IMonitorSkin.ts#L77)

#### Returns

***

### ctx

> `readonly` **ctx**: `CanvasRenderingContext2D`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:82](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/IMonitorSkin.ts#L82)

#### Returns

***

### dropping

> **dropping**: `boolean`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:23](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/IMonitorSkin.ts#L23)

***

### id

> `readonly` **id**: `number`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:39](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/IMonitorSkin.ts#L39)

#### Returns

the unique ID for this Skin.

***

### measurementProvider

> `readonly` **measurementProvider**: [`IMeasurementProvider`](../../../../util/IMeasurementProvider/interfaces/IMeasurementProvider.md)

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:87](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/IMonitorSkin.ts#L87)

#### Returns

***

### rotationCenter

> `readonly` **rotationCenter**: [`TVec3`](../../../../common/typeCommon/type-aliases/TVec3.md)

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:41](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/IMonitorSkin.ts#L41)

***

### size

> `readonly` **size**: `number`[]

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:46](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/IMonitorSkin.ts#L46)

#### Returns

the "native" size, in texels, of this skin.

***

### textAreaSize

> `readonly` **textAreaSize**: [`TSize`](../../../../common/typeCommon/type-aliases/TSize.md)

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:66](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/IMonitorSkin.ts#L66)

textAreaSize

#### Returns

textAreaSize

***

### value

> **value**: `string` \| `number`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:115](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/IMonitorSkin.ts#L115)

Set parameters for this text monitor.

#### Param

**value**

***

### x

> **x**: `number`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:58](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/IMonitorSkin.ts#L58)

***

### y

> **y**: `number`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:60](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/IMonitorSkin.ts#L60)

## Methods

### \_reflowLines()

> **\_reflowLines**(): `void`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:122](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/IMonitorSkin.ts#L122)

Update the array of wrapped lines and the text dimensions.

#### Returns

`void`

***

### \_renderTextMonitor()

> **\_renderTextMonitor**(`scale`): `void`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:128](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/IMonitorSkin.ts#L128)

Render this text monitor at a certain scale, using the current parameters, to the canvas.

#### Parameters

##### scale

`number`

#### Returns

`void`

***

### \_restyleCanvas()

> **\_restyleCanvas**(): `void`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:117](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/IMonitorSkin.ts#L117)

#### Returns

`void`

***

### \_setTexture()

> **\_setTexture**(`textureData`): `void`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:105](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/IMonitorSkin.ts#L105)

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

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:72](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/IMonitorSkin.ts#L72)

Get the center of the current bounding box

#### Returns

`number`[]

the center of the current bounding box

***

### createCanvas()

> **createCanvas**(): `CanvasRenderingContext2D`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:28](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/IMonitorSkin.ts#L28)

#### Returns

`CanvasRenderingContext2D`

***

### dispose()

> **dispose**(): `void`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:34](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/IMonitorSkin.ts#L34)

Dispose of this object. Do not use it after calling this method.

#### Returns

`void`

***

### getDefaultHeight()

> **getDefaultHeight**(): `void`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:30](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/IMonitorSkin.ts#L30)

#### Returns

`void`

***

### getTexture()

> **getTexture**(`scale`): `WebGLTexture`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:93](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/IMonitorSkin.ts#L93)

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

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:135](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/IMonitorSkin.ts#L135)

#### Parameters

##### scale

`number`[]

#### Returns

`TUniform`

***

### hide()

> **hide**(): `void`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:109](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/IMonitorSkin.ts#L109)

#### Returns

`void`

***

### isTouchingLinear()

> **isTouchingLinear**(`vec`): `boolean`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:157](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/IMonitorSkin.ts#L157)

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

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:146](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/IMonitorSkin.ts#L146)

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

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:107](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/IMonitorSkin.ts#L107)

#### Returns

`void`

***

### updateSilhouette()

> **updateSilhouette**(`scale`): `void`

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:99](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/IMonitorSkin.ts#L99)

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

Defined in: [src/type/entity/monitor/IMonitorSkin.ts:56](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/IMonitorSkin.ts#L56)

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
