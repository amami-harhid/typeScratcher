# Class: Render

Defined in: [src/lib/render/index.ts:9](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/render/index.ts#L9)

## Constructors

### Constructor

> **new Render**(): `Render`

Defined in: [src/lib/render/index.ts:53](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/render/index.ts#L53)

#### Returns

`Render`

## Properties

### stageHeight

> **stageHeight**: `number` = `0`

Defined in: [src/lib/render/index.ts:52](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/render/index.ts#L52)

***

### stageWidth

> **stageWidth**: `number` = `0`

Defined in: [src/lib/render/index.ts:51](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/render/index.ts#L51)

## Accessors

### renderer

#### Get Signature

> **get** **renderer**(): [`IRenderWebGL`](../../../type/render/IRenderWebGL/interfaces/IRenderWebGL.md)

Defined in: [src/lib/render/index.ts:98](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/render/index.ts#L98)

Rendererを取得する

##### Returns

[`IRenderWebGL`](../../../type/render/IRenderWebGL/interfaces/IRenderWebGL.md)

***

### H

#### Get Signature

> **get** `static` **H**(): `number`

Defined in: [src/lib/render/index.ts:45](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/render/index.ts#L45)

ステージの縦ピクセル数(CSSピクセル)

##### Returns

`number`

***

### W

#### Get Signature

> **get** `static` **W**(): `number`

Defined in: [src/lib/render/index.ts:19](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/render/index.ts#L19)

ステージの横ピクセル数(CSSピクセル)

##### Returns

`number`

***

### WHRate

#### Get Signature

> **get** `static` **WHRate**(): `number`

Defined in: [src/lib/render/index.ts:13](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/render/index.ts#L13)

ステージ縦横比(縦÷高さの率)

##### Returns

`number`

## Methods

### createDrawable()

> **createDrawable**(`layer`): `number`

Defined in: [src/lib/render/index.ts:87](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/render/index.ts#L87)

#### Parameters

##### layer

[`StageLayeringValue`](../../../type/entity/stage/CStageLayering/type-aliases/StageLayeringValue.md)

#### Returns

`number`

***

### createRenderer()

> **createRenderer**(`canvas`): `void`

Defined in: [src/lib/render/index.ts:73](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/render/index.ts#L73)

Rendererを作成する

#### Parameters

##### canvas

`HTMLCanvasElement`

#### Returns

`void`

***

### stageResize()

> **stageResize**(`w?`, `h?`): `void`

Defined in: [src/lib/render/index.ts:61](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/render/index.ts#L61)

ステージをリサイズする

#### Parameters

##### w?

`number` = `Render.W`

{number} - 横

##### h?

`number` = `Render.H`

{number} - 縦

#### Returns

`void`
