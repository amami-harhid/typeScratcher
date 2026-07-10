# Class: SpriteMotionPoint

Defined in: [src/lib/entity/sprite/spriteMotionPoint.ts:8](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/sprite/spriteMotionPoint.ts#L8)

スプライトの動き（向かせる）

## Implements

- [`ISpriteMotionPoint`](../../../../../type/entity/sprite/ISpriteMotionPoint/interfaces/ISpriteMotionPoint.md)

## Constructors

### Constructor

> **new SpriteMotionPoint**(`entity`): `SpriteMotionPoint`

Defined in: [src/lib/entity/sprite/spriteMotionPoint.ts:14](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/sprite/spriteMotionPoint.ts#L14)

**`Internal`**

#### Parameters

##### entity

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

{ISprite}

#### Returns

`SpriteMotionPoint`

## Methods

### toMouse()

> **toMouse**(): `void`

Defined in: [src/lib/entity/sprite/spriteMotionPoint.ts:25](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/sprite/spriteMotionPoint.ts#L25)

マウスカーソルへ向く(ステージ外でもOK)

#### Returns

`void`

#### Implementation of

[`ISpriteMotionPoint`](../../../../../type/entity/sprite/ISpriteMotionPoint/interfaces/ISpriteMotionPoint.md).[`toMouse`](../../../../../type/entity/sprite/ISpriteMotionPoint/interfaces/ISpriteMotionPoint.md#tomouse)

***

### toMouseInStage()

> **toMouseInStage**(): `void`

Defined in: [src/lib/entity/sprite/spriteMotionPoint.ts:20](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/sprite/spriteMotionPoint.ts#L20)

マウスカーソルへ向く

#### Returns

`void`

#### Implementation of

[`ISpriteMotionPoint`](../../../../../type/entity/sprite/ISpriteMotionPoint/interfaces/ISpriteMotionPoint.md).[`toMouseInStage`](../../../../../type/entity/sprite/ISpriteMotionPoint/interfaces/ISpriteMotionPoint.md#tomouseinstage)

***

### toRandom()

> **toRandom**(): `void`

Defined in: [src/lib/entity/sprite/spriteMotionPoint.ts:55](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/sprite/spriteMotionPoint.ts#L55)

どこかを向く

#### Returns

`void`

#### Implementation of

[`ISpriteMotionPoint`](../../../../../type/entity/sprite/ISpriteMotionPoint/interfaces/ISpriteMotionPoint.md).[`toRandom`](../../../../../type/entity/sprite/ISpriteMotionPoint/interfaces/ISpriteMotionPoint.md#torandom)

***

### toTarget()

> **toTarget**(`target`): `void`

Defined in: [src/lib/entity/sprite/spriteMotionPoint.ts:41](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/sprite/spriteMotionPoint.ts#L41)

ターゲットの位置へ向く

#### Parameters

##### target

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

{Sprite} - ターゲット

#### Returns

`void`

#### Implementation of

[`ISpriteMotionPoint`](../../../../../type/entity/sprite/ISpriteMotionPoint/interfaces/ISpriteMotionPoint.md).[`toTarget`](../../../../../type/entity/sprite/ISpriteMotionPoint/interfaces/ISpriteMotionPoint.md#totarget)
