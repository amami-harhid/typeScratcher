# Interface: ISpriteSensingSprite

Defined in: [src/type/entity/sprite/ISpriteSensingSprite.ts:6](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/type/entity/sprite/ISpriteSensingSprite.ts#L6)

Sprite Sensing(調べる)Sprite

## Extends

- [`IEntitySensingSprite`](../../../entity/IEntitySensingSprite/interfaces/IEntitySensingSprite.md)

## Methods

### degree()

> **degree**(`to`): `number`

Defined in: [src/type/entity/sprite/ISpriteSensingSprite.ts:32](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/type/entity/sprite/ISpriteSensingSprite.ts#L32)

指定したスプライトへの向き

#### Parameters

##### to

[`ISprite`](../../interfaces/ISprite.md)

#### Returns

`number`

***

### distance()

> **distance**(`to`): `number`

Defined in: [src/type/entity/sprite/ISpriteSensingSprite.ts:26](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/type/entity/sprite/ISpriteSensingSprite.ts#L26)

指定したスプライトまでの距離

#### Parameters

##### to

[`ISprite`](../../interfaces/ISprite.md)

#### Returns

`number`

***

### getTouching()

> **getTouching**(`target?`): [`ISprite`](../../interfaces/ISprite.md)[]

Defined in: [src/type/entity/sprite/ISpriteSensingSprite.ts:20](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/type/entity/sprite/ISpriteSensingSprite.ts#L20)

自分に触れているスプライトを配列にして返す

#### Parameters

##### target?

[`ISprite`](../../interfaces/ISprite.md)[]

#### Returns

[`ISprite`](../../interfaces/ISprite.md)[]

***

### isTouching()

> **isTouching**(`sprites`, `includeClone?`): `boolean`

Defined in: [src/type/entity/sprite/ISpriteSensingSprite.ts:13](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/type/entity/sprite/ISpriteSensingSprite.ts#L13)

スプライトに触れていることを判定する（クローンを含める）

#### Parameters

##### sprites

[`ISprite`](../../interfaces/ISprite.md)[]

##### includeClone?

`boolean`

falseのときはクローンを含めずに検査する

#### Returns

`boolean`
