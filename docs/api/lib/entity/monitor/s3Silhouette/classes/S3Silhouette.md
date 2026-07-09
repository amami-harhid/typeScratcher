# Class: S3Silhouette

Defined in: [src/lib/entity/monitor/s3Silhouette.ts:100](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/monitor/s3Silhouette.ts#L100)

## Constructors

### Constructor

> **new S3Silhouette**(): `S3Silhouette`

Defined in: [src/lib/entity/monitor/s3Silhouette.ts:115](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/monitor/s3Silhouette.ts#L115)

#### Returns

`S3Silhouette`

## Accessors

### data

#### Get Signature

> **get** **data**(): `Uint8ClampedArray`\<`ArrayBufferLike`\>

Defined in: [src/lib/entity/monitor/s3Silhouette.ts:111](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/monitor/s3Silhouette.ts#L111)

##### Returns

`Uint8ClampedArray`\<`ArrayBufferLike`\>

***

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [src/lib/entity/monitor/s3Silhouette.ts:108](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/monitor/s3Silhouette.ts#L108)

##### Returns

`number`

***

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [src/lib/entity/monitor/s3Silhouette.ts:105](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/monitor/s3Silhouette.ts#L105)

##### Returns

`number`

## Methods

### colorAtLinear()?

> `optional` **colorAtLinear**(`vec`, `dst`): `Uint8ClampedArray`

Defined in: [src/lib/entity/monitor/s3Silhouette.ts:209](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/monitor/s3Silhouette.ts#L209)

Sample a color from the silhouette at a given local position using
"linear interpolation"

#### Parameters

##### vec

[`TVec3`](../../../../../type/common/typeCommon/type-aliases/TVec3.md)

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

Defined in: [src/lib/entity/monitor/s3Silhouette.ts:193](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/monitor/s3Silhouette.ts#L193)

Sample a color from the silhouette at a given local position using
"nearest neighbor"

#### Parameters

##### vec

[`TVec3`](../../../../../type/common/typeCommon/type-aliases/TVec3.md)

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

Defined in: [src/lib/entity/monitor/s3Silhouette.ts:254](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/monitor/s3Silhouette.ts#L254)

Test to see if any of the 4 pixels used in the linear interpolate touch
the silhouette.

#### Parameters

##### vec

[`TVec3`](../../../../../type/common/typeCommon/type-aliases/TVec3.md)

A texture coordinate.

#### Returns

`boolean`

Any of the pixels have some alpha.

***

### isTouchingNearest()

> **isTouchingNearest**(`vec`): `boolean`

Defined in: [src/lib/entity/monitor/s3Silhouette.ts:239](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/monitor/s3Silhouette.ts#L239)

Test if texture coordinate touches the silhouette using nearest neighbor.

#### Parameters

##### vec

[`TVec3`](../../../../../type/common/typeCommon/type-aliases/TVec3.md)

A texture coordinate.

#### Returns

`boolean`

If the nearest pixel has an alpha value.

***

### update()

> **update**(`bitmapData`, `isPremultiplied?`): `void`

Defined in: [src/lib/entity/monitor/s3Silhouette.ts:148](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/monitor/s3Silhouette.ts#L148)

Update this silhouette with the bitmapData for a skin.

#### Parameters

##### bitmapData

[`TBitMapData`](../../../../../type/entity/monitor/ISilhouette/type-aliases/TBitMapData.md)

An image, canvas or other element that the skin

##### isPremultiplied?

`boolean` = `false`

True if the source bitmap data comes premultiplied (e.g. from readPixels).
rendering can be queried from.

#### Returns

`void`
