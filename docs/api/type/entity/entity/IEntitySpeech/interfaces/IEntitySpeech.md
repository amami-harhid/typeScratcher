# Interface: IEntitySpeech

Defined in: [src/type/entity/entity/IEntitySpeech.ts:71](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/entity/IEntitySpeech.ts#L71)

スピーチ機能

## Methods

### addPitch()

> **addPitch**(`pitch`): [`NextMethodsAddPitch`](NextMethodsAddPitch.md)

Defined in: [src/type/entity/entity/IEntitySpeech.ts:89](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/entity/IEntitySpeech.ts#L89)

ピッチを加える

#### Parameters

##### pitch

`number`

#### Returns

[`NextMethodsAddPitch`](NextMethodsAddPitch.md)

***

### addVolume()

> **addVolume**(`volume`): [`NextMethodsAddVolume`](NextMethodsAddVolume.md)

Defined in: [src/type/entity/entity/IEntitySpeech.ts:86](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/entity/IEntitySpeech.ts#L86)

音量を加える

#### Parameters

##### volume

`number`

#### Returns

[`NextMethodsAddVolume`](NextMethodsAddVolume.md)

***

### gender()

> **gender**(`gender`): [`NextMethodsGender`](NextMethodsGender.md)

Defined in: [src/type/entity/entity/IEntitySpeech.ts:79](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/entity/IEntitySpeech.ts#L79)

性別

#### Parameters

##### gender

[`Type_speech_gender`](../../../../speech/type-aliases/Type_speech_gender.md)

#### Returns

[`NextMethodsGender`](NextMethodsGender.md)

***

### locale()

> **locale**(`locale`): [`NextMethodsLocale`](NextMethodsLocale.md)

Defined in: [src/type/entity/entity/IEntitySpeech.ts:73](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/entity/IEntitySpeech.ts#L73)

ロケール(言語)

#### Parameters

##### locale

[`V_SPEECH_LOCALE`](../../../../speech/IVoice/type-aliases/V_SPEECH_LOCALE.md)

#### Returns

[`NextMethodsLocale`](NextMethodsLocale.md)

***

### pitch()

> **pitch**(`pitch`): [`NextMethodsPitch`](NextMethodsPitch.md)

Defined in: [src/type/entity/entity/IEntitySpeech.ts:83](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/entity/IEntitySpeech.ts#L83)

ピッチ

#### Parameters

##### pitch

`number`

#### Returns

[`NextMethodsPitch`](NextMethodsPitch.md)

***

### speech()

> **speech**(`words`): `Promise`\<`void`\>

Defined in: [src/type/entity/entity/IEntitySpeech.ts:94](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/entity/IEntitySpeech.ts#L94)

テキストをスピーチする

#### Parameters

##### words

`string`

#### Returns

`Promise`\<`void`\>

***

### stopAll()

> **stopAll**(): `void`

Defined in: [src/type/entity/entity/IEntitySpeech.ts:99](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/entity/IEntitySpeech.ts#L99)

すべてのスピーチを停止する

#### Returns

`void`

***

### type()

> **type**(`type`): [`NextMethodsType`](NextMethodsType.md)

Defined in: [src/type/entity/entity/IEntitySpeech.ts:75](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/entity/IEntitySpeech.ts#L75)

タイプを指定

#### Parameters

##### type

`string`

#### Returns

[`NextMethodsType`](NextMethodsType.md)

***

### typeCopyTo()

> **typeCopyTo**(`type`): [`NextMethodsCopyTo`](NextMethodsCopyTo.md)

Defined in: [src/type/entity/entity/IEntitySpeech.ts:77](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/entity/IEntitySpeech.ts#L77)

タイプをコピー

#### Parameters

##### type

`string`

#### Returns

[`NextMethodsCopyTo`](NextMethodsCopyTo.md)

***

### volume()

> **volume**(`volume`): [`NextMethodsVolume`](NextMethodsVolume.md)

Defined in: [src/type/entity/entity/IEntitySpeech.ts:81](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/entity/IEntitySpeech.ts#L81)

音量

#### Parameters

##### volume

`number`

#### Returns

[`NextMethodsVolume`](NextMethodsVolume.md)
