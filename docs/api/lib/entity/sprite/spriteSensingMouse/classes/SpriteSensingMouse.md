# Class: SpriteSensingMouse

Defined in: [src/lib/entity/sprite/spriteSensingMouse.ts:11](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/spriteSensingMouse.ts#L11)

Sprite Sensing(調べる) Mouse

## Implements

- [`ISpriteSensingMouse`](../../../../../type/entity/sprite/ISpriteSensingMouse/interfaces/ISpriteSensingMouse.md)

## Constructors

### Constructor

> **new SpriteSensingMouse**(`entity`): `SpriteSensingMouse`

Defined in: [src/lib/entity/sprite/spriteSensingMouse.ts:18](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/spriteSensingMouse.ts#L18)

**`Internal`**

#### Parameters

##### entity

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

{Sprite}

#### Returns

`SpriteSensingMouse`

## Accessors

### degree

#### Get Signature

> **get** **degree**(): `number`

Defined in: [src/lib/entity/sprite/spriteSensingMouse.ts:54](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/spriteSensingMouse.ts#L54)

マウスカーソルへの向き

##### Returns

`number`

マウスカーソルへの向き

#### Implementation of

[`ISpriteSensingMouse`](../../../../../type/entity/sprite/ISpriteSensingMouse/interfaces/ISpriteSensingMouse.md).[`degree`](../../../../../type/entity/sprite/ISpriteSensingMouse/interfaces/ISpriteSensingMouse.md#degree)

***

### distance

#### Get Signature

> **get** **distance**(): `number`

Defined in: [src/lib/entity/sprite/spriteSensingMouse.ts:48](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/spriteSensingMouse.ts#L48)

距離
使用例：マウスポインターとの距離 
this.Sensing.Distance.mousePointer
使用例：他スプライトとの距離
this.Sensing.Distance.to( otherSprite )

##### Returns

`number`

マウスカーソルまでの距離

#### Implementation of

[`ISpriteSensingMouse`](../../../../../type/entity/sprite/ISpriteSensingMouse/interfaces/ISpriteSensingMouse.md).[`distance`](../../../../../type/entity/sprite/ISpriteSensingMouse/interfaces/ISpriteSensingMouse.md#distance)

***

### isDown

#### Get Signature

> **get** **isDown**(): `boolean`

Defined in: [src/lib/entity/sprite/spriteSensingMouse.ts:26](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/spriteSensingMouse.ts#L26)

マウスが押されていることの判定

##### Returns

`boolean`

- マウスが押されている判定

マウスが押されていることの判定

#### Implementation of

[`ISpriteSensingMouse`](../../../../../type/entity/sprite/ISpriteSensingMouse/interfaces/ISpriteSensingMouse.md).[`isDown`](../../../../../type/entity/sprite/ISpriteSensingMouse/interfaces/ISpriteSensingMouse.md#isdown)

***

### isNotTouching

#### Get Signature

> **get** **isNotTouching**(): `boolean`

Defined in: [src/lib/entity/sprite/spriteSensingMouse.ts:70](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/spriteSensingMouse.ts#L70)

マウスタッチしていないことの判定

##### Returns

`boolean`

***

### isTouching

#### Get Signature

> **get** **isTouching**(): `boolean`

Defined in: [src/lib/entity/sprite/spriteSensingMouse.ts:77](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/spriteSensingMouse.ts#L77)

マウスタッチしていることの判定

##### Returns

`boolean`

マウスタッチしていることの判定

#### Implementation of

[`ISpriteSensingMouse`](../../../../../type/entity/sprite/ISpriteSensingMouse/interfaces/ISpriteSensingMouse.md).[`isTouching`](../../../../../type/entity/sprite/ISpriteSensingMouse/interfaces/ISpriteSensingMouse.md#istouching)

***

### x

#### Get Signature

> **get** **x**(): `number`

Defined in: [src/lib/entity/sprite/spriteSensingMouse.ts:32](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/spriteSensingMouse.ts#L32)

マウス情報(x座標)

##### Returns

`number`

マウス情報( x座標 )

#### Implementation of

[`ISpriteSensingMouse`](../../../../../type/entity/sprite/ISpriteSensingMouse/interfaces/ISpriteSensingMouse.md).[`x`](../../../../../type/entity/sprite/ISpriteSensingMouse/interfaces/ISpriteSensingMouse.md#x)

***

### y

#### Get Signature

> **get** **y**(): `number`

Defined in: [src/lib/entity/sprite/spriteSensingMouse.ts:38](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/spriteSensingMouse.ts#L38)

マウス情報(y座標)

##### Returns

`number`

マウス情報( y座標 )

#### Implementation of

[`ISpriteSensingMouse`](../../../../../type/entity/sprite/ISpriteSensingMouse/interfaces/ISpriteSensingMouse.md).[`y`](../../../../../type/entity/sprite/ISpriteSensingMouse/interfaces/ISpriteSensingMouse.md#y)
