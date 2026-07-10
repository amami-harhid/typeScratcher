# Interface: ISpriteSensingEdge

Defined in: [src/type/entity/sprite/ISpriteSensingEdge.ts:4](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/sprite/ISpriteSensingEdge.ts#L4)

Sprite Sensing(調べる) Edge

## Properties

### isTouching

> `readonly` **isTouching**: `boolean`

Defined in: [src/type/entity/sprite/ISpriteSensingEdge.ts:10](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/sprite/ISpriteSensingEdge.ts#L10)

枠に触っていることの判定

#### Returns

***

### isTouchingHorizontal

> `readonly` **isTouchingHorizontal**: `boolean`

Defined in: [src/type/entity/sprite/ISpriteSensingEdge.ts:21](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/sprite/ISpriteSensingEdge.ts#L21)

水平方向の枠に触っていることを判定する

***

### isTouchingVirtical

> `readonly` **isTouchingVirtical**: `boolean`

Defined in: [src/type/entity/sprite/ISpriteSensingEdge.ts:16](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/sprite/ISpriteSensingEdge.ts#L16)

縦の枠に触っていることを判定する

#### Returns

## Methods

### isTouchingEdge()

> **isTouchingEdge**(): `object`

Defined in: [src/type/entity/sprite/ISpriteSensingEdge.ts:26](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/entity/sprite/ISpriteSensingEdge.ts#L26)

端タッチ情報を取得する

#### Returns

`object`

##### judge

> **judge**: `object`

###### judge.minDist

> **minDist**: `number`

###### judge.nearestEdge

> **nearestEdge**: `string`

##### touch

> **touch**: `boolean`
