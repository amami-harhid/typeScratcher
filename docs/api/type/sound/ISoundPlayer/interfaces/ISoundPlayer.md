# Interface: ISoundPlayer

Defined in: [src/type/sound/ISoundPlayer.ts:6](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/sound/ISoundPlayer.ts#L6)

SoundPlayer

## Properties

### effects

> **effects**: [`TEffectChain`](../../IAudioEngine/type-aliases/TEffectChain.md)

Defined in: [src/type/sound/ISoundPlayer.ts:18](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/sound/ISoundPlayer.ts#L18)

エフェクトチェイン

***

### isPlaying

> `readonly` **isPlaying**: `boolean`

Defined in: [src/type/sound/ISoundPlayer.ts:8](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/sound/ISoundPlayer.ts#L8)

再生状態

***

### name

> `readonly` **name**: `string`

Defined in: [src/type/sound/ISoundPlayer.ts:16](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/sound/ISoundPlayer.ts#L16)

名称

***

### pitch

> **pitch**: `number`

Defined in: [src/type/sound/ISoundPlayer.ts:10](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/sound/ISoundPlayer.ts#L10)

ピッチ

***

### soundPlayer

> `readonly` **soundPlayer**: [`IScratchSoundPlayer`](../../IAudioEngine/interfaces/IScratchSoundPlayer.md)

Defined in: [src/type/sound/ISoundPlayer.ts:14](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/sound/ISoundPlayer.ts#L14)

Scratch SoundPlayer

***

### volume

> **volume**: `number`

Defined in: [src/type/sound/ISoundPlayer.ts:12](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/sound/ISoundPlayer.ts#L12)

ボリューム

## Methods

### connect()

> **connect**(): `void`

Defined in: [src/type/sound/ISoundPlayer.ts:20](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/sound/ISoundPlayer.ts#L20)

接続

#### Returns

`void`

***

### play()

> **play**(): `void`

Defined in: [src/type/sound/ISoundPlayer.ts:22](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/sound/ISoundPlayer.ts#L22)

再生

#### Returns

`void`

***

### startSoundUntilDone()

> **startSoundUntilDone**(): `Promise`\<`void`\>

Defined in: [src/type/sound/ISoundPlayer.ts:24](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/sound/ISoundPlayer.ts#L24)

再生して終わるまで待つ

#### Returns

`Promise`\<`void`\>

***

### stop()

> **stop**(): `void`

Defined in: [src/type/sound/ISoundPlayer.ts:26](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/sound/ISoundPlayer.ts#L26)

停止する

#### Returns

`void`

***

### stopImmediately()

> **stopImmediately**(): `void`

Defined in: [src/type/sound/ISoundPlayer.ts:28](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/sound/ISoundPlayer.ts#L28)

即時に停止する

#### Returns

`void`
