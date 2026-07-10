# Class: SpriteSensingColor

Defined in: [src/lib/entity/sprite/spriteSensingColor.ts:8](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/sprite/spriteSensingColor.ts#L8)

Sprite Sensing(調べる) Color

## Implements

- [`ISpriteSensingColor`](../../../../../type/entity/sprite/ISpriteSensingColor/interfaces/ISpriteSensingColor.md)

## Constructors

### Constructor

> **new SpriteSensingColor**(`entity`): `SpriteSensingColor`

Defined in: [src/lib/entity/sprite/spriteSensingColor.ts:14](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/sprite/spriteSensingColor.ts#L14)

**`Internal`**

#### Parameters

##### entity

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

{ISprite}

#### Returns

`SpriteSensingColor`

## Methods

### isTouching()

> **isTouching**(`targetColor`): `boolean`

Defined in: [src/lib/entity/sprite/spriteSensingColor.ts:22](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/sprite/spriteSensingColor.ts#L22)

指定した色に触れたことを判定する

#### Parameters

##### targetColor

`string`

{string} - 色,先頭#,16進数

#### Returns

`boolean`

#### Implementation of

[`ISpriteSensingColor`](../../../../../type/entity/sprite/ISpriteSensingColor/interfaces/ISpriteSensingColor.md).[`isTouching`](../../../../../type/entity/sprite/ISpriteSensingColor/interfaces/ISpriteSensingColor.md#istouching)

***

### isTouchingBy()

> **isTouchingBy**(`mask`, `target`): `boolean`

Defined in: [src/lib/entity/sprite/spriteSensingColor.ts:37](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/sprite/spriteSensingColor.ts#L37)

指定した色(target)に自身の色(mask)が触れたことを判定する

#### Parameters

##### mask

`string`

{string} - 色,先頭#,16進数

##### target

`string`

{string} - 色,先頭#,16進数

#### Returns

`boolean`

#### Implementation of

[`ISpriteSensingColor`](../../../../../type/entity/sprite/ISpriteSensingColor/interfaces/ISpriteSensingColor.md).[`isTouchingBy`](../../../../../type/entity/sprite/ISpriteSensingColor/interfaces/ISpriteSensingColor.md#istouchingby)
