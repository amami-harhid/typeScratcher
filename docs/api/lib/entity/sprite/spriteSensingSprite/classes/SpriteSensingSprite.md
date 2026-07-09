# Class: SpriteSensingSprite

Defined in: [src/lib/entity/sprite/spriteSensingSprite.ts:11](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/sprite/spriteSensingSprite.ts#L11)

Sprite Sensing(調べる) Sprite

## Extends

- [`EntitySensingSprite`](../../../entity/entitySensingSprite/classes/EntitySensingSprite.md)

## Implements

- [`ISpriteSensingSprite`](../../../../../type/entity/sprite/ISpriteSensingSprite/interfaces/ISpriteSensingSprite.md)

## Constructors

### Constructor

> **new SpriteSensingSprite**(`entity`): `SpriteSensingSprite`

Defined in: [src/lib/entity/sprite/spriteSensingSprite.ts:17](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/sprite/spriteSensingSprite.ts#L17)

**`Internal`**

#### Parameters

##### entity

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

{ISprite}

#### Returns

`SpriteSensingSprite`

#### Overrides

[`EntitySensingSprite`](../../../entity/entitySensingSprite/classes/EntitySensingSprite.md).[`constructor`](../../../entity/entitySensingSprite/classes/EntitySensingSprite.md#constructor)

## Methods

### degree()

> **degree**(`target`): `number`

Defined in: [src/lib/entity/sprite/spriteSensingSprite.ts:41](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/sprite/spriteSensingSprite.ts#L41)

スプライトへの向き

#### Parameters

##### target

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

#### Returns

`number`

#### Implementation of

[`ISpriteSensingSprite`](../../../../../type/entity/sprite/ISpriteSensingSprite/interfaces/ISpriteSensingSprite.md).[`degree`](../../../../../type/entity/sprite/ISpriteSensingSprite/interfaces/ISpriteSensingSprite.md#degree)

***

### degreeToTarget()

> **degreeToTarget**(`target`): `number`

Defined in: [src/lib/entity/entity/entitySensingSprite.ts:53](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entitySensingSprite.ts#L53)

#### Parameters

##### target

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

#### Returns

`number`

#### Inherited from

[`EntitySensingSprite`](../../../entity/entitySensingSprite/classes/EntitySensingSprite.md).[`degreeToTarget`](../../../entity/entitySensingSprite/classes/EntitySensingSprite.md#degreetotarget)

***

### distance()

> **distance**(`target`): `number`

Defined in: [src/lib/entity/sprite/spriteSensingSprite.ts:32](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/sprite/spriteSensingSprite.ts#L32)

スプライトまでの距離

#### Parameters

##### target

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

#### Returns

`number`

#### Implementation of

[`ISpriteSensingSprite`](../../../../../type/entity/sprite/ISpriteSensingSprite/interfaces/ISpriteSensingSprite.md).[`distance`](../../../../../type/entity/sprite/ISpriteSensingSprite/interfaces/ISpriteSensingSprite.md#distance)

***

### getTouching()

> **getTouching**(`targets?`): [`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)[]

Defined in: [src/lib/entity/sprite/spriteSensingSprite.ts:52](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/sprite/spriteSensingSprite.ts#L52)

自分に触れているスプライトを配列にして返す

#### Parameters

##### targets?

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)[]

#### Returns

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)[]

#### Implementation of

[`ISpriteSensingSprite`](../../../../../type/entity/sprite/ISpriteSensingSprite/interfaces/ISpriteSensingSprite.md).[`getTouching`](../../../../../type/entity/sprite/ISpriteSensingSprite/interfaces/ISpriteSensingSprite.md#gettouching)

***

### getTouchingTarget()

> **getTouchingTarget**(`targets`): [`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)[]

Defined in: [src/lib/entity/entity/entitySensingSprite.ts:65](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entitySensingSprite.ts#L65)

#### Parameters

##### targets

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)[]

#### Returns

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)[]

#### Inherited from

[`EntitySensingSprite`](../../../entity/entitySensingSprite/classes/EntitySensingSprite.md).[`getTouchingTarget`](../../../entity/entitySensingSprite/classes/EntitySensingSprite.md#gettouchingtarget)

***

### isTouching()

> **isTouching**(`sprites`, `includeClone?`): `boolean`

Defined in: [src/lib/entity/sprite/spriteSensingSprite.ts:21](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/sprite/spriteSensingSprite.ts#L21)

スプライトに触れていることを判定する（クローンを含める）

#### Parameters

##### sprites

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)[]

##### includeClone?

`boolean` = `true`

falseのときはクローンを含めずに検査する

#### Returns

`boolean`

#### Implementation of

[`ISpriteSensingSprite`](../../../../../type/entity/sprite/ISpriteSensingSprite/interfaces/ISpriteSensingSprite.md).[`isTouching`](../../../../../type/entity/sprite/ISpriteSensingSprite/interfaces/ISpriteSensingSprite.md#istouching)
