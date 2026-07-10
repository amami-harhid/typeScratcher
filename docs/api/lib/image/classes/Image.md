# Class: Image

Defined in: [src/lib/image/index.ts:25](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/image/index.ts#L25)

Image

## Extended by

- [`FontImage`](../../fonts/fontImage/classes/FontImage.md)

## Implements

- [`IImage`](../../../type/image/interfaces/IImage.md)

## Constructors

### Constructor

> **new Image**(`image`): `Image`

Defined in: [src/lib/image/index.ts:76](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/image/index.ts#L76)

#### Parameters

##### image

`ImageArgStringObject`

#### Returns

`Image`

## Accessors

### image

#### Get Signature

> **get** **image**(): `string`

Defined in: [src/lib/image/index.ts:96](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/image/index.ts#L96)

##### Returns

`string`

#### Set Signature

> **set** **image**(`_img`): `void`

Defined in: [src/lib/image/index.ts:99](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/image/index.ts#L99)

##### Parameters

###### \_img

`string`

##### Returns

`void`

***

### loadCompleted

#### Get Signature

> **get** **loadCompleted**(): `boolean`

Defined in: [src/lib/image/index.ts:102](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/image/index.ts#L102)

##### Returns

`boolean`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [src/lib/image/index.ts:93](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/image/index.ts#L93)

##### Returns

`string`

#### Implementation of

[`IImage`](../../../type/image/interfaces/IImage.md).[`name`](../../../type/image/interfaces/IImage.md#name)

***

### skinId

#### Get Signature

> **get** **skinId**(): `number`

Defined in: [src/lib/image/index.ts:106](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/image/index.ts#L106)

##### Returns

`number`

#### Set Signature

> **set** **skinId**(`skinId`): `void`

Defined in: [src/lib/image/index.ts:109](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/image/index.ts#L109)

##### Parameters

###### skinId

`number`

##### Returns

`void`

## Methods

### load()

> **load**(): `Promise`\<`void`\>

Defined in: [src/lib/image/index.ts:81](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/image/index.ts#L81)

#### Returns

`Promise`\<`void`\>

***

### createSvgImage()

> `static` **createSvgImage**(`image`, `attributes`): `Promise`\<[`IImage`](../../../type/image/interfaces/IImage.md)\>

Defined in: [src/lib/image/index.ts:32](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/image/index.ts#L32)

文字データの変数を渡してSVG化し、SVGデータを取り込んだImageを作る

#### Parameters

##### image

`ImageArgStringObject`

##### attributes

[`createSvgImageAttributes`](../../../type/image/type-aliases/createSvgImageAttributes.md)

#### Returns

`Promise`\<[`IImage`](../../../type/image/interfaces/IImage.md)\>
