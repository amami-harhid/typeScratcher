# Interface: IEntitySound

Defined in: [src/type/entity/entity/IEntitySound.ts:3](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntitySound.ts#L3)

イベント

## Methods

### add()

> **add**(`sounds`): `void`

Defined in: [src/type/entity/entity/IEntitySound.ts:8](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntitySound.ts#L8)

音を追加する

#### Parameters

##### sounds

[`ISound`](../../../../sound/interfaces/ISound.md)[]

#### Returns

`void`

***

### addPitch()

> **addPitch**(`sound`, `pitch`): `void`

Defined in: [src/type/entity/entity/IEntitySound.ts:41](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntitySound.ts#L41)

ピッチを変える

#### Parameters

##### sound

[`ISound`](../../../../sound/interfaces/ISound.md)

##### pitch

`number`

#### Returns

`void`

***

### addVolume()

> **addVolume**(`sound`, `volume`): `void`

Defined in: [src/type/entity/entity/IEntitySound.ts:35](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntitySound.ts#L35)

音量を変える

#### Parameters

##### sound

[`ISound`](../../../../sound/interfaces/ISound.md)

##### volume

`number`

#### Returns

`void`

***

### clearEffects()

> **clearEffects**(): `Promise`\<`void`\>

Defined in: [src/type/entity/entity/IEntitySound.ts:23](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntitySound.ts#L23)

サウンドオプションをクリアする

#### Returns

`Promise`\<`void`\>

***

### getPitch()

> **getPitch**(`sound`): `number`

Defined in: [src/type/entity/entity/IEntitySound.ts:39](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntitySound.ts#L39)

ピッチを取得する

#### Parameters

##### sound

[`ISound`](../../../../sound/interfaces/ISound.md)

#### Returns

`number`

***

### getVolume()

> **getVolume**(`sound`): `number`

Defined in: [src/type/entity/entity/IEntitySound.ts:33](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntitySound.ts#L33)

音量を取得する

#### Parameters

##### sound

[`ISound`](../../../../sound/interfaces/ISound.md)

#### Returns

`number`

***

### play()

> **play**(`sound`): `void`

Defined in: [src/type/entity/entity/IEntitySound.ts:14](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntitySound.ts#L14)

音を鳴らす

#### Parameters

##### sound

[`ISound`](../../../../sound/interfaces/ISound.md)

#### Returns

`void`

***

### playUntilDone()

> **playUntilDone**(`sound`): `Promise`\<`void`\>

Defined in: [src/type/entity/entity/IEntitySound.ts:19](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntitySound.ts#L19)

終わるまで音を鳴らす

#### Parameters

##### sound

[`ISound`](../../../../sound/interfaces/ISound.md)

#### Returns

`Promise`\<`void`\>

***

### setPitch()

> **setPitch**(`sound`, `pitch`): `void`

Defined in: [src/type/entity/entity/IEntitySound.ts:43](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntitySound.ts#L43)

ピッチを設定する

#### Parameters

##### sound

[`ISound`](../../../../sound/interfaces/ISound.md)

##### pitch

`number`

#### Returns

`void`

***

### setVolume()

> **setVolume**(`sound`, `volume`): `void`

Defined in: [src/type/entity/entity/IEntitySound.ts:37](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntitySound.ts#L37)

音量を設定する

#### Parameters

##### sound

[`ISound`](../../../../sound/interfaces/ISound.md)

##### volume

`number`

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [src/type/entity/entity/IEntitySound.ts:27](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntitySound.ts#L27)

鳴っている音を止める

#### Returns

`void`

***

### stopImmediately()

> **stopImmediately**(): `void`

Defined in: [src/type/entity/entity/IEntitySound.ts:31](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntitySound.ts#L31)

鳴っている音を「すぐに」止める

#### Returns

`void`
