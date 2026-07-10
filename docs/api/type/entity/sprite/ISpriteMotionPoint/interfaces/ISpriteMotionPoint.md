# Interface: ISpriteMotionPoint

Defined in: [src/type/entity/sprite/ISpriteMotionPoint.ts:5](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/type/entity/sprite/ISpriteMotionPoint.ts#L5)

スプライトの動き（向かせる）

## Methods

### toMouse()

> **toMouse**(): `void`

Defined in: [src/type/entity/sprite/ISpriteMotionPoint.ts:13](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/type/entity/sprite/ISpriteMotionPoint.ts#L13)

マウスカーソルへ向く(ステージ外でもOK)

#### Returns

`void`

***

### toMouseInStage()

> **toMouseInStage**(): `void`

Defined in: [src/type/entity/sprite/ISpriteMotionPoint.ts:9](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/type/entity/sprite/ISpriteMotionPoint.ts#L9)

マウスカーソルへ向く

#### Returns

`void`

***

### toRandom()

> **toRandom**(): `void`

Defined in: [src/type/entity/sprite/ISpriteMotionPoint.ts:22](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/type/entity/sprite/ISpriteMotionPoint.ts#L22)

どこかを向く

#### Returns

`void`

***

### toTarget()

> **toTarget**(`target`): `void`

Defined in: [src/type/entity/sprite/ISpriteMotionPoint.ts:18](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/type/entity/sprite/ISpriteMotionPoint.ts#L18)

ターゲットの位置へ向く

#### Parameters

##### target

[`ISprite`](../../interfaces/ISprite.md)

{Sprite} - ターゲット

#### Returns

`void`
