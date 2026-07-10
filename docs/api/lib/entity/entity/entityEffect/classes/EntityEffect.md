# Class: EntityEffect

Defined in: [src/lib/entity/entity/entityEffect.ts:7](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/entity/entityEffect.ts#L7)

効果

## Extended by

- [`SpriteEffect`](../../../sprite/spriteEffect/classes/SpriteEffect.md)
- [`StageEffect`](../../../stage/stageEffect/classes/StageEffect.md)

## Implements

- [`IEntityEffect`](../../../../../type/entity/entity/IEntityEffect/interfaces/IEntityEffect.md)

## Constructors

### Constructor

> **new EntityEffect**(`entity`): `EntityEffect`

Defined in: [src/lib/entity/entity/entityEffect.ts:16](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/entity/entityEffect.ts#L16)

**`Internal`**

#### Parameters

##### entity

[`IEntity`](../../../../../type/entity/entity/interfaces/IEntity.md)

{IEntity}

#### Returns

`EntityEffect`

## Accessors

### effect

#### Set Signature

> **set** **effect**(`_effect`): `void`

Defined in: [src/lib/entity/entity/entityEffect.ts:21](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/entity/entityEffect.ts#L21)

##### Parameters

###### \_effect

[`TEntityEffects`](../../../../../type/entity/entity/TEntityOptions/type-aliases/TEntityEffects.md)

##### Returns

`void`

## Methods

### change()

> **change**(`effective`, `value`): `void`

Defined in: [src/lib/entity/entity/entityEffect.ts:32](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/entity/entityEffect.ts#L32)

イメージ効果を指定量だけ変える。

#### Parameters

##### effective

[`TImageEffectiveValue`](../../../../../type/entity/ImageEffective/type-aliases/TImageEffectiveValue.md)

{TImageEffectiveValue} - イメージ効果

##### value

`number`

{number} - 変更量

#### Returns

`void`

#### Implementation of

[`IEntityEffect`](../../../../../type/entity/entity/IEntityEffect/interfaces/IEntityEffect.md).[`change`](../../../../../type/entity/entity/IEntityEffect/interfaces/IEntityEffect.md#change)

***

### clear()

> **clear**(): `void`

Defined in: [src/lib/entity/entity/entityEffect.ts:89](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/entity/entityEffect.ts#L89)

イメージ効果をクリアする（初期値に戻す）

#### Returns

`void`

#### Implementation of

[`IEntityEffect`](../../../../../type/entity/entity/IEntityEffect/interfaces/IEntityEffect.md).[`clear`](../../../../../type/entity/entity/IEntityEffect/interfaces/IEntityEffect.md#clear)

***

### get()

> **get**(): [`TEntityEffects`](../../../../../type/entity/entity/TEntityOptions/type-aliases/TEntityEffects.md)

Defined in: [src/lib/entity/entity/entityEffect.ts:24](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/entity/entityEffect.ts#L24)

イメージ効果

#### Returns

[`TEntityEffects`](../../../../../type/entity/entity/TEntityOptions/type-aliases/TEntityEffects.md)

#### Implementation of

[`IEntityEffect`](../../../../../type/entity/entity/IEntityEffect/interfaces/IEntityEffect.md).[`get`](../../../../../type/entity/entity/IEntityEffect/interfaces/IEntityEffect.md#get)

***

### set()

> **set**(`effective`, `value`): `void`

Defined in: [src/lib/entity/entity/entityEffect.ts:69](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/entity/entityEffect.ts#L69)

イメージ効果を指定量にする。

#### Parameters

##### effective

[`TImageEffectiveValue`](../../../../../type/entity/ImageEffective/type-aliases/TImageEffectiveValue.md)

{TImageEffectiveValue} - イメージ効果

##### value

`number`

{number} - 指定量

#### Returns

`void`

#### Implementation of

[`IEntityEffect`](../../../../../type/entity/entity/IEntityEffect/interfaces/IEntityEffect.md).[`set`](../../../../../type/entity/entity/IEntityEffect/interfaces/IEntityEffect.md#set)
