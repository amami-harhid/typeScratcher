# Class: EntitySpeech

Defined in: [src/lib/entity/entity/entitySpeech.ts:12](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entitySpeech.ts#L12)

スピーチ機能
サウンド機能と異なり、ボリューム値変更、ピッチ変更は、次の再生から有効になる

## Implements

- [`IEntitySpeech`](../../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md)

## Constructors

### Constructor

> **new EntitySpeech**(`entity`): `EntitySpeech`

Defined in: [src/lib/entity/entity/entitySpeech.ts:16](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entitySpeech.ts#L16)

#### Parameters

##### entity

[`IEntity`](../../../../../type/entity/entity/interfaces/IEntity.md)

#### Returns

`EntitySpeech`

## Methods

### addCache()

> **addCache**(`path`, `soundPlayer`): `void`

Defined in: [src/lib/entity/entity/entitySpeech.ts:154](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entitySpeech.ts#L154)

#### Parameters

##### path

`string`

##### soundPlayer

[`SoundPlayer`](../../../../sounds/soundPlayer/classes/SoundPlayer.md)

#### Returns

`void`

***

### addPitch()

> **addPitch**(`pitch`): [`IEntitySpeech`](../../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md)

Defined in: [src/lib/entity/entity/entitySpeech.ts:57](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entitySpeech.ts#L57)

ピッチを加える

#### Parameters

##### pitch

`number`

#### Returns

[`IEntitySpeech`](../../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md)

#### Implementation of

[`IEntitySpeech`](../../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md).[`addPitch`](../../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md#addpitch)

***

### addVolume()

> **addVolume**(`volume`): [`IEntitySpeech`](../../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md)

Defined in: [src/lib/entity/entity/entitySpeech.ts:61](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entitySpeech.ts#L61)

音量を加える

#### Parameters

##### volume

`number`

#### Returns

[`IEntitySpeech`](../../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md)

#### Implementation of

[`IEntitySpeech`](../../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md).[`addVolume`](../../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md#addvolume)

***

### gender()

> **gender**(`gender`): [`NextMethodsGender`](../../../../../type/entity/entity/IEntitySpeech/interfaces/NextMethodsGender.md)

Defined in: [src/lib/entity/entity/entitySpeech.ts:90](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entitySpeech.ts#L90)

性別

#### Parameters

##### gender

[`Type_speech_gender`](../../../../../type/speech/type-aliases/Type_speech_gender.md)

#### Returns

[`NextMethodsGender`](../../../../../type/entity/entity/IEntitySpeech/interfaces/NextMethodsGender.md)

#### Implementation of

[`IEntitySpeech`](../../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md).[`gender`](../../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md#gender)

***

### getCache()

> **getCache**(`path`): [`SoundPlayer`](../../../../sounds/soundPlayer/classes/SoundPlayer.md) \| `undefined`

Defined in: [src/lib/entity/entity/entitySpeech.ts:159](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entitySpeech.ts#L159)

#### Parameters

##### path

`string`

#### Returns

[`SoundPlayer`](../../../../sounds/soundPlayer/classes/SoundPlayer.md) \| `undefined`

***

### locale()

> **locale**(`locale`): [`NextMethodsLocale`](../../../../../type/entity/entity/IEntitySpeech/interfaces/NextMethodsLocale.md)

Defined in: [src/lib/entity/entity/entitySpeech.ts:21](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entitySpeech.ts#L21)

ロケール(言語)

#### Parameters

##### locale

[`V_SPEECH_LOCALE`](../../../../../type/speech/IVoice/type-aliases/V_SPEECH_LOCALE.md)

#### Returns

[`NextMethodsLocale`](../../../../../type/entity/entity/IEntitySpeech/interfaces/NextMethodsLocale.md)

#### Implementation of

[`IEntitySpeech`](../../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md).[`locale`](../../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md#locale)

***

### pitch()

> **pitch**(`pitch`): [`NextMethodsPitch`](../../../../../type/entity/entity/IEntitySpeech/interfaces/NextMethodsPitch.md)

Defined in: [src/lib/entity/entity/entitySpeech.ts:113](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entitySpeech.ts#L113)

ピッチ

#### Parameters

##### pitch

`number`

#### Returns

[`NextMethodsPitch`](../../../../../type/entity/entity/IEntitySpeech/interfaces/NextMethodsPitch.md)

#### Implementation of

[`IEntitySpeech`](../../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md).[`pitch`](../../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md#pitch)

***

### speech()

> **speech**(`words`): `Promise`\<`void`\>

Defined in: [src/lib/entity/entity/entitySpeech.ts:150](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entitySpeech.ts#L150)

テキストをスピーチする

#### Parameters

##### words

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IEntitySpeech`](../../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md).[`speech`](../../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md#speech)

***

### stopAll()

> **stopAll**(): `void`

Defined in: [src/lib/entity/entity/entitySpeech.ts:164](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entitySpeech.ts#L164)

すべてのスピーチを停止する

#### Returns

`void`

#### Implementation of

[`IEntitySpeech`](../../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md).[`stopAll`](../../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md#stopall)

***

### type()

> **type**(`type`): [`NextMethodsType`](../../../../../type/entity/entity/IEntitySpeech/interfaces/NextMethodsType.md)

Defined in: [src/lib/entity/entity/entitySpeech.ts:33](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entitySpeech.ts#L33)

タイプを指定

#### Parameters

##### type

`string`

#### Returns

[`NextMethodsType`](../../../../../type/entity/entity/IEntitySpeech/interfaces/NextMethodsType.md)

#### Implementation of

[`IEntitySpeech`](../../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md).[`type`](../../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md#type)

***

### typeCopyTo()

> **typeCopyTo**(`type`): [`NextMethodsCopyTo`](../../../../../type/entity/entity/IEntitySpeech/interfaces/NextMethodsCopyTo.md)

Defined in: [src/lib/entity/entity/entitySpeech.ts:65](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entitySpeech.ts#L65)

タイプをコピー

#### Parameters

##### type

`string`

#### Returns

[`NextMethodsCopyTo`](../../../../../type/entity/entity/IEntitySpeech/interfaces/NextMethodsCopyTo.md)

#### Implementation of

[`IEntitySpeech`](../../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md).[`typeCopyTo`](../../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md#typecopyto)

***

### volume()

> **volume**(`volume`): [`NextMethodsVolume`](../../../../../type/entity/entity/IEntitySpeech/interfaces/NextMethodsVolume.md)

Defined in: [src/lib/entity/entity/entitySpeech.ts:131](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entitySpeech.ts#L131)

音量

#### Parameters

##### volume

`number`

#### Returns

[`NextMethodsVolume`](../../../../../type/entity/entity/IEntitySpeech/interfaces/NextMethodsVolume.md)

#### Implementation of

[`IEntitySpeech`](../../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md).[`volume`](../../../../../type/entity/entity/IEntitySpeech/interfaces/IEntitySpeech.md#volume)
