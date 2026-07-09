# Class: Speech

Defined in: [src/lib/speech/index.ts:18](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/index.ts#L18)

Speech.getInstance().addProperties("CAT", prop);
Speech.getInstance().use( "CAT" ).play();

## Constructors

### Constructor

> **new Speech**(): `Speech`

Defined in: [src/lib/speech/index.ts:31](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/index.ts#L31)

#### Returns

`Speech`

## Accessors

### type

#### Get Signature

> **get** **type**(): `string`

Defined in: [src/lib/speech/index.ts:129](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/index.ts#L129)

##### Returns

`string`

## Methods

### addPitch()

> **addPitch**(`pitch`): `Speech`

Defined in: [src/lib/speech/index.ts:114](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/index.ts#L114)

#### Parameters

##### pitch

`number`

#### Returns

`Speech`

***

### addProperties()

> **addProperties**(`type`, `prop`): `void`

Defined in: [src/lib/speech/index.ts:41](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/index.ts#L41)

#### Parameters

##### type

`string`

##### prop

[`T_VOICE_INFO_ELEMENT`](../../../type/speech/IVoice/type-aliases/T_VOICE_INFO_ELEMENT.md)

#### Returns

`void`

***

### addVolume()

> **addVolume**(`volume`): `Speech`

Defined in: [src/lib/speech/index.ts:102](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/index.ts#L102)

#### Parameters

##### volume

`number`

#### Returns

`Speech`

***

### getProperties()

> **getProperties**(`type`): [`T_VOICE_INFO_ELEMENT`](../../../type/speech/IVoice/type-aliases/T_VOICE_INFO_ELEMENT.md)

Defined in: [src/lib/speech/index.ts:47](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/index.ts#L47)

#### Parameters

##### type

`string`

#### Returns

[`T_VOICE_INFO_ELEMENT`](../../../type/speech/IVoice/type-aliases/T_VOICE_INFO_ELEMENT.md)

***

### locale()

> **locale**(`locale`): `Speech`

Defined in: [src/lib/speech/index.ts:60](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/index.ts#L60)

#### Parameters

##### locale

[`V_SPEECH_LOCALE`](../../../type/speech/IVoice/type-aliases/V_SPEECH_LOCALE.md)

#### Returns

`Speech`

***

### play()

> **play**(`words`): `Promise`\<`void`\>

Defined in: [src/lib/speech/index.ts:68](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/index.ts#L68)

#### Parameters

##### words

`string`

#### Returns

`Promise`\<`void`\>

***

### setGender()

> **setGender**(`gender`): `Speech`

Defined in: [src/lib/speech/index.ts:91](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/index.ts#L91)

#### Parameters

##### gender

[`Type_speech_gender`](../../../type/speech/type-aliases/Type_speech_gender.md)

#### Returns

`Speech`

***

### setPitch()

> **setPitch**(`pitch`): `Speech`

Defined in: [src/lib/speech/index.ts:108](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/index.ts#L108)

#### Parameters

##### pitch

`number`

#### Returns

`Speech`

***

### setVolume()

> **setVolume**(`volume`): `Speech`

Defined in: [src/lib/speech/index.ts:96](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/index.ts#L96)

#### Parameters

##### volume

`number`

#### Returns

`Speech`

***

### stopAll()

> **stopAll**(): `void`

Defined in: [src/lib/speech/index.ts:121](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/index.ts#L121)

#### Returns

`void`

***

### use()

> **use**(`type`): `Speech`

Defined in: [src/lib/speech/index.ts:64](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/index.ts#L64)

#### Parameters

##### type

`string`

#### Returns

`Speech`

***

### getInstance()

> `static` **getInstance**(): `Speech`

Defined in: [src/lib/speech/index.ts:20](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/index.ts#L20)

#### Returns

`Speech`
