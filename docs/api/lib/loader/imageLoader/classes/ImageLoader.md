# Class: ImageLoader

Defined in: [src/lib/loader/imageLoader.ts:7](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/loader/imageLoader.ts#L7)

Image Loader

## Constructors

### Constructor

> **new ImageLoader**(): `ImageLoader`

#### Returns

`ImageLoader`

## Accessors

### REGEX\_DATA\_IMAGE\_SVG

#### Get Signature

> **get** `static` **REGEX\_DATA\_IMAGE\_SVG**(): `RegExp`

Defined in: [src/lib/loader/imageLoader.ts:26](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/loader/imageLoader.ts#L26)

REGEX_DATA_IMAGE_SVG
svg data の先頭

##### Returns

`RegExp`

***

### REGEX\_DATA\_XML\_SVG

#### Get Signature

> **get** `static` **REGEX\_DATA\_XML\_SVG**(): `RegExp`

Defined in: [src/lib/loader/imageLoader.ts:17](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/loader/imageLoader.ts#L17)

##### Returns

`RegExp`

## Methods

### \_bitmapLoad()

> `static` **\_bitmapLoad**(`path`): `Promise`\<`string`\>

Defined in: [src/lib/loader/imageLoader.ts:56](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/loader/imageLoader.ts#L56)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`string`\>

***

### \_svgText()

> `static` **\_svgText**(`path`): `Promise`\<`string`\>

Defined in: [src/lib/loader/imageLoader.ts:47](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/loader/imageLoader.ts#L47)

与えたアドレスをもとにイメージを取り出し返す。
エラーが起きたときは文字列("ERROR")を返す。

#### Parameters

##### path

`string`

{string}

#### Returns

`Promise`\<`string`\>

Promise<string>

***

### loader()

> `static` **loader**(`path`): `Promise`\<`string`\>

Defined in: [src/lib/loader/imageLoader.ts:31](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/loader/imageLoader.ts#L31)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`string`\>
