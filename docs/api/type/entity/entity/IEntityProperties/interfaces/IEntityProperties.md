# Interface: IEntityProperties

Defined in: [src/type/entity/entity/IEntityProperties.ts:15](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/entity/IEntityProperties.ts#L15)

プロパティ

## Properties

### degree

> **degree**: `number`

Defined in: [src/type/entity/entity/IEntityProperties.ts:21](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/entity/IEntityProperties.ts#L21)

角度

***

### position

> **position**: [`IPosition`](IPosition.md)

Defined in: [src/type/entity/entity/IEntityProperties.ts:17](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/entity/IEntityProperties.ts#L17)

座標

***

### rotationStyle

> **rotationStyle**: [`RotationValue`](../../../RotationStyle/type-aliases/RotationValue.md)

Defined in: [src/type/entity/entity/IEntityProperties.ts:25](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/entity/IEntityProperties.ts#L25)

回転方法

***

### scale

> **scale**: [`IScale`](IScale.md)

Defined in: [src/type/entity/entity/IEntityProperties.ts:19](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/entity/IEntityProperties.ts#L19)

スケール

***

### visible

> **visible**: `boolean`

Defined in: [src/type/entity/entity/IEntityProperties.ts:23](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/entity/IEntityProperties.ts#L23)

表示・非表示

## Methods

### update()

> **update**(): `void`

Defined in: [src/type/entity/entity/IEntityProperties.ts:27](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/entity/IEntityProperties.ts#L27)

プロパティをレンダラーへ反映

#### Returns

`void`

***

### updateDrawableProperties()

> **updateDrawableProperties**(`prop`): `void`

Defined in: [src/type/entity/entity/IEntityProperties.ts:29](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/entity/IEntityProperties.ts#L29)

プロパティをレンダラーへ反映

#### Parameters

##### prop

[`ScratchRenderProperties`](../../../../render/IRenderWebGL/type-aliases/ScratchRenderProperties.md)

#### Returns

`void`
