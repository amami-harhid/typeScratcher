# Class: SpriteLayer

Defined in: [src/lib/entity/sprite/spriteLayer.ts:6](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteLayer.ts#L6)

階層

## Constructors

### Constructor

> **new SpriteLayer**(`entity`): `SpriteLayer`

Defined in: [src/lib/entity/sprite/spriteLayer.ts:13](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteLayer.ts#L13)

**`Internal`**

#### Parameters

##### entity

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

{Sprite}

#### Returns

`SpriteLayer`

## Methods

### goBackwardLayers()

> **goBackwardLayers**(`nLayer`): `void`

Defined in: [src/lib/entity/sprite/spriteLayer.ts:43](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteLayer.ts#L43)

奥に下げる

#### Parameters

##### nLayer

`number`

{number} - 階層数

#### Returns

`void`

***

### goForwardLayers()

> **goForwardLayers**(`nLayer`): `void`

Defined in: [src/lib/entity/sprite/spriteLayer.ts:36](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteLayer.ts#L36)

**`Internal`**

手前に出す

#### Parameters

##### nLayer

`number`

{number} - 階層数

#### Returns

`void`

***

### gotoBack()

> **gotoBack**(): `void`

Defined in: [src/lib/entity/sprite/spriteLayer.ts:28](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteLayer.ts#L28)

**`Internal`**

最背面にする

#### Returns

`void`

***

### gotoFront()

> **gotoFront**(): `void`

Defined in: [src/lib/entity/sprite/spriteLayer.ts:21](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteLayer.ts#L21)

**`Internal`**

最前面にする

#### Returns

`void`
