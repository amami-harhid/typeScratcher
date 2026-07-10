# Class: ImageToBase64Util

Defined in: [src/lib/utils/base64Util.ts:2](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/utils/base64Util.ts#L2)

## Constructors

### Constructor

> **new ImageToBase64Util**(): `ImageToBase64Util`

#### Returns

`ImageToBase64Util`

## Methods

### blobToBase64()

> `static` **blobToBase64**(`blob`): `Promise`\<`string`\>

Defined in: [src/lib/utils/base64Util.ts:35](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/utils/base64Util.ts#L35)

BlobをBase64へ変換
例: data:font/woff2;base64,～

#### Parameters

##### blob

`Blob`

#### Returns

`Promise`\<`string`\>

***

### getLoadInfo()

> `static` **getLoadInfo**(`url`): `Promise`\<\{ `data`: `string`; `size`: \{ `heigth`: `number`; `width`: `number`; \}; \}\>

Defined in: [src/lib/utils/base64Util.ts:11](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/utils/base64Util.ts#L11)

指定したURLを読み込み、ロード後の情報を返す
イメージデータを前提とする。
他のデータのロードは結果を保証しない。

#### Parameters

##### url

`string`

#### Returns

`Promise`\<\{ `data`: `string`; `size`: \{ `heigth`: `number`; `width`: `number`; \}; \}\>
