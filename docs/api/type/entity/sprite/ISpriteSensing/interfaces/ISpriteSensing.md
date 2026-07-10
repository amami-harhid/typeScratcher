# Interface: ISpriteSensing

Defined in: [src/type/entity/sprite/ISpriteSensing.ts:10](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/sprite/ISpriteSensing.ts#L10)

Sprite Sensing(調べる)

## Extends

- [`IEntitySensing`](../../../entity/IEntitySensing/interfaces/IEntitySensing.md)

## Properties

### color

> `readonly` **color**: [`ISpriteSensingColor`](../../ISpriteSensingColor/interfaces/ISpriteSensingColor.md)

Defined in: [src/type/entity/sprite/ISpriteSensing.ts:23](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/sprite/ISpriteSensing.ts#L23)

色関連

***

### dragMode

> `readonly` **dragMode**: [`ISpriteDragMode`](../../ISpriteDragMode/interfaces/ISpriteDragMode.md)

Defined in: [src/type/entity/sprite/ISpriteSensing.ts:33](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/sprite/ISpriteSensing.ts#L33)

Drag Mode

***

### edge

> `readonly` **edge**: [`ISpriteSensingEdge`](../../ISpriteSensingEdge/interfaces/ISpriteSensingEdge.md)

Defined in: [src/type/entity/sprite/ISpriteSensing.ts:15](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/sprite/ISpriteSensing.ts#L15)

端関連

***

### keyboard

> `readonly` **keyboard**: [`IEntitySensingKey`](../../../entity/IEntitySensingKey/interfaces/IEntitySensingKey.md)

Defined in: [src/type/entity/entity/IEntitySensing.ts:23](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntitySensing.ts#L23)

キーボード関連

#### Inherited from

[`IEntitySensing`](../../../entity/IEntitySensing/interfaces/IEntitySensing.md).[`keyboard`](../../../entity/IEntitySensing/interfaces/IEntitySensing.md#keyboard)

***

### mouse

> `readonly` **mouse**: [`ISpriteSensingMouse`](../../ISpriteSensingMouse/interfaces/ISpriteSensingMouse.md)

Defined in: [src/type/entity/sprite/ISpriteSensing.ts:19](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/sprite/ISpriteSensing.ts#L19)

マウス関連

#### Overrides

[`IEntitySensing`](../../../entity/IEntitySensing/interfaces/IEntitySensing.md).[`mouse`](../../../entity/IEntitySensing/interfaces/IEntitySensing.md#mouse)

***

### sprite

> `readonly` **sprite**: [`ISpriteSensingSprite`](../../ISpriteSensingSprite/interfaces/ISpriteSensingSprite.md)

Defined in: [src/type/entity/sprite/ISpriteSensing.ts:28](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/sprite/ISpriteSensing.ts#L28)

スプライト関連

***

### timer

> `readonly` **timer**: [`IEntitySensingTimer`](../../../entity/IEntitySensingTimer/interfaces/IEntitySensingTimer.md)

Defined in: [src/type/entity/entity/IEntitySensing.ts:27](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntitySensing.ts#L27)

タイマー関連

#### Inherited from

[`IEntitySensing`](../../../entity/IEntitySensing/interfaces/IEntitySensing.md).[`timer`](../../../entity/IEntitySensing/interfaces/IEntitySensing.md#timer)

## Methods

### askAndWait()

> **askAndWait**(`question`): `Promise`\<`string`\>

Defined in: [src/type/entity/entity/IEntitySensing.ts:13](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntitySensing.ts#L13)

質問をして答えを待つ

#### Parameters

##### question

`string`

{string} - 質問テキスト

#### Returns

`Promise`\<`string`\>

- answer

#### Inherited from

[`IEntitySensing`](../../../entity/IEntitySensing/interfaces/IEntitySensing.md).[`askAndWait`](../../../entity/IEntitySensing/interfaces/IEntitySensing.md#askandwait)
