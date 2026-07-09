# Interface: ISpriteMotionMove

Defined in: [src/type/entity/sprite/ISpriteMotionMove.ts:7](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/ISpriteMotionMove.ts#L7)

スプライトの動き（動かす）

## Methods

### glideTo()

> **glideTo**(`sec`, `x`, `y`): `Promise`\<`void`\>

Defined in: [src/type/entity/sprite/ISpriteMotionMove.ts:42](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/ISpriteMotionMove.ts#L42)

指定秒数かけて指定座標へ移動させる

#### Parameters

##### sec

`number`

{number} - 秒数

##### x

`number`

{number} - X座標

##### y

`number`

{number} - Y座標

#### Returns

`Promise`\<`void`\>

***

### ifOnEdgeBounce()

> **ifOnEdgeBounce**(): `void`

Defined in: [src/type/entity/sprite/ISpriteMotionMove.ts:22](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/ISpriteMotionMove.ts#L22)

もし端に振れたら跳ね返る

#### Returns

`void`

***

### steps()

> **steps**(`steps`): `void`

Defined in: [src/type/entity/sprite/ISpriteMotionMove.ts:12](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/ISpriteMotionMove.ts#L12)

ステップ数分、進ませる

#### Parameters

##### steps

`number`

{number} - ステップ数

#### Returns

`void`

***

### to()

> **to**(`x`, `y`): `void`

Defined in: [src/type/entity/sprite/ISpriteMotionMove.ts:18](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/ISpriteMotionMove.ts#L18)

指定座標へ移動させる

#### Parameters

##### x

`number`

{number} - X座標

##### y

`number`

{number} - Y座標

#### Returns

`void`

***

### toMouse()

> **toMouse**(): `void`

Defined in: [src/type/entity/sprite/ISpriteMotionMove.ts:30](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/ISpriteMotionMove.ts#L30)

マウスカーソルの位置へ移動させる

#### Returns

`void`

***

### toRandom()

> **toRandom**(): `void`

Defined in: [src/type/entity/sprite/ISpriteMotionMove.ts:26](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/ISpriteMotionMove.ts#L26)

ステージ上のどこかに移動させる

#### Returns

`void`

***

### toSprite()

> **toSprite**(`target`): `void`

Defined in: [src/type/entity/sprite/ISpriteMotionMove.ts:35](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/ISpriteMotionMove.ts#L35)

指定したスプライトの位置へ移動させる

#### Parameters

##### target

[`ISprite`](../../interfaces/ISprite.md)

{Sprite} - 指定スプライト

#### Returns

`void`
