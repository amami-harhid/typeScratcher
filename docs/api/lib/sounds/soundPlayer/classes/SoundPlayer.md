# Class: SoundPlayer

Defined in: [src/lib/sounds/soundPlayer.ts:10](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/sounds/soundPlayer.ts#L10)

SoundPlayer

## Implements

- [`ISoundPlayer`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md)

## Constructors

### Constructor

> **new SoundPlayer**(`name`, `_soundPlayer`, `options?`): `SoundPlayer`

Defined in: [src/lib/sounds/soundPlayer.ts:19](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/sounds/soundPlayer.ts#L19)

#### Parameters

##### name

`string`

##### \_soundPlayer

[`IScratchSoundPlayer`](../../../../type/sound/IAudioEngine/interfaces/IScratchSoundPlayer.md)

##### options?

[`TSoundPlayerOption`](../../../../type/sound/IAudioEngine/type-aliases/TSoundPlayerOption.md) = `{}`

#### Returns

`SoundPlayer`

## Accessors

### effects

#### Get Signature

> **get** **effects**(): [`TEffectChain`](../../../../type/sound/IAudioEngine/type-aliases/TEffectChain.md)

Defined in: [src/lib/sounds/soundPlayer.ts:69](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/sounds/soundPlayer.ts#L69)

エフェクトチェイン

##### Returns

[`TEffectChain`](../../../../type/sound/IAudioEngine/type-aliases/TEffectChain.md)

#### Set Signature

> **set** **effects**(`effects`): `void`

Defined in: [src/lib/sounds/soundPlayer.ts:66](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/sounds/soundPlayer.ts#L66)

エフェクトチェイン

##### Parameters

###### effects

[`TEffectChain`](../../../../type/sound/IAudioEngine/type-aliases/TEffectChain.md)

##### Returns

`void`

エフェクトチェイン

#### Implementation of

[`ISoundPlayer`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md).[`effects`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md#effects)

***

### isPlaying

#### Get Signature

> **get** **isPlaying**(): `boolean`

Defined in: [src/lib/sounds/soundPlayer.ts:83](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/sounds/soundPlayer.ts#L83)

再生状態

##### Returns

`boolean`

再生状態

#### Implementation of

[`ISoundPlayer`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md).[`isPlaying`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md#isplaying)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [src/lib/sounds/soundPlayer.ts:63](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/sounds/soundPlayer.ts#L63)

名称

##### Returns

`string`

名称

#### Implementation of

[`ISoundPlayer`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md).[`name`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md#name)

***

### pitch

#### Get Signature

> **get** **pitch**(): `number`

Defined in: [src/lib/sounds/soundPlayer.ts:45](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/sounds/soundPlayer.ts#L45)

ピッチ

##### Returns

`number`

#### Set Signature

> **set** **pitch**(`pitch`): `void`

Defined in: [src/lib/sounds/soundPlayer.ts:41](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/sounds/soundPlayer.ts#L41)

--> 0.5
0 --> 1.0
50 --> 1.5

##### Parameters

###### pitch

`number`

##### Returns

`void`

ピッチ

#### Implementation of

[`ISoundPlayer`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md).[`pitch`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md#pitch)

***

### soundPlayer

#### Get Signature

> **get** **soundPlayer**(): [`IScratchSoundPlayer`](../../../../type/sound/IAudioEngine/interfaces/IScratchSoundPlayer.md)

Defined in: [src/lib/sounds/soundPlayer.ts:59](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/sounds/soundPlayer.ts#L59)

Scratch SoundPlayer

##### Returns

[`IScratchSoundPlayer`](../../../../type/sound/IAudioEngine/interfaces/IScratchSoundPlayer.md)

Scratch SoundPlayer

#### Implementation of

[`ISoundPlayer`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md).[`soundPlayer`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md#soundplayer)

***

### volume

#### Get Signature

> **get** **volume**(): `number`

Defined in: [src/lib/sounds/soundPlayer.ts:55](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/sounds/soundPlayer.ts#L55)

ボリューム

##### Returns

`number`

#### Set Signature

> **set** **volume**(`volume`): `void`

Defined in: [src/lib/sounds/soundPlayer.ts:48](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/sounds/soundPlayer.ts#L48)

ボリューム

##### Parameters

###### volume

`number`

##### Returns

`void`

ボリューム

#### Implementation of

[`ISoundPlayer`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md).[`volume`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md#volume)

## Methods

### connect()

> **connect**(): `void`

Defined in: [src/lib/sounds/soundPlayer.ts:72](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/sounds/soundPlayer.ts#L72)

接続

#### Returns

`void`

#### Implementation of

[`ISoundPlayer`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md).[`connect`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md#connect)

***

### play()

> **play**(): `void`

Defined in: [src/lib/sounds/soundPlayer.ts:80](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/sounds/soundPlayer.ts#L80)

再生

#### Returns

`void`

#### Implementation of

[`ISoundPlayer`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md).[`play`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md#play)

***

### startSoundUntilDone()

> **startSoundUntilDone**(): `Promise`\<`void`\>

Defined in: [src/lib/sounds/soundPlayer.ts:86](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/sounds/soundPlayer.ts#L86)

再生して終わるまで待つ

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISoundPlayer`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md).[`startSoundUntilDone`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md#startsounduntildone)

***

### stop()

> **stop**(): `void`

Defined in: [src/lib/sounds/soundPlayer.ts:104](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/sounds/soundPlayer.ts#L104)

停止する

#### Returns

`void`

#### Implementation of

[`ISoundPlayer`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md).[`stop`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md#stop)

***

### stopImmediately()

> **stopImmediately**(): `void`

Defined in: [src/lib/sounds/soundPlayer.ts:107](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/sounds/soundPlayer.ts#L107)

即時に停止する

#### Returns

`void`

#### Implementation of

[`ISoundPlayer`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md).[`stopImmediately`](../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md#stopimmediately)
