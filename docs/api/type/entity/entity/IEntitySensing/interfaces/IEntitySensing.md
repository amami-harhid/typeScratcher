# Interface: IEntitySensing

Defined in: [src/type/entity/entity/IEntitySensing.ts:7](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/entity/IEntitySensing.ts#L7)

Entity Sensing(調べる)

## Extended by

- [`ISpriteSensing`](../../../sprite/ISpriteSensing/interfaces/ISpriteSensing.md)

## Properties

### keyboard

> `readonly` **keyboard**: [`IEntitySensingKey`](../../IEntitySensingKey/interfaces/IEntitySensingKey.md)

Defined in: [src/type/entity/entity/IEntitySensing.ts:23](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/entity/IEntitySensing.ts#L23)

キーボード関連

***

### mouse

> `readonly` **mouse**: [`IEntitySensingMouse`](../../IEntitySensingMouse/interfaces/IEntitySensingMouse.md)

Defined in: [src/type/entity/entity/IEntitySensing.ts:18](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/entity/IEntitySensing.ts#L18)

マウス関連

***

### timer

> `readonly` **timer**: [`IEntitySensingTimer`](../../IEntitySensingTimer/interfaces/IEntitySensingTimer.md)

Defined in: [src/type/entity/entity/IEntitySensing.ts:27](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/entity/IEntitySensing.ts#L27)

タイマー関連

## Methods

### askAndWait()

> **askAndWait**(`question`): `Promise`\<`string`\>

Defined in: [src/type/entity/entity/IEntitySensing.ts:13](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/entity/IEntitySensing.ts#L13)

質問をして答えを待つ

#### Parameters

##### question

`string`

{string} - 質問テキスト

#### Returns

`Promise`\<`string`\>

- answer
