# Interface: IScratchSoundPlayer

Defined in: [src/type/sound/IAudioEngine.ts:14](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/sound/IAudioEngine.ts#L14)

## Extends

- `EventEmitter`

## Properties

### isPlaying

> **isPlaying**: `boolean`

Defined in: [src/type/sound/IAudioEngine.ts:18](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/sound/IAudioEngine.ts#L18)

***

### name

> **name**: `string`

Defined in: [src/type/sound/IAudioEngine.ts:15](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/sound/IAudioEngine.ts#L15)

## Methods

### connect()

> **connect**(`effect`): `void`

Defined in: [src/type/sound/IAudioEngine.ts:16](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/sound/IAudioEngine.ts#L16)

#### Parameters

##### effect

[`TEffectChain`](../type-aliases/TEffectChain.md)

#### Returns

`void`

***

### finished()

> **finished**(): `Promise`\<`void`\>

Defined in: [src/type/sound/IAudioEngine.ts:17](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/sound/IAudioEngine.ts#L17)

#### Returns

`Promise`\<`void`\>

***

### play()

> **play**(): `void`

Defined in: [src/type/sound/IAudioEngine.ts:19](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/sound/IAudioEngine.ts#L19)

#### Returns

`void`

***

### setPlaybackRate()

> **setPlaybackRate**(`pitch`): `void`

Defined in: [src/type/sound/IAudioEngine.ts:20](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/sound/IAudioEngine.ts#L20)

#### Parameters

##### pitch

`number`

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [src/type/sound/IAudioEngine.ts:21](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/sound/IAudioEngine.ts#L21)

#### Returns

`void`

***

### stopImmediately()

> **stopImmediately**(): `void`

Defined in: [src/type/sound/IAudioEngine.ts:22](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/sound/IAudioEngine.ts#L22)

#### Returns

`void`

***

### update()

> **update**(): `void`

Defined in: [src/type/sound/IAudioEngine.ts:23](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/sound/IAudioEngine.ts#L23)

#### Returns

`void`
