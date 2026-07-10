# Class: SpriteProperties

Defined in: [src/lib/entity/sprite/spriteProperties.ts:10](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteProperties.ts#L10)

SpriteProperties

## Extends

- [`EntityProperties`](../../../entity/entityProperties/classes/EntityProperties.md)

## Constructors

### Constructor

> **new SpriteProperties**(`sprite`): `SpriteProperties`

Defined in: [src/lib/entity/sprite/spriteProperties.ts:11](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteProperties.ts#L11)

#### Parameters

##### sprite

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

#### Returns

`SpriteProperties`

#### Overrides

[`EntityProperties`](../../../entity/entityProperties/classes/EntityProperties.md).[`constructor`](../../../entity/entityProperties/classes/EntityProperties.md#constructor)

## Accessors

### degree

#### Get Signature

> **get** **degree**(): `number`

Defined in: [src/lib/entity/entity/entityProperties.ts:68](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/entity/entityProperties.ts#L68)

角度

##### Returns

`number`

#### Set Signature

> **set** **degree**(`degree`): `void`

Defined in: [src/lib/entity/entity/entityProperties.ts:71](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/entity/entityProperties.ts#L71)

角度

##### Parameters

###### degree

`number`

##### Returns

`void`

角度

#### Inherited from

[`EntityProperties`](../../../entity/entityProperties/classes/EntityProperties.md).[`degree`](../../../entity/entityProperties/classes/EntityProperties.md#degree)

***

### position

#### Get Signature

> **get** **position**(): [`IPosition`](../../../../../type/entity/entity/IEntityProperties/interfaces/IPosition.md)

Defined in: [src/lib/entity/entity/entityProperties.ts:54](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/entity/entityProperties.ts#L54)

座標

##### Returns

[`IPosition`](../../../../../type/entity/entity/IEntityProperties/interfaces/IPosition.md)

#### Set Signature

> **set** **position**(`pos`): `void`

Defined in: [src/lib/entity/entity/entityProperties.ts:57](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/entity/entityProperties.ts#L57)

座標

##### Parameters

###### pos

\[`number`, `number`\]

##### Returns

`void`

座標

#### Inherited from

[`EntityProperties`](../../../entity/entityProperties/classes/EntityProperties.md).[`position`](../../../entity/entityProperties/classes/EntityProperties.md#position)

***

### rotationStyle

#### Get Signature

> **get** **rotationStyle**(): [`RotationValue`](../../../../../type/entity/RotationStyle/type-aliases/RotationValue.md)

Defined in: [src/lib/entity/entity/entityProperties.ts:81](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/entity/entityProperties.ts#L81)

回転方法

##### Returns

[`RotationValue`](../../../../../type/entity/RotationStyle/type-aliases/RotationValue.md)

#### Set Signature

> **set** **rotationStyle**(`style`): `void`

Defined in: [src/lib/entity/entity/entityProperties.ts:84](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/entity/entityProperties.ts#L84)

回転方法

##### Parameters

###### style

[`RotationValue`](../../../../../type/entity/RotationStyle/type-aliases/RotationValue.md)

##### Returns

`void`

回転方法

#### Inherited from

[`EntityProperties`](../../../entity/entityProperties/classes/EntityProperties.md).[`rotationStyle`](../../../entity/entityProperties/classes/EntityProperties.md#rotationstyle)

***

### scale

#### Get Signature

> **get** **scale**(): [`Scale`](../../../entity/entityProperties/classes/Scale.md)

Defined in: [src/lib/entity/entity/entityProperties.ts:61](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/entity/entityProperties.ts#L61)

スケール

##### Returns

[`Scale`](../../../entity/entityProperties/classes/Scale.md)

#### Set Signature

> **set** **scale**(`size`): `void`

Defined in: [src/lib/entity/entity/entityProperties.ts:64](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/entity/entityProperties.ts#L64)

スケール

##### Parameters

###### size

\[`number`, `number`\]

##### Returns

`void`

スケール

#### Inherited from

[`EntityProperties`](../../../entity/entityProperties/classes/EntityProperties.md).[`scale`](../../../entity/entityProperties/classes/EntityProperties.md#scale)

***

### visible

#### Get Signature

> **get** **visible**(): `boolean`

Defined in: [src/lib/entity/entity/entityProperties.ts:75](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/entity/entityProperties.ts#L75)

表示・非表示

##### Returns

`boolean`

#### Set Signature

> **set** **visible**(`visible`): `void`

Defined in: [src/lib/entity/entity/entityProperties.ts:78](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/entity/entityProperties.ts#L78)

表示・非表示

##### Parameters

###### visible

`boolean`

##### Returns

`void`

表示・非表示

#### Inherited from

[`EntityProperties`](../../../entity/entityProperties/classes/EntityProperties.md).[`visible`](../../../entity/entityProperties/classes/EntityProperties.md#visible)

## Methods

### update()

> **update**(): `void`

Defined in: [src/lib/entity/sprite/spriteProperties.ts:14](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteProperties.ts#L14)

プロパティをレンダラーへ反映

#### Returns

`void`

#### Overrides

[`EntityProperties`](../../../entity/entityProperties/classes/EntityProperties.md).[`update`](../../../entity/entityProperties/classes/EntityProperties.md#update)

***

### updateDrawableProperties()

> **updateDrawableProperties**(`prop`): `void`

Defined in: [src/lib/entity/entity/entityProperties.ts:90](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/entity/entityProperties.ts#L90)

プロパティをレンダラーへ反映

#### Parameters

##### prop

[`ScratchRenderProperties`](../../../../../type/render/IRenderWebGL/type-aliases/ScratchRenderProperties.md)

#### Returns

`void`

#### Inherited from

[`EntityProperties`](../../../entity/entityProperties/classes/EntityProperties.md).[`updateDrawableProperties`](../../../entity/entityProperties/classes/EntityProperties.md#updatedrawableproperties)
