# Class: EntitySound

Defined in: [src/lib/entity/entity/entitySound.ts:10](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entitySound.ts#L10)

サウンド

## Constructors

### Constructor

> **new EntitySound**(`entity`): `EntitySound`

Defined in: [src/lib/entity/entity/entitySound.ts:23](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entitySound.ts#L23)

**`Internal`**

#### Parameters

##### entity

[`IEntity`](../../../../../type/entity/entity/interfaces/IEntity.md)

{Entity}

#### Returns

`EntitySound`

## Properties

### effectMap

> **effectMap**: `Map`\<`string`, \{ `pitch`: `number`; `volume`: `number`; \}\>

Defined in: [src/lib/entity/entity/entitySound.ts:15](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entitySound.ts#L15)

***

### soundKeys

> **soundKeys**: `string`[] = `[]`

Defined in: [src/lib/entity/entity/entitySound.ts:14](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entitySound.ts#L14)

***

### soundMap

> **soundMap**: `Map`\<`string`, [`ISound`](../../../../../type/sound/interfaces/ISound.md)\>

Defined in: [src/lib/entity/entity/entitySound.ts:13](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entitySound.ts#L13)

## Methods

### add()

> **add**(`sounds`): `void`

Defined in: [src/lib/entity/entity/entitySound.ts:34](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entitySound.ts#L34)

音を追加する

#### Parameters

##### sounds

[`ISound`](../../../../../type/sound/interfaces/ISound.md)[]

#### Returns

`void`

***

### addPitch()

> **addPitch**(`sound`, `pitch`): `void`

Defined in: [src/lib/entity/entity/entitySound.ts:217](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entitySound.ts#L217)

#### Parameters

##### sound

[`Sound`](../../../../sounds/classes/Sound.md)

##### pitch

`number`

#### Returns

`void`

***

### addPlayer()

> **addPlayer**(`name`, `player`): `void`

Defined in: [src/lib/entity/entity/entitySound.ts:47](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entitySound.ts#L47)

#### Parameters

##### name

`string`

##### player

[`ISoundPlayer`](../../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md)

#### Returns

`void`

***

### addVolume()

> **addVolume**(`sound`, `volume`): `void`

Defined in: [src/lib/entity/entity/entitySound.ts:178](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entitySound.ts#L178)

#### Parameters

##### sound

[`ISound`](../../../../../type/sound/interfaces/ISound.md)

##### volume

`number`

#### Returns

`void`

***

### clearEffects()

> **clearEffects**(): `Promise`\<`void`\>

Defined in: [src/lib/entity/entity/entitySound.ts:104](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entitySound.ts#L104)

サウンドオプションをクリアする

#### Returns

`Promise`\<`void`\>

***

### getPitch()

> **getPitch**(`sound`): `number`

Defined in: [src/lib/entity/entity/entitySound.ts:209](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entitySound.ts#L209)

ピッチ

#### Parameters

##### sound

[`Sound`](../../../../sounds/classes/Sound.md)

#### Returns

`number`

***

### getSoundPlayer()

> **getSoundPlayer**(`name`): [`ISoundPlayer`](../../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md) \| `undefined`

Defined in: [src/lib/entity/entity/entitySound.ts:55](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entitySound.ts#L55)

#### Parameters

##### name

`string`

#### Returns

[`ISoundPlayer`](../../../../../type/sound/ISoundPlayer/interfaces/ISoundPlayer.md) \| `undefined`

***

### getVolume()

> **getVolume**(`sound`): `number`

Defined in: [src/lib/entity/entity/entitySound.ts:169](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entitySound.ts#L169)

音量

#### Parameters

##### sound

[`ISound`](../../../../../type/sound/interfaces/ISound.md)

#### Returns

`number`

***

### play()

> **play**(`sound`): `void`

Defined in: [src/lib/entity/entity/entitySound.ts:66](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entitySound.ts#L66)

音を鳴らす

#### Parameters

##### sound

[`ISound`](../../../../../type/sound/interfaces/ISound.md)

{Sound} - 音

#### Returns

`void`

***

### playUntilDone()

> **playUntilDone**(`sound`): `Promise`\<`void`\>

Defined in: [src/lib/entity/entity/entitySound.ts:83](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entitySound.ts#L83)

終わるまで音を鳴らす

#### Parameters

##### sound

[`Sound`](../../../../sounds/classes/Sound.md)

{Sound} - 音

#### Returns

`Promise`\<`void`\>

***

### setPitch()

> **setPitch**(`sound`, `pitch`): `void`

Defined in: [src/lib/entity/entity/entitySound.ts:231](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entitySound.ts#L231)

#### Parameters

##### sound

[`Sound`](../../../../sounds/classes/Sound.md)

##### pitch

`number`

#### Returns

`void`

***

### setVolume()

> **setVolume**(`sound`, `volume`): `void`

Defined in: [src/lib/entity/entity/entitySound.ts:194](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entitySound.ts#L194)

#### Parameters

##### sound

[`Sound`](../../../../sounds/classes/Sound.md)

##### volume

`number`

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [src/lib/entity/entity/entitySound.ts:127](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entitySound.ts#L127)

鳴っている音を止める

#### Returns

`void`

***

### stopImmediately()

> **stopImmediately**(): `void`

Defined in: [src/lib/entity/entity/entitySound.ts:149](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entitySound.ts#L149)

鳴っている音を「すぐに」止める

#### Returns

`void`
