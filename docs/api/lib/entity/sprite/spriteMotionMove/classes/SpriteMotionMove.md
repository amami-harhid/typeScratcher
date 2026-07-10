# Class: SpriteMotionMove

Defined in: [src/lib/entity/sprite/spriteMotionMove.ts:13](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/spriteMotionMove.ts#L13)

スプライトの動き（動かす）

## Implements

- [`ISpriteMotionMove`](../../../../../type/entity/sprite/ISpriteMotionMove/interfaces/ISpriteMotionMove.md)

## Constructors

### Constructor

> **new SpriteMotionMove**(`entity`): `SpriteMotionMove`

Defined in: [src/lib/entity/sprite/spriteMotionMove.ts:20](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/spriteMotionMove.ts#L20)

**`Internal`**

#### Parameters

##### entity

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

{Sprite}

#### Returns

`SpriteMotionMove`

## Accessors

### x

#### Get Signature

> **get** **x**(): `number`

Defined in: [src/lib/entity/sprite/spriteMotionMove.ts:24](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/spriteMotionMove.ts#L24)

##### Returns

`number`

#### Set Signature

> **set** **x**(`x`): `void`

Defined in: [src/lib/entity/sprite/spriteMotionMove.ts:27](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/spriteMotionMove.ts#L27)

##### Parameters

###### x

`number`

##### Returns

`void`

***

### y

#### Get Signature

> **get** **y**(): `number`

Defined in: [src/lib/entity/sprite/spriteMotionMove.ts:30](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/spriteMotionMove.ts#L30)

##### Returns

`number`

#### Set Signature

> **set** **y**(`y`): `void`

Defined in: [src/lib/entity/sprite/spriteMotionMove.ts:33](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/spriteMotionMove.ts#L33)

##### Parameters

###### y

`number`

##### Returns

`void`

## Methods

### glideTo()

> **glideTo**(`sec`, `x`, `y`): `Promise`\<`void`\>

Defined in: [src/lib/entity/sprite/spriteMotionMove.ts:179](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/spriteMotionMove.ts#L179)

#### Parameters

##### sec

`number`

##### x

`number`

##### y

`number`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISpriteMotionMove`](../../../../../type/entity/sprite/ISpriteMotionMove/interfaces/ISpriteMotionMove.md).[`glideTo`](../../../../../type/entity/sprite/ISpriteMotionMove/interfaces/ISpriteMotionMove.md#glideto)

***

### ifOnEdgeBounce()

> **ifOnEdgeBounce**(): `void`

Defined in: [src/lib/entity/sprite/spriteMotionMove.ts:59](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/spriteMotionMove.ts#L59)

もし端に振れたら跳ね返る

#### Returns

`void`

#### Implementation of

[`ISpriteMotionMove`](../../../../../type/entity/sprite/ISpriteMotionMove/interfaces/ISpriteMotionMove.md).[`ifOnEdgeBounce`](../../../../../type/entity/sprite/ISpriteMotionMove/interfaces/ISpriteMotionMove.md#ifonedgebounce)

***

### steps()

> **steps**(`steps`): `void`

Defined in: [src/lib/entity/sprite/spriteMotionMove.ts:46](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/spriteMotionMove.ts#L46)

ステップ数分、進ませる

#### Parameters

##### steps

`number`

{number} - ステップ数

#### Returns

`void`

#### Implementation of

[`ISpriteMotionMove`](../../../../../type/entity/sprite/ISpriteMotionMove/interfaces/ISpriteMotionMove.md).[`steps`](../../../../../type/entity/sprite/ISpriteMotionMove/interfaces/ISpriteMotionMove.md#steps)

***

### to()

> **to**(`x`, `y`): `void`

Defined in: [src/lib/entity/sprite/spriteMotionMove.ts:36](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/spriteMotionMove.ts#L36)

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

#### Implementation of

[`ISpriteMotionMove`](../../../../../type/entity/sprite/ISpriteMotionMove/interfaces/ISpriteMotionMove.md).[`to`](../../../../../type/entity/sprite/ISpriteMotionMove/interfaces/ISpriteMotionMove.md#to)

***

### toMouse()

> **toMouse**(): `void`

Defined in: [src/lib/entity/sprite/spriteMotionMove.ts:154](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/spriteMotionMove.ts#L154)

マウスカーソルの位置へ移動する

#### Returns

`void`

#### Implementation of

[`ISpriteMotionMove`](../../../../../type/entity/sprite/ISpriteMotionMove/interfaces/ISpriteMotionMove.md).[`toMouse`](../../../../../type/entity/sprite/ISpriteMotionMove/interfaces/ISpriteMotionMove.md#tomouse)

***

### toRandom()

> **toRandom**(): `void`

Defined in: [src/lib/entity/sprite/spriteMotionMove.ts:139](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/spriteMotionMove.ts#L139)

ステージ上のランダムな位置へ移動する

#### Returns

`void`

#### Implementation of

[`ISpriteMotionMove`](../../../../../type/entity/sprite/ISpriteMotionMove/interfaces/ISpriteMotionMove.md).[`toRandom`](../../../../../type/entity/sprite/ISpriteMotionMove/interfaces/ISpriteMotionMove.md#torandom)

***

### toSprite()

> **toSprite**(`target`): `void`

Defined in: [src/lib/entity/sprite/spriteMotionMove.ts:167](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/spriteMotionMove.ts#L167)

指定したスプライトの位置へ移動する

#### Parameters

##### target

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

{Sprite} - 指定スプライト

#### Returns

`void`

#### Implementation of

[`ISpriteMotionMove`](../../../../../type/entity/sprite/ISpriteMotionMove/interfaces/ISpriteMotionMove.md).[`toSprite`](../../../../../type/entity/sprite/ISpriteMotionMove/interfaces/ISpriteMotionMove.md#tosprite)
