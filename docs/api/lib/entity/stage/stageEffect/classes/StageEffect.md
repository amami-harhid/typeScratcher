# Class: StageEffect

Defined in: [src/lib/entity/stage/stageEffect.ts:6](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/stage/stageEffect.ts#L6)

効果

## Extends

- [`EntityEffect`](../../../entity/entityEffect/classes/EntityEffect.md)

## Implements

- [`IStageEffect`](../../../../../type/entity/stage/IStageEffect/type-aliases/IStageEffect.md)

## Constructors

### Constructor

> **new StageEffect**(`entity`): `StageEffect`

Defined in: [src/lib/entity/stage/stageEffect.ts:12](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/stage/stageEffect.ts#L12)

**`Internal`**

#### Parameters

##### entity

[`IStage`](../../../../../type/entity/stage/interfaces/IStage.md)

{IStage}

#### Returns

`StageEffect`

#### Overrides

[`EntityEffect`](../../../entity/entityEffect/classes/EntityEffect.md).[`constructor`](../../../entity/entityEffect/classes/EntityEffect.md#constructor)

## Accessors

### effect

#### Set Signature

> **set** **effect**(`_effect`): `void`

Defined in: [src/lib/entity/entity/entityEffect.ts:21](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entityEffect.ts#L21)

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

Defined in: [src/lib/entity/entity/entityEffect.ts:32](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entityEffect.ts#L32)

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

`IStageEffect.change`

#### Inherited from

[`EntityEffect`](../../../entity/entityEffect/classes/EntityEffect.md).[`change`](../../../entity/entityEffect/classes/EntityEffect.md#change)

***

### clear()

> **clear**(): `void`

Defined in: [src/lib/entity/entity/entityEffect.ts:89](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entityEffect.ts#L89)

イメージ効果をクリアする（初期値に戻す）

#### Returns

`void`

#### Implementation of

`IStageEffect.clear`

#### Inherited from

[`EntityEffect`](../../../entity/entityEffect/classes/EntityEffect.md).[`clear`](../../../entity/entityEffect/classes/EntityEffect.md#clear)

***

### get()

> **get**(): [`TEntityEffects`](../../../../../type/entity/entity/TEntityOptions/type-aliases/TEntityEffects.md)

Defined in: [src/lib/entity/entity/entityEffect.ts:24](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entityEffect.ts#L24)

イメージ効果

#### Returns

[`TEntityEffects`](../../../../../type/entity/entity/TEntityOptions/type-aliases/TEntityEffects.md)

#### Implementation of

`IStageEffect.get`

#### Inherited from

[`EntityEffect`](../../../entity/entityEffect/classes/EntityEffect.md).[`get`](../../../entity/entityEffect/classes/EntityEffect.md#get)

***

### set()

> **set**(`effective`, `value`): `void`

Defined in: [src/lib/entity/entity/entityEffect.ts:69](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entityEffect.ts#L69)

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

`IStageEffect.set`

#### Inherited from

[`EntityEffect`](../../../entity/entityEffect/classes/EntityEffect.md).[`set`](../../../entity/entityEffect/classes/EntityEffect.md#set)
