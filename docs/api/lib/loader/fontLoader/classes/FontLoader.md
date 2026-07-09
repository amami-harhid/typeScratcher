# Class: FontLoader

Defined in: [src/lib/loader/fontLoader.ts:4](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/loader/fontLoader.ts#L4)

FontLoader

## Constructors

### Constructor

> **new FontLoader**(): `FontLoader`

#### Returns

`FontLoader`

## Methods

### fontFaceLoad()

> `static` **fontFaceLoad**(`url`, `name`): `Promise`\<`FontFace`\>

Defined in: [src/lib/loader/fontLoader.ts:11](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/loader/fontLoader.ts#L11)

フォントをロードする

#### Parameters

##### url

`string`

{string}

##### name

`string`

{string}

#### Returns

`Promise`\<`FontFace`\>

***

### fontLoad()

> `static` **fontLoad**(`url`, `name`): `Promise`\<\{ `data`: `string`[]; `name`: `string`; \}\>

Defined in: [src/lib/loader/fontLoader.ts:26](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/loader/fontLoader.ts#L26)

フォントをロードする

#### Parameters

##### url

`string`

{string} - fontの URL

##### name

`string`

{string} - BlobをBase64化した文字列( data:font/～;base64,～)

#### Returns

`Promise`\<\{ `data`: `string`[]; `name`: `string`; \}\>
