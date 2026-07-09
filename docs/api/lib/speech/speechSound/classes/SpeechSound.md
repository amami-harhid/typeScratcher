# Class: SpeechSound

Defined in: [src/lib/speech/speechSound.ts:13](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/speechSound.ts#L13)

Sound

## Extends

- `EventEmitter`

## Implements

- [`ISound`](../../../../type/sound/interfaces/ISound.md)

## Constructors

### Constructor

> **new SpeechSound**(`sound`): `SpeechSound`

Defined in: [src/lib/speech/speechSound.ts:21](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/speechSound.ts#L21)

#### Parameters

##### sound

`SoundArgStringObject`

#### Returns

`SpeechSound`

#### Overrides

`EventEmitter.constructor`

## Accessors

### data

#### Get Signature

> **get** **data**(): `Uint8Array`\<`ArrayBuffer`\>

Defined in: [src/lib/speech/speechSound.ts:50](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/speechSound.ts#L50)

##### Returns

`Uint8Array`\<`ArrayBuffer`\>

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [src/lib/speech/speechSound.ts:47](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/speechSound.ts#L47)

音の名前

##### Returns

`string`

音の名前

#### Implementation of

[`ISound`](../../../../type/sound/interfaces/ISound.md).[`name`](../../../../type/sound/interfaces/ISound.md#name)

***

### soundPlayer

#### Get Signature

> **get** **soundPlayer**(): [`ISoundPlayer`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md)

Defined in: [src/lib/speech/speechSound.ts:53](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/speechSound.ts#L53)

##### Returns

[`ISoundPlayer`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md)

***

### SOUND\_FORCE\_STOP

#### Get Signature

> **get** `static` **SOUND\_FORCE\_STOP**(): `string`

Defined in: [src/lib/speech/speechSound.ts:14](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/speechSound.ts#L14)

##### Returns

`string`

## Methods

### addPitch()

> **addPitch**(`soundPlayer`, `pitch`): `void`

Defined in: [src/lib/speech/speechSound.ts:107](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/speechSound.ts#L107)

#### Parameters

##### soundPlayer

[`ISoundPlayer`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md)

##### pitch

`number`

#### Returns

`void`

***

### addVolume()

> **addVolume**(`soundPlayer`, `volume`): `void`

Defined in: [src/lib/speech/speechSound.ts:91](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/speechSound.ts#L91)

#### Parameters

##### soundPlayer

[`ISoundPlayer`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md)

##### volume

`number`

#### Returns

`void`

***

### forceStop()

> **forceStop**(): `void`

Defined in: [src/lib/speech/speechSound.ts:85](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/speechSound.ts#L85)

#### Returns

`void`

***

### getPitch()

> **getPitch**(`soundPlayer`): `number`

Defined in: [src/lib/speech/speechSound.ts:103](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/speechSound.ts#L103)

#### Parameters

##### soundPlayer

[`ISoundPlayer`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md)

#### Returns

`number`

***

### getVolume()

> **getVolume**(`soundPlayer`): `number`

Defined in: [src/lib/speech/speechSound.ts:88](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/speechSound.ts#L88)

#### Parameters

##### soundPlayer

[`ISoundPlayer`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md)

#### Returns

`number`

***

### isPlaying()

> **isPlaying**(`soundPlayer`): `boolean`

Defined in: [src/lib/speech/speechSound.ts:127](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/speechSound.ts#L127)

#### Parameters

##### soundPlayer

[`ISoundPlayer`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md)

#### Returns

`boolean`

***

### makeSoundPlayer()

> **makeSoundPlayer**(): `Promise`\<[`ISoundPlayer`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md)\>

Defined in: [src/lib/speech/speechSound.ts:35](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/speechSound.ts#L35)

SoundPlayerを生成して EntitySoundインスタンスへ格納する

#### Returns

`Promise`\<[`ISoundPlayer`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md)\>

***

### play()

> **play**(`soundPlayer`): `void`

Defined in: [src/lib/speech/speechSound.ts:57](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/speechSound.ts#L57)

#### Parameters

##### soundPlayer

[`ISoundPlayer`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md)

#### Returns

`void`

***

### playUntilDone()

> **playUntilDone**(`soundPlayer`): `Promise`\<`void`\>

Defined in: [src/lib/speech/speechSound.ts:60](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/speechSound.ts#L60)

#### Parameters

##### soundPlayer

[`ISoundPlayer`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md)

#### Returns

`Promise`\<`void`\>

***

### setPitch()

> **setPitch**(`soundPlayer`, `pitch`): `void`

Defined in: [src/lib/speech/speechSound.ts:118](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/speechSound.ts#L118)

#### Parameters

##### soundPlayer

[`ISoundPlayer`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md)

##### pitch

`number`

#### Returns

`void`

***

### setVolume()

> **setVolume**(`soundPlayer`, `volume`): `void`

Defined in: [src/lib/speech/speechSound.ts:100](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/speechSound.ts#L100)

100 がデフォルト

#### Parameters

##### soundPlayer

[`ISoundPlayer`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md)

##### volume

`number`

#### Returns

`void`

***

### stop()

> **stop**(`soundPlayer`): `void`

Defined in: [src/lib/speech/speechSound.ts:79](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/speechSound.ts#L79)

#### Parameters

##### soundPlayer

[`ISoundPlayer`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md)

#### Returns

`void`

***

### stopImmediately()

> **stopImmediately**(`soundPlayer`): `void`

Defined in: [src/lib/speech/speechSound.ts:82](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/speech/speechSound.ts#L82)

#### Parameters

##### soundPlayer

[`ISoundPlayer`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md)

#### Returns

`void`
