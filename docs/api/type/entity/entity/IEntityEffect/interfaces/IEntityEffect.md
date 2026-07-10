# Interface: IEntityEffect

Defined in: [src/type/entity/entity/IEntityEffect.ts:4](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityEffect.ts#L4)

効果

## Methods

### change()

> **change**(`effective`, `value`): `void`

Defined in: [src/type/entity/entity/IEntityEffect.ts:12](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityEffect.ts#L12)

イメージ効果を指定量だけ変える。

#### Parameters

##### effective

[`TImageEffectiveValue`](../../../ImageEffective/type-aliases/TImageEffectiveValue.md)

{TImageEffectiveValue} - イメージ効果

##### value

`number`

{number} - 変更量

#### Returns

`void`

***

### clear()

> **clear**(): `void`

Defined in: [src/type/entity/entity/IEntityEffect.ts:22](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityEffect.ts#L22)

イメージ効果をクリアする（初期値に戻す）

#### Returns

`void`

***

### get()

> **get**(): [`TEntityEffects`](../../TEntityOptions/type-aliases/TEntityEffects.md)

Defined in: [src/type/entity/entity/IEntityEffect.ts:6](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityEffect.ts#L6)

イメージ効果

#### Returns

[`TEntityEffects`](../../TEntityOptions/type-aliases/TEntityEffects.md)

***

### set()

> **set**(`effective`, `value`): `void`

Defined in: [src/type/entity/entity/IEntityEffect.ts:18](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityEffect.ts#L18)

イメージ効果を指定量にする。

#### Parameters

##### effective

[`TImageEffectiveValue`](../../../ImageEffective/type-aliases/TImageEffectiveValue.md)

{TImageEffectiveValue} - イメージ効果

##### value

`number`

{number} - 指定量

#### Returns

`void`
