# Class: SpriteSensingEdge

Defined in: [src/lib/entity/sprite/spriteSensingEdge.ts:7](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteSensingEdge.ts#L7)

Sprite Sensing(調べる) Edge

## Implements

- [`ISpriteSensingEdge`](../../../../../type/entity/sprite/ISpriteSensingEdge/interfaces/ISpriteSensingEdge.md)

## Constructors

### Constructor

> **new SpriteSensingEdge**(`entity`): `SpriteSensingEdge`

Defined in: [src/lib/entity/sprite/spriteSensingEdge.ts:14](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteSensingEdge.ts#L14)

**`Internal`**

#### Parameters

##### entity

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

{ISprite}

#### Returns

`SpriteSensingEdge`

## Accessors

### isTouching

#### Get Signature

> **get** **isTouching**(): `boolean`

Defined in: [src/lib/entity/sprite/spriteSensingEdge.ts:22](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteSensingEdge.ts#L22)

枠に触っていることの判定

##### Returns

`boolean`

枠に触っていることの判定

#### Implementation of

[`ISpriteSensingEdge`](../../../../../type/entity/sprite/ISpriteSensingEdge/interfaces/ISpriteSensingEdge.md).[`isTouching`](../../../../../type/entity/sprite/ISpriteSensingEdge/interfaces/ISpriteSensingEdge.md#istouching)

***

### isTouchingHorizontal

#### Get Signature

> **get** **isTouchingHorizontal**(): `boolean`

Defined in: [src/lib/entity/sprite/spriteSensingEdge.ts:46](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteSensingEdge.ts#L46)

水平方向の枠に触っていることを判定する

##### Returns

`boolean`

水平方向の枠に触っていることを判定する

#### Implementation of

[`ISpriteSensingEdge`](../../../../../type/entity/sprite/ISpriteSensingEdge/interfaces/ISpriteSensingEdge.md).[`isTouchingHorizontal`](../../../../../type/entity/sprite/ISpriteSensingEdge/interfaces/ISpriteSensingEdge.md#istouchinghorizontal)

***

### isTouchingVirtical

#### Get Signature

> **get** **isTouchingVirtical**(): `boolean`

Defined in: [src/lib/entity/sprite/spriteSensingEdge.ts:31](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteSensingEdge.ts#L31)

縦の枠に触っていることを判定する

##### Returns

`boolean`

縦の枠に触っていることを判定する

#### Implementation of

[`ISpriteSensingEdge`](../../../../../type/entity/sprite/ISpriteSensingEdge/interfaces/ISpriteSensingEdge.md).[`isTouchingVirtical`](../../../../../type/entity/sprite/ISpriteSensingEdge/interfaces/ISpriteSensingEdge.md#istouchingvirtical)

## Methods

### isTouchingEdge()

> **isTouchingEdge**(): `object`

Defined in: [src/lib/entity/sprite/spriteSensingEdge.ts:62](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteSensingEdge.ts#L62)

スプライトがステージの枠に触っているか否かを判定する

#### Returns

`object`

##### judge

> **judge**: `object`

###### judge.minDist

> **minDist**: `number`

###### judge.nearestEdge

> **nearestEdge**: `string`

##### touch

> **touch**: `boolean`

#### Implementation of

[`ISpriteSensingEdge`](../../../../../type/entity/sprite/ISpriteSensingEdge/interfaces/ISpriteSensingEdge.md).[`isTouchingEdge`](../../../../../type/entity/sprite/ISpriteSensingEdge/interfaces/ISpriteSensingEdge.md#istouchingedge)
