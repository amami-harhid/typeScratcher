# Interface: ISpritePen

Defined in: [src/type/entity/sprite/ISpritePen.ts:6](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/sprite/ISpritePen.ts#L6)

SpritePen

## Properties

### HSVColor

> `readonly` **HSVColor**: [`IPenSpriteHSVColor`](../../pen/IPenSpriteHSVColor/interfaces/IPenSpriteHSVColor.md)

Defined in: [src/type/entity/sprite/ISpritePen.ts:47](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/sprite/ISpritePen.ts#L47)

カラー(HSV)
```ts
 this.Pen.HSVColor.hue = 120;
```

***

### Size

> `readonly` **Size**: [`IPenSpriteSize`](../../pen/IPenSpriteSize/interfaces/IPenSpriteSize.md)

Defined in: [src/type/entity/sprite/ISpritePen.ts:51](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/sprite/ISpritePen.ts#L51)

ペンのサイズ

## Methods

### clear()

> **clear**(): `void`

Defined in: [src/type/entity/sprite/ISpritePen.ts:24](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/sprite/ISpritePen.ts#L24)

ペン描画をクリアする

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [src/type/entity/sprite/ISpritePen.ts:14](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/sprite/ISpritePen.ts#L14)

破棄する

#### Returns

`void`

***

### down()

> **down**(): `void`

Defined in: [src/type/entity/sprite/ISpritePen.ts:32](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/sprite/ISpritePen.ts#L32)

ペンを下げる

#### Returns

`void`

***

### isPrepareDone()

> **isPrepareDone**(): `boolean`

Defined in: [src/type/entity/sprite/ISpritePen.ts:19](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/sprite/ISpritePen.ts#L19)

準備済

#### Returns

`boolean`

***

### prepare()

> **prepare**(): `void`

Defined in: [src/type/entity/sprite/ISpritePen.ts:10](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/sprite/ISpritePen.ts#L10)

準備する

#### Returns

`void`

***

### stamp()

> **stamp**(): `void`

Defined in: [src/type/entity/sprite/ISpritePen.ts:36](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/sprite/ISpritePen.ts#L36)

スプライトをスタンプする

#### Returns

`void`

***

### stampStage()

> **stampStage**(): `void`

Defined in: [src/type/entity/sprite/ISpritePen.ts:40](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/sprite/ISpritePen.ts#L40)

ステージをスタンプする。

#### Returns

`void`

***

### up()

> **up**(): `void`

Defined in: [src/type/entity/sprite/ISpritePen.ts:28](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/sprite/ISpritePen.ts#L28)

ペンを上げる

#### Returns

`void`
