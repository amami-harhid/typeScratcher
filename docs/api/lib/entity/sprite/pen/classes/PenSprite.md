# Class: PenSprite

Defined in: [src/lib/entity/sprite/pen/index.ts:60](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L60)

**`Internal`**

PenSprite

## Implements

- [`IPenSprite`](../../../../../type/entity/sprite/pen/interfaces/IPenSprite.md)

## Constructors

### Constructor

> **new PenSprite**(`sprite`, `debug?`): `PenSprite`

Defined in: [src/lib/entity/sprite/pen/index.ts:83](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L83)

#### Parameters

##### sprite

[`Sprite`](../../classes/Sprite.md)

##### debug?

`boolean` = `false`

#### Returns

`PenSprite`

## Properties

### \_penAttributes

> **\_penAttributes**: [`TPenAttributes`](../../../../../type/pen/type-aliases/TPenAttributes.md)

Defined in: [src/lib/entity/sprite/pen/index.ts:66](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L66)

**`Internal`**

***

### \_penSize

> **\_penSize**: `number`

Defined in: [src/lib/entity/sprite/pen/index.ts:69](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L69)

**`Internal`**

## Accessors

### HSVColor

#### Get Signature

> **get** **HSVColor**(): [`PenSpriteHSVColor`](../penSpriteHSVColor/classes/PenSpriteHSVColor.md)

Defined in: [src/lib/entity/sprite/pen/index.ts:195](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L195)

HSVカラー

##### Returns

[`PenSpriteHSVColor`](../penSpriteHSVColor/classes/PenSpriteHSVColor.md)

HSVカラー

#### Implementation of

