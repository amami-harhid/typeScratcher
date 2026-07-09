# Interface: ISpriteTextToSpeech

Defined in: [src/type/entity/entity/IEntityTextToSpeech.ts:4](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/entity/IEntityTextToSpeech.ts#L4)

サイズ

## Methods

### setSpeechProperties()

> **setSpeechProperties**(`type`, `properties?`, `gender?`, `locale?`): `void`

Defined in: [src/type/entity/entity/IEntityTextToSpeech.ts:25](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/entity/IEntityTextToSpeech.ts#L25)

識別タイプをつけてプロパティを設定する

#### Parameters

##### type

`string`

{string} - プロパティ識別タイプ

##### properties?

[`TSoundPlayerOption`](../../../../sound/IAudioEngine/type-aliases/TSoundPlayerOption.md)

{TSoundPlayerOption} - プロパティ

##### gender?

`string`

{string} - 性別 ( male/female )

##### locale?

`string`

{string} - ロケール ( ja-JP )

#### Returns

`void`

***

### speech()

> **speech**(`words`, `propertyType`): `void`

Defined in: [src/type/entity/entity/IEntityTextToSpeech.ts:11](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/entity/IEntityTextToSpeech.ts#L11)

スピーチする

#### Parameters

##### words

`string`

{string} - テキスト

##### propertyType

`string`

{string} - スピーチプロパティのタイプ

#### Returns

`void`

***

### speechAndWait()

> **speechAndWait**(`words`, `propertyType`): `Promise`\<`void`\>

Defined in: [src/type/entity/entity/IEntityTextToSpeech.ts:17](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/entity/IEntityTextToSpeech.ts#L17)

スピーチして終わるまで待つ

#### Parameters

##### words

`string`

words {string} - テキスト

##### propertyType

`string`

{string} - スピーチプロパティのタイプ

#### Returns

`Promise`\<`void`\>
