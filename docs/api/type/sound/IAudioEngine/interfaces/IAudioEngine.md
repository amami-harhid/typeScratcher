# Interface: IAudioEngine

Defined in: [src/type/sound/IAudioEngine.ts:6](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/sound/IAudioEngine.ts#L6)

## Properties

### audioContext

> `readonly` **audioContext**: [`IAudioContext`](../../IAudioContext/interfaces/IAudioContext.md)

Defined in: [src/type/sound/IAudioEngine.ts:12](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/sound/IAudioEngine.ts#L12)

Audioコンテキスト

## Methods

### createEffectChain()

> **createEffectChain**(): [`TEffectChain`](../type-aliases/TEffectChain.md)

Defined in: [src/type/sound/IAudioEngine.ts:8](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/sound/IAudioEngine.ts#L8)

Effectチェーンを生成する

#### Returns

[`TEffectChain`](../type-aliases/TEffectChain.md)

***

### decodeSoundPlayer()

> **decodeSoundPlayer**(`sound`): `Promise`\<[`IScratchSoundPlayer`](IScratchSoundPlayer.md)\>

Defined in: [src/type/sound/IAudioEngine.ts:10](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/sound/IAudioEngine.ts#L10)

SoundPlayer をデコードする

#### Parameters

##### sound

###### data

`Uint8Array`\<`ArrayBuffer`\>

#### Returns

`Promise`\<[`IScratchSoundPlayer`](IScratchSoundPlayer.md)\>