[`IPenSprite`](../../../../../type/entity/sprite/pen/interfaces/IPenSprite.md).[`HSVColor`](../../../../../type/entity/sprite/pen/interfaces/IPenSprite.md#hsvcolor)

***

### Size

#### Get Signature

> **get** **Size**(): [`PenSpriteSize`](../penSpriteSize/classes/PenSpriteSize.md)

Defined in: [src/lib/entity/sprite/pen/index.ts:339](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L339)

サイズ

##### Returns

[`PenSpriteSize`](../penSpriteSize/classes/PenSpriteSize.md)

サイズ

#### Implementation of

[`IPenSprite`](../../../../../type/entity/sprite/pen/interfaces/IPenSprite.md).[`Size`](../../../../../type/entity/sprite/pen/interfaces/IPenSprite.md#size)

## Methods

### \_createPen()

> **\_createPen**(): `void`

Defined in: [src/lib/entity/sprite/pen/index.ts:109](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L109)

#### Returns

`void`

***

### changeColor()

> **changeColor**(`idx`, `value`, `limit`): `void`

Defined in: [src/lib/entity/sprite/pen/index.ts:190](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L190)

**`Internal`**

#### Parameters

##### idx

`number`

##### value

`number`

##### limit

`number`

#### Returns

`void`

***

### changePenBrightness()

> **changePenBrightness**(`brightness`): `void`

Defined in: [src/lib/entity/sprite/pen/index.ts:224](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L224)

**`Internal`**

#### Parameters

##### brightness

`number`

#### Returns

`void`

***

### changePenHue()

> **changePenHue**(`hue`): `void`

Defined in: [src/lib/entity/sprite/pen/index.ts:204](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L204)

**`Internal`**

#### Parameters

##### hue

`number`

#### Returns

`void`

***

### changePenSaturation()

> **changePenSaturation**(`saturation`): `void`

Defined in: [src/lib/entity/sprite/pen/index.ts:214](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L214)

**`Internal`**

#### Parameters

##### saturation

`number`

#### Returns

`void`

***

### changePenSize()

> **changePenSize**(`size`): `void`

Defined in: [src/lib/entity/sprite/pen/index.ts:349](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L349)

**`Internal`**

#### Parameters

##### size

`number`

#### Returns

`void`

***

### changePenTransparency()

> **changePenTransparency**(`transparency`): `void`

Defined in: [src/lib/entity/sprite/pen/index.ts:241](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L241)

**`Internal`**

#### Parameters

##### transparency

`number`

#### Returns

`void`

***

### convertAttribues2Rgb()

> **convertAttribues2Rgb**(): `void`

Defined in: [src/lib/entity/sprite/pen/index.ts:166](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L166)

HSV のPenAttirubtesをRGBのPenAttributesに変換する

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [src/lib/entity/sprite/pen/index.ts:116](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L116)

ペンを破棄する

#### Returns

`void`

#### Implementation of

[`IPenSprite`](../../../../../type/entity/sprite/pen/interfaces/IPenSprite.md).[`dispose`](../../../../../type/entity/sprite/pen/interfaces/IPenSprite.md#dispose)

***

### drawBounds()

> **drawBounds**(): `void`

Defined in: [src/lib/entity/sprite/pen/index.ts:272](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L272)

スプライトの矩形をラインで描く

#### Returns

`void`

#### Implementation of

[`IPenSprite`](../../../../../type/entity/sprite/pen/interfaces/IPenSprite.md).[`drawBounds`](../../../../../type/entity/sprite/pen/interfaces/IPenSprite.md#drawbounds)

***

### drawLine()

> **drawLine**(): `void`

Defined in: [src/lib/entity/sprite/pen/index.ts:304](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L304)

#### Returns

`void`

***

### drawPoint()

> **drawPoint**(): `void`

Defined in: [src/lib/entity/sprite/pen/index.ts:327](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L327)

**`Internal`**

#### Returns

`void`

***

### isPenDown()

> **isPenDown**(): `boolean`

Defined in: [src/lib/entity/sprite/pen/index.ts:159](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L159)

ペンが下がっている判定

#### Returns

`boolean`

#### Implementation of

[`IPenSprite`](../../../../../type/entity/sprite/pen/interfaces/IPenSprite.md).[`isPenDown`](../../../../../type/entity/sprite/pen/interfaces/IPenSprite.md#ispendown)

***

### isPrepareDone()

> **isPrepareDone**(): `boolean`

Defined in: [src/lib/entity/sprite/pen/index.ts:121](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L121)

ペン準備済

#### Returns

`boolean`

#### Implementation of

[`IPenSprite`](../../../../../type/entity/sprite/pen/interfaces/IPenSprite.md).[`isPrepareDone`](../../../../../type/entity/sprite/pen/interfaces/IPenSprite.md#ispreparedone)

***

### penClear()

> **penClear**(): `void`

Defined in: [src/lib/entity/sprite/pen/index.ts:139](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L139)

ペン描画をクリアする

#### Returns

`void`

#### Implementation of

[`IPenSprite`](../../../../../type/entity/sprite/pen/interfaces/IPenSprite.md).[`penClear`](../../../../../type/entity/sprite/pen/interfaces/IPenSprite.md#penclear)

***

### penDown()

> **penDown**(): `void`

Defined in: [src/lib/entity/sprite/pen/index.ts:152](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L152)

ペンを下げる

#### Returns

`void`

#### Implementation of

[`IPenSprite`](../../../../../type/entity/sprite/pen/interfaces/IPenSprite.md).[`penDown`](../../../../../type/entity/sprite/pen/interfaces/IPenSprite.md#pendown)

***

### penUp()

> **penUp**(): `void`

Defined in: [src/lib/entity/sprite/pen/index.ts:146](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L146)

ペンを上げる

#### Returns

`void`

#### Implementation of

[`IPenSprite`](../../../../../type/entity/sprite/pen/interfaces/IPenSprite.md).[`penUp`](../../../../../type/entity/sprite/pen/interfaces/IPenSprite.md#penup)

***

### prepare()

> **prepare**(): `void`

Defined in: [src/lib/entity/sprite/pen/index.ts:127](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L127)

ペンを準備する

#### Returns

`void`

#### Implementation of

[`IPenSprite`](../../../../../type/entity/sprite/pen/interfaces/IPenSprite.md).[`prepare`](../../../../../type/entity/sprite/pen/interfaces/IPenSprite.md#prepare)

***

### setColor()

> **setColor**(`idx`, `value`): `void`

Defined in: [src/lib/entity/sprite/pen/index.ts:182](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L182)

**`Internal`**

#### Parameters

##### idx

`number`

##### value

`number`

#### Returns

`void`

***

### setPenBrightness()

> **setPenBrightness**(`brightness`): `void`

Defined in: [src/lib/entity/sprite/pen/index.ts:219](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L219)

**`Internal`**

#### Parameters

##### brightness

`number`

#### Returns

`void`

***

### setPenHue()

> **setPenHue**(`hue`): `void`

Defined in: [src/lib/entity/sprite/pen/index.ts:199](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L199)

**`Internal`**

#### Parameters

##### hue

`number`

#### Returns

`void`

***

### setPenSaturation()

> **setPenSaturation**(`saturation`): `void`

Defined in: [src/lib/entity/sprite/pen/index.ts:209](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L209)

**`Internal`**

#### Parameters

##### saturation

`number`

#### Returns

`void`

***

### setPenSize()

> **setPenSize**(`size`): `void`

Defined in: [src/lib/entity/sprite/pen/index.ts:343](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L343)

**`Internal`**

#### Parameters

##### size

`number`

#### Returns

`void`

***

### setPenTransparency()

> **setPenTransparency**(`transparency`): `void`

Defined in: [src/lib/entity/sprite/pen/index.ts:229](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L229)

**`Internal`**

#### Parameters

##### transparency

`number`

#### Returns

`void`

***

### stamp()

> **stamp**(): `void`

Defined in: [src/lib/entity/sprite/pen/index.ts:248](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L248)

スプライトのスタンプをとる

#### Returns

`void`

#### Implementation of

[`IPenSprite`](../../../../../type/entity/sprite/pen/interfaces/IPenSprite.md).[`stamp`](../../../../../type/entity/sprite/pen/interfaces/IPenSprite.md#stamp)

***

### stampStage()

> **stampStage**(): `void`

Defined in: [src/lib/entity/sprite/pen/index.ts:262](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L262)

ステージのスタンプを取る（オリジナル機能）

#### Returns

`void`

#### Implementation of

[`IPenSprite`](../../../../../type/entity/sprite/pen/interfaces/IPenSprite.md).[`stampStage`](../../../../../type/entity/sprite/pen/interfaces/IPenSprite.md#stampstage)

***

### update()

> **update**(): `void`

Defined in: [src/lib/entity/sprite/pen/index.ts:356](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/pen/index.ts#L356)

更新

#### Returns

`void`

#### Implementation of

[`IPenSprite`](../../../../../type/entity/sprite/pen/interfaces/IPenSprite.md).[`update`](../../../../../type/entity/sprite/pen/interfaces/IPenSprite.md#update)
