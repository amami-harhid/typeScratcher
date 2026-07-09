# Interface: IPenSprite

Defined in: [src/type/entity/sprite/pen/index.ts:7](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/pen/index.ts#L7)

**`Internal`**

PenSprite

## Properties

### HSVColor

> `readonly` **HSVColor**: [`IPenSpriteHSVColor`](../IPenSpriteHSVColor/interfaces/IPenSpriteHSVColor.md)

Defined in: [src/type/entity/sprite/pen/index.ts:49](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/pen/index.ts#L49)

HSVカラー

***

### Size

> `readonly` **Size**: [`IPenSpriteSize`](../IPenSpriteSize/interfaces/IPenSpriteSize.md)

Defined in: [src/type/entity/sprite/pen/index.ts:62](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/pen/index.ts#L62)

サイズ

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [src/type/entity/sprite/pen/index.ts:22](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/pen/index.ts#L22)

ペンを破棄する

#### Returns

`void`

***

### drawBounds()

> **drawBounds**(): `void`

Defined in: [src/type/entity/sprite/pen/index.ts:66](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/pen/index.ts#L66)

スプライトの矩形をラインで描く

#### Returns

`void`

***

### isPenDown()

> **isPenDown**(): `boolean`

Defined in: [src/type/entity/sprite/pen/index.ts:44](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/pen/index.ts#L44)

ペンが下がっている判定

#### Returns

`boolean`

***

### isPrepareDone()

> **isPrepareDone**(): `boolean`

Defined in: [src/type/entity/sprite/pen/index.ts:27](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/pen/index.ts#L27)

ペン準備済

#### Returns

`boolean`

***

### penClear()

> **penClear**(): `void`

Defined in: [src/type/entity/sprite/pen/index.ts:32](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/pen/index.ts#L32)

ペン描画をクリアする

#### Returns

`void`

***

### penDown()

> **penDown**(): `void`

Defined in: [src/type/entity/sprite/pen/index.ts:40](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/pen/index.ts#L40)

ペンを下げる

#### Returns

`void`

***

### penUp()

> **penUp**(): `void`

Defined in: [src/type/entity/sprite/pen/index.ts:36](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/pen/index.ts#L36)

ペンを上げる

#### Returns

`void`

***

### prepare()

> **prepare**(): `void`

Defined in: [src/type/entity/sprite/pen/index.ts:17](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/pen/index.ts#L17)

ペンを準備する

#### Returns

`void`

***

### stamp()

> **stamp**(): `void`

Defined in: [src/type/entity/sprite/pen/index.ts:54](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/pen/index.ts#L54)

スタンプ

#### Returns

`void`

***

### stampStage()

> **stampStage**(): `void`

Defined in: [src/type/entity/sprite/pen/index.ts:58](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/pen/index.ts#L58)

ステージをスタンプする

#### Returns

`void`

***

### update()

> **update**(): `void`

Defined in: [src/type/entity/sprite/pen/index.ts:12](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/pen/index.ts#L12)

更新

#### Returns

`void`
