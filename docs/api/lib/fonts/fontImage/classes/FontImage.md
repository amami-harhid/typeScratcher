# Class: FontImage

Defined in: [src/lib/fonts/fontImage.ts:10](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/fonts/fontImage.ts#L10)

Image

## Extends

- [`Image`](../../../image/classes/Image.md)

## Implements

- [`IFontImage`](../../../../type/font/fontImage/interfaces/IFontImage.md)

## Constructors

### Constructor

> **new FontImage**(`attributes`): `FontImage`

Defined in: [src/lib/fonts/fontImage.ts:14](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/fonts/fontImage.ts#L14)

#### Parameters

##### attributes

[`createSvgImageAttributes`](../../../../type/font/type-aliases/createSvgImageAttributes.md)

#### Returns

`FontImage`

#### Overrides

[`Image`](../../../image/classes/Image.md).[`constructor`](../../../image/classes/Image.md#constructor)

## Accessors

### image

#### Get Signature

> **get** **image**(): `string`

Defined in: [src/lib/image/index.ts:96](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/image/index.ts#L96)

##### Returns

`string`

#### Set Signature

> **set** **image**(`_img`): `void`

Defined in: [src/lib/image/index.ts:99](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/image/index.ts#L99)

##### Parameters

###### \_img

`string`

##### Returns

`void`

#### Inherited from

[`Image`](../../../image/classes/Image.md).[`image`](../../../image/classes/Image.md#image)

***

### loadCompleted

#### Get Signature

> **get** **loadCompleted**(): `boolean`

Defined in: [src/lib/image/index.ts:102](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/image/index.ts#L102)

##### Returns

`boolean`

#### Inherited from

[`Image`](../../../image/classes/Image.md).[`loadCompleted`](../../../image/classes/Image.md#loadcompleted)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [src/lib/image/index.ts:93](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/image/index.ts#L93)

##### Returns

`string`

#### Implementation of

[`IFontImage`](../../../../type/font/fontImage/interfaces/IFontImage.md).[`name`](../../../../type/font/fontImage/interfaces/IFontImage.md#name)

#### Inherited from

[`Image`](../../../image/classes/Image.md).[`name`](../../../image/classes/Image.md#name)

***

### skinId

#### Get Signature

> **get** **skinId**(): `number`

Defined in: [src/lib/image/index.ts:106](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/image/index.ts#L106)

##### Returns

`number`

#### Set Signature

> **set** **skinId**(`skinId`): `void`

Defined in: [src/lib/image/index.ts:109](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/image/index.ts#L109)

##### Parameters

###### skinId

`number`

##### Returns

`void`

#### Inherited from

[`Image`](../../../image/classes/Image.md).[`skinId`](../../../image/classes/Image.md#skinid)

## Methods

### fontLoad()

> **fontLoad**(): `Promise`\<`void`\>

Defined in: [src/lib/fonts/fontImage.ts:24](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/fonts/fontImage.ts#L24)

#### Returns

`Promise`\<`void`\>

***

### load()

> **load**(): `Promise`\<`void`\>

Defined in: [src/lib/fonts/fontImage.ts:21](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/fonts/fontImage.ts#L21)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Image`](../../../image/classes/Image.md).[`load`](../../../image/classes/Image.md#load)

***

### textToSvg()

> **textToSvg**(`text`): `Promise`\<`void`\>

Defined in: [src/lib/fonts/fontImage.ts:32](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/fonts/fontImage.ts#L32)

#### Parameters

##### text

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFontImage`](../../../../type/font/fontImage/interfaces/IFontImage.md).[`textToSvg`](../../../../type/font/fontImage/interfaces/IFontImage.md#texttosvg)

***

### createSvgImage()

> `static` **createSvgImage**(`image`, `attributes`): `Promise`\<[`IImage`](../../../../type/image/interfaces/IImage.md)\>

Defined in: [src/lib/image/index.ts:32](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/image/index.ts#L32)

文字データの変数を渡してSVG化し、SVGデータを取り込んだImageを作る

#### Parameters

##### image

`ImageArgStringObject`

##### attributes

[`createSvgImageAttributes`](../../../../type/image/type-aliases/createSvgImageAttributes.md)

#### Returns

`Promise`\<[`IImage`](../../../../type/image/interfaces/IImage.md)\>

#### Inherited from

[`Image`](../../../image/classes/Image.md).[`createSvgImage`](../../../image/classes/Image.md#createsvgimage)
