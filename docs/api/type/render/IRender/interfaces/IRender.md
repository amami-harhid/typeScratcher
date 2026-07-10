# Interface: IRender

Defined in: [src/type/render/IRender.ts:28](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/render/IRender.ts#L28)

## Properties

### renderer

> `readonly` **renderer**: [`IRenderWebGL`](../../IRenderWebGL/interfaces/IRenderWebGL.md)

Defined in: [src/type/render/IRender.ts:57](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/render/IRender.ts#L57)

Rendererを取得する

***

### stageHeight

> `readonly` **stageHeight**: `number`

Defined in: [src/type/render/IRender.ts:42](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/render/IRender.ts#L42)

ステージ高さ

***

### stageWidth

> `readonly` **stageWidth**: `number`

Defined in: [src/type/render/IRender.ts:38](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/render/IRender.ts#L38)

ステージ幅

## Methods

### createDrawable()

> **createDrawable**(`layer`): `number`

Defined in: [src/type/render/IRender.ts:53](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/render/IRender.ts#L53)

Drawableを作成する

#### Parameters

##### layer

[`StageLayeringValue`](../../../entity/stage/CStageLayering/type-aliases/StageLayeringValue.md)

{StageLayering} - layer name

#### Returns

`number`

- drawableID.

***

### createRenderer()

> **createRenderer**(`canvas`): `void`

Defined in: [src/type/render/IRender.ts:47](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/render/IRender.ts#L47)

Rendererを作成する

#### Parameters

##### canvas

`HTMLCanvasElement`

#### Returns

`void`

***

### stageResize()

> **stageResize**(`w?`, `h?`): `void`

Defined in: [src/type/render/IRender.ts:34](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/render/IRender.ts#L34)

ステージをリサイズする

#### Parameters

##### w?

`number`

{number} - 横

##### h?

`number`

{number} - 縦

#### Returns

`void`
