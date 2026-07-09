# Class: DragSprite

Defined in: [src/lib/entity/sprite/drag/index.ts:10](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/drag/index.ts#L10)

DragSprite

## Constructors

### Constructor

> **new DragSprite**(`sprite`): `DragSprite`

Defined in: [src/lib/entity/sprite/drag/index.ts:39](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/drag/index.ts#L39)

**`Internal`**

#### Parameters

##### sprite

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

#### Returns

`DragSprite`

## Properties

### draggable

> **draggable**: `boolean`

Defined in: [src/lib/entity/sprite/drag/index.ts:21](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/drag/index.ts#L21)

draggable {boolean} - trueのときDragできる。デフォルト値はfalse.

```ts
  sprite.dragSprite.draggable = true;
```

***

### dragging

> **dragging**: `boolean`

Defined in: [src/lib/entity/sprite/drag/index.ts:33](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/drag/index.ts#L33)

dragging {boolean} - Drag中のときTrue.

```ts
  if( sprite.dragSprite.dragging === true ) {
      console.log('Drag中です');
  }
```

***

### PROPERTIES\_CHANGE

> `static` **PROPERTIES\_CHANGE**: `string` = `"properties_change"`

Defined in: [src/lib/entity/sprite/drag/index.ts:12](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/drag/index.ts#L12)

**`Internal`**

## Methods

### dragComplete()

> **dragComplete**(): `void`

Defined in: [src/lib/entity/sprite/drag/index.ts:87](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/drag/index.ts#L87)

**`Internal`**

ドラッグ完了の処理（初期化としても使う）

#### Returns

`void`

***

### dragger()

> **dragger**(): `Generator`

Defined in: [src/lib/entity/sprite/drag/index.ts:129](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/drag/index.ts#L129)

**`Internal`**

マウスダウンしている間、スプライト画像をドラッグする

#### Returns

`Generator`

***

### dragStart()

> **dragStart**(): `void`

Defined in: [src/lib/entity/sprite/drag/index.ts:50](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/drag/index.ts#L50)

**`Internal`**

ドラッグ開始処理

#### Returns

`void`

***

### update()

> **update**(): `Promise`\<`void`\>

Defined in: [src/lib/entity/sprite/drag/index.ts:100](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/drag/index.ts#L100)

**`Internal`**

Update処理.
SpriteのUpdateの中で呼ばれる前提です
(1) ドラッグ開始したら スプライトの画像を取り出しImgタグを追加し、スプライトを非表示にする
(2) ドラッグ終了したら Imgタグを削除し スプライトを表示する。

#### Returns

`Promise`\<`void`\>
