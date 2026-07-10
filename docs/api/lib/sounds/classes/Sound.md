# Class: Sound

Defined in: [src/lib/sounds/index.ts:18](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/sounds/index.ts#L18)

Sound

## Extends

- `EventEmitter`

## Implements

- [`ISound`](../../../type/sound/interfaces/ISound.md)

## Constructors

### Constructor

> **new Sound**(`sound`, `reuse?`): `Sound`

Defined in: [src/lib/sounds/index.ts:30](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/sounds/index.ts#L30)

#### Parameters

##### sound

`SoundArgStringObject`

##### reuse?

`boolean` = `false`

#### Returns

`Sound`

#### Overrides

`EventEmitter.constructor`

## Accessors

### data

#### Get Signature

> **get** **data**(): `Uint8Array`\<`ArrayBuffer`\>

Defined in: [src/lib/sounds/index.ts:98](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/sounds/index.ts#L98)

##### Returns

`Uint8Array`\<`ArrayBuffer`\>

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [src/lib/sounds/index.ts:95](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/sounds/index.ts#L95)

音の名前

##### Returns

`string`

音の名前

#### Implementation of

[`ISound`](../../../type/sound/interfaces/ISound.md).[`name`](../../../type/sound/interfaces/ISound.md#name)

***

### SOUND\_FORCE\_STOP

#### Get Signature

> **get** `static` **SOUND\_FORCE\_STOP**(): `string`

Defined in: [src/lib/sounds/index.ts:19](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/sounds/index.ts#L19)

##### Returns

`string`

## Methods

### deepCopy()

> **deepCopy**(): [`ISound`](../../../type/sound/interfaces/ISound.md)

Defined in: [src/lib/sounds/index.ts:178](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/sounds/index.ts#L178)

#### Returns

[`ISound`](../../../type/sound/interfaces/ISound.md)

***

### forceStop()

> **forceStop**(): `void`

Defined in: [src/lib/sounds/index.ts:134](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/sounds/index.ts#L134)

#### Returns

`void`

***

### getPitch()

> **getPitch**(`soundPlayer`): `number`

Defined in: [src/lib/sounds/index.ts:152](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/sounds/index.ts#L152)

#### Parameters

##### soundPlayer

[`ISoundPlayer`](../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md)

#### Returns

`number`

***

### getVolume()

> **getVolume**(`soundPlayer`): `number`

Defined in: [src/lib/sounds/index.ts:138](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/sounds/index.ts#L138)

#### Parameters

##### soundPlayer

[`ISoundPlayer`](../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md)

#### Returns

`number`

***

### isPlaying()

> **isPlaying**(`soundPlayer`): `boolean`

Defined in: [src/lib/sounds/index.ts:174](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/sounds/index.ts#L174)

#### Parameters

##### soundPlayer

[`ISoundPlayer`](../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md)

#### Returns

`boolean`

***

### load()

> **load**(`entity`): `Promise`\<`void`\>

Defined in: [src/lib/sounds/index.ts:50](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/sounds/index.ts#L50)

ロード処理が実行される都度、soundPlayerを生成する
同じSoundインスタンスを複数のスプライトで共有することを考慮し
データロード完了している場合にはデータロードを抑止する。

#### Parameters

##### entity

[`IEntity`](../../../type/entity/entity/interfaces/IEntity.md)

#### Returns

`Promise`\<`void`\>

***

### makeSoundPlayer()

> **makeSoundPlayer**(`entity`): `Promise`\<[`ISoundPlayer`](../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md)\>

Defined in: [src/lib/sounds/index.ts:84](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/sounds/index.ts#L84)

SoundPlayerを生成して EntitySoundインスタンスへ格納する

#### Parameters

##### entity

[`IEntity`](../../../type/entity/entity/interfaces/IEntity.md)

#### Returns

`Promise`\<[`ISoundPlayer`](../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md)\>

***

### play()

> **play**(`soundPlayer`): `void`

Defined in: [src/lib/sounds/index.ts:106](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/sounds/index.ts#L106)

#### Parameters

##### soundPlayer

[`ISoundPlayer`](../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md)

#### Returns

`void`

***

### playUntilDone()

> **playUntilDone**(`soundPlayer`): `Promise`\<`void`\>

Defined in: [src/lib/sounds/index.ts:109](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/sounds/index.ts#L109)

#### Parameters

##### soundPlayer

[`ISoundPlayer`](../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md)

#### Returns

`Promise`\<`void`\>

***

### setPitch()

> **setPitch**(`soundPlayer`, `pitch`): `void`

Defined in: [src/lib/sounds/index.ts:160](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/sounds/index.ts#L160)

#### Parameters

##### soundPlayer

[`ISoundPlayer`](../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md)

##### pitch

`number`

#### Returns

`void`

***

### setVolume()

> **setVolume**(`soundPlayer`, `volume`): `void`

Defined in: [src/lib/sounds/index.ts:147](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/sounds/index.ts#L147)

100 がデフォルト

#### Parameters

##### soundPlayer

[`ISoundPlayer`](../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md)

##### volume

`number`

#### Returns

`void`

***

### stop()

> **stop**(`soundPlayer`): `void`

Defined in: [src/lib/sounds/index.ts:128](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/sounds/index.ts#L128)

#### Parameters

##### soundPlayer

[`ISoundPlayer`](../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md)

#### Returns

`void`

***

### stopImmediately()

> **stopImmediately**(`soundPlayer`): `void`

Defined in: [src/lib/sounds/index.ts:131](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/sounds/index.ts#L131)

#### Parameters

##### soundPlayer

[`ISoundPlayer`](../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md)

#### Returns

`void`

***

### pitchAudioToScratch()

> `static` **pitchAudioToScratch**(`pitch`): `number`

Defined in: [src/lib/sounds/index.ts:210](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/sounds/index.ts#L210)

#### Parameters

##### pitch

`number`

#### Returns

`number`

***

### pitchScratchToAudio()

> `static` **pitchScratchToAudio**(`pitch`): `number`

Defined in: [src/lib/sounds/index.ts:203](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/sounds/index.ts#L203)

#### Parameters

##### pitch

`number`

#### Returns

`number`

***

### toScratchPitchLimit()

> `static` **toScratchPitchLimit**(`pitch`): `number`

Defined in: [src/lib/sounds/index.ts:193](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/sounds/index.ts#L193)

#### Parameters

##### pitch

`number`

#### Returns

`number`

***

### toScratchVolumeLimit()

> `static` **toScratchVolumeLimit**(`volume`): `number`

Defined in: [src/lib/sounds/index.ts:183](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/sounds/index.ts#L183)

#### Parameters

##### volume

`number`

#### Returns

`number`
