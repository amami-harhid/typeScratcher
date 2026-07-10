# Class: SpriteSensingDistance

Defined in: [src/lib/entity/sprite/spriteSensingDistance.ts:8](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteSensingDistance.ts#L8)

距離

## Implements

- [`ISpriteSensingDistance`](../../../../../type/entity/sprite/ISpriteSensingDistance/interfaces/ISpriteSensingDistance.md)

## Constructors

### Constructor

> **new SpriteSensingDistance**(`entity`): `SpriteSensingDistance`

Defined in: [src/lib/entity/sprite/spriteSensingDistance.ts:15](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteSensingDistance.ts#L15)

**`Internal`**

#### Parameters

##### entity

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

{Sprite}

#### Returns

`SpriteSensingDistance`

## Methods

### mousePointer()

> **mousePointer**(): `number`

Defined in: [src/lib/entity/sprite/spriteSensingDistance.ts:22](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteSensingDistance.ts#L22)

マウスカーソルとの距離

#### Returns

`number`

#### Implementation of

[`ISpriteSensingDistance`](../../../../../type/entity/sprite/ISpriteSensingDistance/interfaces/ISpriteSensingDistance.md).[`mousePointer`](../../../../../type/entity/sprite/ISpriteSensingDistance/interfaces/ISpriteSensingDistance.md#mousepointer)

***

### to()

> **to**(`targetSprite`): `number`

Defined in: [src/lib/entity/sprite/spriteSensingDistance.ts:42](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteSensingDistance.ts#L42)

他スプライトとの距離(中心同士の距離)

#### Parameters

##### targetSprite

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

#### Returns

`number`

#### Implementation of

[`ISpriteSensingDistance`](../../../../../type/entity/sprite/ISpriteSensingDistance/interfaces/ISpriteSensingDistance.md).[`to`](../../../../../type/entity/sprite/ISpriteSensingDistance/interfaces/ISpriteSensingDistance.md#to)
