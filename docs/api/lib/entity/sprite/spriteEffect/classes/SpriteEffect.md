# Class: SpriteEffect

Defined in: [src/lib/entity/sprite/spriteEffect.ts:5](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/spriteEffect.ts#L5)

効果

## Extends

- [`EntityEffect`](../../../entity/entityEffect/classes/EntityEffect.md)

## Constructors

### Constructor

> **new SpriteEffect**(`entity`): `SpriteEffect`

Defined in: [src/lib/entity/sprite/spriteEffect.ts:11](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/spriteEffect.ts#L11)

**`Internal`**

#### Parameters

##### entity

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

{ISprite}

#### Returns

`SpriteEffect`

#### Overrides

[`EntityEffect`](../../../entity/entityEffect/classes/EntityEffect.md).[`constructor`](../../../entity/entityEffect/classes/EntityEffect.md#constructor)

## Accessors

### effect

#### Set Signature

> **set** **effect**(`_effect`): `void`

Defined in: [src/lib/entity/entity/entityEffect.ts:21](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/entity/entityEffect.ts#L21)

##### Parameters

###### \_effect

[`TEntityEffects`](../../../../../type/entity/entity/TEntityOptions/type-aliases/TEntityEffects.md)

##### Returns

`void`

#### Inherited from

[`EntityEffect`](../../../entity/entityEffect/classes/EntityEffect.md).[`effect`](../../../entity/entityEffect/classes/EntityEffect.md#effect)

## Methods

### change()

> **change**(`effective`, `value`): `void`

Defined in: [src/lib/entity/entity/entityEffect.ts:32](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/entity/entityEffect.ts#L32)

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

#### Inherited from

[`EntityEffect`](../../../entity/entityEffect/classes/EntityEffect.md).[`change`](../../../entity/entityEffect/classes/EntityEffect.md#change)

***

### clear()

> **clear**(): `void`

Defined in: [src/lib/entity/entity/entityEffect.ts:89](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/entity/entityEffect.ts#L89)

イメージ効果をクリアする（初期値に戻す）

#### Returns

`void`

#### Inherited from

[`EntityEffect`](../../../entity/entityEffect/classes/EntityEffect.md).[`clear`](../../../entity/entityEffect/classes/EntityEffect.md#clear)

***

### get()

> **get**(): [`TEntityEffects`](../../../../../type/entity/entity/TEntityOptions/type-aliases/TEntityEffects.md)

Defined in: [src/lib/entity/entity/entityEffect.ts:24](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/entity/entityEffect.ts#L24)

イメージ効果

#### Returns

[`TEntityEffects`](../../../../../type/entity/entity/TEntityOptions/type-aliases/TEntityEffects.md)

#### Inherited from

[`EntityEffect`](../../../entity/entityEffect/classes/EntityEffect.md).[`get`](../../../entity/entityEffect/classes/EntityEffect.md#get)

***

### set()

> **set**(`effective`, `value`): `void`

Defined in: [src/lib/entity/entity/entityEffect.ts:69](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/entity/entityEffect.ts#L69)

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

#### Inherited from

[`EntityEffect`](../../../entity/entityEffect/classes/EntityEffect.md).[`set`](../../../entity/entityEffect/classes/EntityEffect.md#set)
