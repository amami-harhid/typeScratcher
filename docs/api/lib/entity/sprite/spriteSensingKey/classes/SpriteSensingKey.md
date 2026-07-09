# Class: SpriteSensingKey

Defined in: [src/lib/entity/sprite/spriteSensingKey.ts:8](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/spriteSensingKey.ts#L8)

Sprite Sensing(調べる) Key

## Implements

- [`IEntitySensingKey`](../../../../../type/entity/entity/IEntitySensingKey/interfaces/IEntitySensingKey.md)

## Constructors

### Constructor

> **new SpriteSensingKey**(`entity`): `SpriteSensingKey`

Defined in: [src/lib/entity/sprite/spriteSensingKey.ts:14](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/spriteSensingKey.ts#L14)

**`Internal`**

#### Parameters

##### entity

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

{ISprite}

#### Returns

`SpriteSensingKey`

## Methods

### isDown()

> **isDown**(`key`): `boolean`

Defined in: [src/lib/entity/sprite/spriteSensingKey.ts:23](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/spriteSensingKey.ts#L23)

キーが押されていることの判定

#### Parameters

##### key

`string`

{string}

#### Returns

`boolean`

キー押下判定

#### Implementation of

[`IEntitySensingKey`](../../../../../type/entity/entity/IEntitySensingKey/interfaces/IEntitySensingKey.md).[`isDown`](../../../../../type/entity/entity/IEntitySensingKey/interfaces/IEntitySensingKey.md#isdown)

***

### isNotDown()

> **isNotDown**(`key`): `boolean`

Defined in: [src/lib/entity/sprite/spriteSensingKey.ts:31](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/spriteSensingKey.ts#L31)

キーが押されていないことの判定

#### Parameters

##### key

`string`

{string}

#### Returns

`boolean`

キー押下判定

#### Implementation of

[`IEntitySensingKey`](../../../../../type/entity/entity/IEntitySensingKey/interfaces/IEntitySensingKey.md).[`isNotDown`](../../../../../type/entity/entity/IEntitySensingKey/interfaces/IEntitySensingKey.md#isnotdown)
