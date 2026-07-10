# Class: SpriteSensing

Defined in: [src/lib/entity/sprite/spriteSensing.ts:20](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteSensing.ts#L20)

Sprite Sensing(調べる)

## Implements

- [`ISpriteSensing`](../../../../../type/entity/sprite/ISpriteSensing/interfaces/ISpriteSensing.md)

## Constructors

### Constructor

> **new SpriteSensing**(`entity`): `SpriteSensing`

Defined in: [src/lib/entity/sprite/spriteSensing.ts:32](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteSensing.ts#L32)

**`Internal`**

#### Parameters

##### entity

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

{Sprite}

#### Returns

`SpriteSensing`

## Accessors

### color

#### Get Signature

> **get** **color**(): [`ISpriteSensingColor`](../../../../../type/entity/sprite/ISpriteSensingColor/interfaces/ISpriteSensingColor.md)

Defined in: [src/lib/entity/sprite/spriteSensing.ts:75](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteSensing.ts#L75)

色関連

##### Returns

[`ISpriteSensingColor`](../../../../../type/entity/sprite/ISpriteSensingColor/interfaces/ISpriteSensingColor.md)

色関連

#### Implementation of

[`ISpriteSensing`](../../../../../type/entity/sprite/ISpriteSensing/interfaces/ISpriteSensing.md).[`color`](../../../../../type/entity/sprite/ISpriteSensing/interfaces/ISpriteSensing.md#color)

***

### dragMode

#### Get Signature

> **get** **dragMode**(): [`ISpriteDragMode`](../../../../../type/entity/sprite/ISpriteDragMode/interfaces/ISpriteDragMode.md)

Defined in: [src/lib/entity/sprite/spriteSensing.ts:84](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteSensing.ts#L84)

Drag Mode

##### Returns

[`ISpriteDragMode`](../../../../../type/entity/sprite/ISpriteDragMode/interfaces/ISpriteDragMode.md)

Drag Mode

#### Implementation of

[`ISpriteSensing`](../../../../../type/entity/sprite/ISpriteSensing/interfaces/ISpriteSensing.md).[`dragMode`](../../../../../type/entity/sprite/ISpriteSensing/interfaces/ISpriteSensing.md#dragmode)

***

### edge

#### Get Signature

> **get** **edge**(): [`ISpriteSensingEdge`](../../../../../type/entity/sprite/ISpriteSensingEdge/interfaces/ISpriteSensingEdge.md)

Defined in: [src/lib/entity/sprite/spriteSensing.ts:72](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteSensing.ts#L72)

端関連

##### Returns

[`ISpriteSensingEdge`](../../../../../type/entity/sprite/ISpriteSensingEdge/interfaces/ISpriteSensingEdge.md)

端関連

#### Implementation of

[`ISpriteSensing`](../../../../../type/entity/sprite/ISpriteSensing/interfaces/ISpriteSensing.md).[`edge`](../../../../../type/entity/sprite/ISpriteSensing/interfaces/ISpriteSensing.md#edge)

***

### keyboard

#### Get Signature

> **get** **keyboard**(): [`IEntitySensingKey`](../../../../../type/entity/entity/IEntitySensingKey/interfaces/IEntitySensingKey.md)

Defined in: [src/lib/entity/sprite/spriteSensing.ts:63](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteSensing.ts#L63)

Key関連

##### Returns

[`IEntitySensingKey`](../../../../../type/entity/entity/IEntitySensingKey/interfaces/IEntitySensingKey.md)

キーボード関連

#### Implementation of

[`ISpriteSensing`](../../../../../type/entity/sprite/ISpriteSensing/interfaces/ISpriteSensing.md).[`keyboard`](../../../../../type/entity/sprite/ISpriteSensing/interfaces/ISpriteSensing.md#keyboard)

***

### mouse

#### Get Signature

> **get** **mouse**(): [`ISpriteSensingMouse`](../../../../../type/entity/sprite/ISpriteSensingMouse/interfaces/ISpriteSensingMouse.md)

Defined in: [src/lib/entity/sprite/spriteSensing.ts:57](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteSensing.ts#L57)

マウス情報

##### Returns

[`ISpriteSensingMouse`](../../../../../type/entity/sprite/ISpriteSensingMouse/interfaces/ISpriteSensingMouse.md)

マウス関連

#### Implementation of

[`ISpriteSensing`](../../../../../type/entity/sprite/ISpriteSensing/interfaces/ISpriteSensing.md).[`mouse`](../../../../../type/entity/sprite/ISpriteSensing/interfaces/ISpriteSensing.md#mouse)

***

### sprite

#### Get Signature

> **get** **sprite**(): [`ISpriteSensingSprite`](../../../../../type/entity/sprite/ISpriteSensingSprite/interfaces/ISpriteSensingSprite.md)

Defined in: [src/lib/entity/sprite/spriteSensing.ts:78](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteSensing.ts#L78)

スプライト関連

##### Returns

[`ISpriteSensingSprite`](../../../../../type/entity/sprite/ISpriteSensingSprite/interfaces/ISpriteSensingSprite.md)

スプライト関連

#### Implementation of

[`ISpriteSensing`](../../../../../type/entity/sprite/ISpriteSensing/interfaces/ISpriteSensing.md).[`sprite`](../../../../../type/entity/sprite/ISpriteSensing/interfaces/ISpriteSensing.md#sprite)

***

### timer

#### Get Signature

> **get** **timer**(): [`IEntitySensingTimer`](../../../../../type/entity/entity/IEntitySensingTimer/interfaces/IEntitySensingTimer.md)

Defined in: [src/lib/entity/sprite/spriteSensing.ts:69](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteSensing.ts#L69)

タイマー関連

##### Returns

[`IEntitySensingTimer`](../../../../../type/entity/entity/IEntitySensingTimer/interfaces/IEntitySensingTimer.md)

タイマー関連

#### Implementation of

[`ISpriteSensing`](../../../../../type/entity/sprite/ISpriteSensing/interfaces/ISpriteSensing.md).[`timer`](../../../../../type/entity/sprite/ISpriteSensing/interfaces/ISpriteSensing.md#timer)

## Methods

### askAndWait()

> **askAndWait**(`question`): `Promise`\<`string`\>

Defined in: [src/lib/entity/sprite/spriteSensing.ts:46](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteSensing.ts#L46)

質問をして答えを待つ

#### Parameters

##### question

`string`

{string} - 質問テキスト

#### Returns

`Promise`\<`string`\>

- answer

#### Implementation of

[`ISpriteSensing`](../../../../../type/entity/sprite/ISpriteSensing/interfaces/ISpriteSensing.md).[`askAndWait`](../../../../../type/entity/sprite/ISpriteSensing/interfaces/ISpriteSensing.md#askandwait)
