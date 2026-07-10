# Interface: ISilhouette

Defined in: [src/type/entity/monitor/ISilhouette.ts:13](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/monitor/ISilhouette.ts#L13)

## Properties

### data

> `readonly` **data**: `Uint8ClampedArray`\<`ArrayBufferLike`\>

Defined in: [src/type/entity/monitor/ISilhouette.ts:16](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/monitor/ISilhouette.ts#L16)

***

### height

> `readonly` **height**: `number`

Defined in: [src/type/entity/monitor/ISilhouette.ts:15](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/monitor/ISilhouette.ts#L15)

***

### width

> `readonly` **width**: `number`

Defined in: [src/type/entity/monitor/ISilhouette.ts:14](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/monitor/ISilhouette.ts#L14)

## Methods

### colorAtLinear()?

> `optional` **colorAtLinear**(`vec`, `dst`): `Uint8ClampedArray`

Defined in: [src/type/entity/monitor/ISilhouette.ts:41](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/monitor/ISilhouette.ts#L41)

Sample a color from the silhouette at a given local position using
"linear interpolation"

#### Parameters

##### vec

[`TVec3`](../../../../common/typeCommon/type-aliases/TVec3.md)

[x,y] texture space (0-1)

##### dst

`Uint8ClampedArray`

The memory buffer to store the value in. (4 bytes)

#### Returns

`Uint8ClampedArray`

dst

***

### colorAtNearest()?

> `optional` **colorAtNearest**(`vec`, `dst`): `Uint8ClampedArray`

Defined in: [src/type/entity/monitor/ISilhouette.ts:32](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/monitor/ISilhouette.ts#L32)

Sample a color from the silhouette at a given local position using
"nearest neighbor"

#### Parameters

##### vec

[`TVec3`](../../../../common/typeCommon/type-aliases/TVec3.md)

[x,y] texture space (0-1)

##### dst

`Uint8ClampedArray`

The memory buffer to store the value in. (4 bytes)

#### Returns

`Uint8ClampedArray`

dst

***

### isTouchingLinear()

> **isTouchingLinear**(`vec`): `boolean`

Defined in: [src/type/entity/monitor/ISilhouette.ts:56](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/monitor/ISilhouette.ts#L56)

Test to see if any of the 4 pixels used in the linear interpolate touch
the silhouette.

#### Parameters

##### vec

[`TVec3`](../../../../common/typeCommon/type-aliases/TVec3.md)

A texture coordinate.

#### Returns

`boolean`

Any of the pixels have some alpha.

***

### isTouchingNearest()

> **isTouchingNearest**(`vec`): `boolean`

Defined in: [src/type/entity/monitor/ISilhouette.ts:48](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/monitor/ISilhouette.ts#L48)

Test if texture coordinate touches the silhouette using nearest neighbor.

#### Parameters

##### vec

[`TVec3`](../../../../common/typeCommon/type-aliases/TVec3.md)

A texture coordinate.

#### Returns

`boolean`

If the nearest pixel has an alpha value.

***

### update()

> **update**(`bitmapData`, `isPremultiplied?`): `void`

Defined in: [src/type/entity/monitor/ISilhouette.ts:23](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/monitor/ISilhouette.ts#L23)

Update this silhouette with the bitmapData for a skin.

#### Parameters

##### bitmapData

[`TBitMapData`](../type-aliases/TBitMapData.md)

An image, canvas or other element that the skin

##### isPremultiplied?

`boolean`

True if the source bitmap data comes premultiplied (e.g. from readPixels).
rendering can be queried from.

#### Returns

`void`
