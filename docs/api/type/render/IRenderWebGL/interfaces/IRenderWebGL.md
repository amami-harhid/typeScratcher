# Interface: IRenderWebGL

Defined in: [src/type/render/IRenderWebGL.ts:25](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L25)

## Properties

### \_allDrawables

> **\_allDrawables**: [`IDrawable`](../../IDrawable/interfaces/IDrawable.md)[]

Defined in: [src/type/render/IRenderWebGL.ts:27](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L27)

全てのDrawableの配列

***

### \_allSkins

> **\_allSkins**: [`ISkin`](../../ISkin/interfaces/ISkin.md)[]

Defined in: [src/type/render/IRenderWebGL.ts:29](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L29)

全てのskinの配列

***

### \_backgroundColor4f

> **\_backgroundColor4f**: `number`[]

Defined in: [src/type/render/IRenderWebGL.ts:30](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L30)

***

### \_nextSkinId

> **\_nextSkinId**: `number`

Defined in: [src/type/render/IRenderWebGL.ts:34](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L34)

next skin id

***

### gl

> **gl**: `WebGLRenderingContext`

Defined in: [src/type/render/IRenderWebGL.ts:32](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L32)

canvas context

## Methods

### createBitmapSkin()

> **createBitmapSkin**(`bitmapData`, `costumeResolution?`, `rotationCenter?`): `number`

Defined in: [src/type/render/IRenderWebGL.ts:41](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L41)

Create a new bitmap skin from a snapshot of the provided bitmap data

#### Parameters

##### bitmapData

`HTMLImageElement`

{HTMLImageElement} - new contents for this skin.

##### costumeResolution?

`number`

{number} - The resolution to use for this bitmap

##### rotationCenter?

`TwoNumberArray`

{TPositionArray} - rotation center of the skin

#### Returns

`number`

***

### createDrawable()

> **createDrawable**(`group`): `number`

Defined in: [src/type/render/IRenderWebGL.ts:91](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L91)

Drawableを作成する

#### Parameters

##### group

[`StageLayeringValue`](../../../entity/stage/CStageLayering/type-aliases/StageLayeringValue.md)

{StageLayeringValue}

#### Returns

`number`

- drawableID

***

### createPenSkin()

> **createPenSkin**(): `number`

Defined in: [src/type/render/IRenderWebGL.ts:45](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L45)

Create a new PenSkin - a skin which implements a Scratch pen layer.

#### Returns

`number`

***

### createSVGSkin()

> **createSVGSkin**(`svgData`, `rotationCenter?`): `number`

Defined in: [src/type/render/IRenderWebGL.ts:51](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L51)

Create a new SVG skin.

#### Parameters

##### svgData

`string`

{string} - new SVG to use.

##### rotationCenter?

`TwoNumberArray`

{TPositionArray} - rotation center of the skin

#### Returns

`number`

***

### createTextSkin()

> **createTextSkin**(`type`, `text`, `pointsLeft`): `number`

Defined in: [src/type/render/IRenderWebGL.ts:99](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L99)

#### Parameters

##### type

`string`

{string} - "say" or "think"

##### text

`string`

{string} - the text for the bubble

##### pointsLeft

`boolean`

{boolean} - which side the bubble is pointing

#### Returns

`number`

- skinID

***

### destroyDrawable()

> **destroyDrawable**(`drawableID`, `group`): `void`

Defined in: [src/type/render/IRenderWebGL.ts:105](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L105)

#### Parameters

##### drawableID

`number`

{number} - drawable id

##### group

[`StageLayeringValue`](../../../entity/stage/CStageLayering/type-aliases/StageLayeringValue.md)

{StageLayeringValue} - Group name that the drawable belongs to.

#### Returns

`void`

***

### destroySkin()

> **destroySkin**(`skinId`): `void`

Defined in: [src/type/render/IRenderWebGL.ts:111](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L111)

Destroy an existing skin. 
Do not use the skin or its ID after calling this.

#### Parameters

##### skinId

`number`

{number} - skin id.

#### Returns

`void`

***

### draw()

> **draw**(): `void`

Defined in: [src/type/render/IRenderWebGL.ts:115](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L115)

Draw all current drawables and present the frame on the canvas

#### Returns

`void`

***

### extractDrawableScreenSpace()

> **extractDrawableScreenSpace**(`drawableID`): `object`

Defined in: [src/type/render/IRenderWebGL.ts:56](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L56)

Return a drawable's pixel data and bounds in screen space.

#### Parameters

##### drawableID

`number`

{number}

#### Returns

`object`

##### height

> **height**: `number`

##### imageData

> **imageData**: `ImageData`

##### width

> **width**: `number`

##### x

> **x**: `number`

##### y

> **y**: `number`

***

### getBounds()

> **getBounds**(`drawableID`): [`TBounds`](../../../common/typeCommon/type-aliases/TBounds.md)

Defined in: [src/type/render/IRenderWebGL.ts:62](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L62)

Bounds 取得

#### Parameters

##### drawableID

`number`

{ number }

#### Returns

[`TBounds`](../../../common/typeCommon/type-aliases/TBounds.md)

***

### getBoundsForBubble()

> **getBoundsForBubble**(`drawableID`): [`TBounds`](../../../common/typeCommon/type-aliases/TBounds.md)

Defined in: [src/type/render/IRenderWebGL.ts:68](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L68)

Get the precise bounds for a Drawable around the top slice.

#### Parameters

##### drawableID

`number`

{number}

#### Returns

[`TBounds`](../../../common/typeCommon/type-aliases/TBounds.md)

- Bounds for a tight box around the Drawable top slice.

***

### getCurrentSkinSize()

> **getCurrentSkinSize**(`drawableID`): `number`[]

Defined in: [src/type/render/IRenderWebGL.ts:74](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L74)

Get the current skin (costume) size of a Drawable.

#### Parameters

##### drawableID

`number`

{number}

#### Returns

`number`[]

- Skin size, width and height.

***

### getFencedPositionOfDrawable()

> **getFencedPositionOfDrawable**(`drawableID`, `position`): `TwoNumberArray`

Defined in: [src/type/render/IRenderWebGL.ts:122](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L122)

Update the position object's x & y members to keep the drawable fenced in view.

#### Parameters

##### drawableID

`number`

{number} - the id of the Drawable to update.

##### position

`TwoNumberArray`

{TPositionArray} - position to be fenced - An array of type [x, y]

#### Returns

`TwoNumberArray`

- The fenced position as an array [x, y]

***

### getNativeSize()

> **getNativeSize**(): `number`[]

Defined in: [src/type/render/IRenderWebGL.ts:79](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L79)

get native size

#### Returns

`number`[]

- the "native" size of the stage, which is used for pen, query renders, etc.

***

### getS3Skin()

> **getS3Skin**(`skinId`): [`IMonitorSkin`](../../../entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md)

Defined in: [src/type/render/IRenderWebGL.ts:84](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L84)

モニター用スキンを取得する

#### Parameters

##### skinId

`number`

{number}

#### Returns

[`IMonitorSkin`](../../../entity/monitor/IMonitorSkin/interfaces/IMonitorSkin.md)

***

### isTouchingColor()

> **isTouchingColor**(`drawableID`, `color3b`, `mask3b?`): `boolean`

Defined in: [src/type/render/IRenderWebGL.ts:129](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L129)

#### Parameters

##### drawableID

`number`

{number} - The ID of the Drawable to check.

##### color3b

[`RGBColorArray`](../../../util/cast/type-aliases/RGBColorArray.md)

{number[]} - Test if the Drawable is touching this color.

##### mask3b?

[`RGBColorArray`](../../../util/cast/type-aliases/RGBColorArray.md)

{number[]} - Optionally mask the check to this part of Drawable.

#### Returns

`boolean`

***

### isTouchingDrawables()

> **isTouchingDrawables**(`drawableID`, `candidateIDs?`): `boolean`

Defined in: [src/type/render/IRenderWebGL.ts:135](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L135)

Check if a particular Drawable is touching any in a set of Drawables.

#### Parameters

##### drawableID

`number`

{number} - The ID of the Drawable to check.

##### candidateIDs?

`number`[]

{number[]} - The Drawable IDs to check, otherwise all visible drawables in the renderer

#### Returns

`boolean`

***

### penClear()

> **penClear**(`penSkinID`): `void`

Defined in: [src/type/render/IRenderWebGL.ts:140](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L140)

Clear a pen layer.

#### Parameters

##### penSkinID

`number`

{number}

#### Returns

`void`

***

### penLine()

> **penLine**(`penSkinID`, `penAttributes`, `x0`, `y0`, `x1`, `y1`): `void`

Defined in: [src/type/render/IRenderWebGL.ts:150](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L150)

Draw a line on a pen layer.

#### Parameters

##### penSkinID

`number`

{number} - the unique ID of a Pen Skin.

##### penAttributes

[`TPenAttributes`](../../../pen/type-aliases/TPenAttributes.md)

{IPenAttributes} - how the line should be drawn.

##### x0

`number`

{number} - the X coordinate of the beginning of the line.

##### y0

`number`

{number} - the Y coordinate of the beginning of the line.

##### x1

`number`

{number} - the X coordinate of the end of the line.

##### y1

`number`

{number} - the Y coordinate of the end of the line.

#### Returns

`void`

***

### penPoint()

> **penPoint**(`penSkinID`, `penAttributes`, `x`, `y`): `void`

Defined in: [src/type/render/IRenderWebGL.ts:158](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L158)

Draw a point on a pen layer.

#### Parameters

##### penSkinID

`number`

{number} - the unique ID of a Pen Skin.

##### penAttributes

[`TPenAttributes`](../../../pen/type-aliases/TPenAttributes.md)

{IPenAttributes} - how the line should be drawn.

##### x

`number`

{number} - the X coordinate of the point to draw.

##### y

`number`

{number} - the Y coordinate of the point to draw.

#### Returns

`void`

***

### penStamp()

> **penStamp**(`penSkinID`, `stampID`): `void`

Defined in: [src/type/render/IRenderWebGL.ts:164](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L164)

Stamp a Drawable onto a pen layer.

#### Parameters

##### penSkinID

`number`

{number} - the unique ID of a Pen Skin.

##### stampID

`number`

{number} - the unique ID of the Drawable to use as the stamp.

#### Returns

`void`

***

### pick()

> **pick**(`centerX`, `centerY`, `touchWidth?`, `touchHeight?`, `candidateIDs?`): `number` \| `boolean`

Defined in: [src/type/render/IRenderWebGL.ts:177](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L177)

Detect which sprite, if any, is at the given location.
This function will pick all drawables that are visible,
unless specific candidate drawable IDs are provided.
Will not select hidden / ghosted sprites.

#### Parameters

##### centerX

`number`

{number} - The client x coordinate of the picking location.

##### centerY

`number`

{number} - The client y coordinate of the picking location.

##### touchWidth?

`number`

{number} - The client width of the touch event

##### touchHeight?

`number`

{number} - The client height of the touch event

##### candidateIDs?

`number`[]

{number[]} - The Drawable IDs to pick from, otherwise all visible drawables.

#### Returns

`number` \| `boolean`

- The ID of the topmost Drawable under the picking location.

***

### resize()

> **resize**(`w`, `h`): `void`

Defined in: [src/type/render/IRenderWebGL.ts:183](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L183)

ステージをリサイズする

#### Parameters

##### w

`number`

{number} - 横

##### h

`number`

{number} - 縦

#### Returns

`void`

***

### s3CreateMonitorSkin()

> **s3CreateMonitorSkin**(`drawableID`, `label`): `number`

Defined in: [src/type/render/IRenderWebGL.ts:190](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L190)

モニター用スキンを作成する

#### Parameters

##### drawableID

`number`

drawable id.

##### label

`string`

layer name.

#### Returns

`number`

- skin id.

***

### setBackgroundColor()

> **setBackgroundColor**(`red`, `green`, `blue`): `void`

Defined in: [src/type/render/IRenderWebGL.ts:200](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L200)

Set the background color for the stage
The stage will be cleared with this color each frame
red, green, blue  0 ～ 1.0

#### Parameters

##### red

`number`

##### green

`number`

##### blue

`number`

#### Returns

`void`

***

### setDrawableOrder()

> **setDrawableOrder**(`drawableID`, `order`, `group`, `optIsRelative`, `optMin?`): `void`

Defined in: [src/type/render/IRenderWebGL.ts:212](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L212)

Set a drawable's order in the drawable list (effectively, z/layer).
Can be used to move drawables to absolute positions in the list,
or relative to their current positions.

#### Parameters

##### drawableID

`number`

{number}

##### order

`number`

{number} - order New absolute order or relative order adjusment.

##### group

[`StageLayeringValue`](../../../entity/stage/CStageLayering/type-aliases/StageLayeringValue.md)

{StageLayeringValue} - group Name of layer group drawable belongs to.

##### optIsRelative

`boolean`

{boolean} - If set, `order` refers to a relative change.

##### optMin?

`number`

{?number} - New order if changed, or null.

#### Returns

`void`

***

### setLayerGroupOrdering()

> **setLayerGroupOrdering**(`groupOrdering`): `void`

Defined in: [src/type/render/IRenderWebGL.ts:217](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L217)

Set the layer group ordering for the renderer.

#### Parameters

##### groupOrdering

[`StageLayeringValue`](../../../entity/stage/CStageLayering/type-aliases/StageLayeringValue.md)[]

{StageLayeringValue[]} - The ordered array of layer group

#### Returns

`void`

***

### updateBitmapSkin()

> **updateBitmapSkin**(`skinId`, `bitmapData`, `costumeResolution?`, `rotationCenter?`): `void`

Defined in: [src/type/render/IRenderWebGL.ts:269](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L269)

Update an existing bitmap skin, or create a bitmap skin if the previous skin was not bitmap.

#### Parameters

##### skinId

`number`

##### bitmapData

`HTMLImageElement`

##### costumeResolution?

`number`

##### rotationCenter?

`TwoNumberArray`

#### Returns

`void`

***

### updateDrawableDirection()

> **updateDrawableDirection**(`drawableID`, `direction`): `void`

Defined in: [src/type/render/IRenderWebGL.ts:229](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L229)

Update a drawable's direction.

#### Parameters

##### drawableID

`number`

##### direction

`number`

#### Returns

`void`

***

### updateDrawablePosition()

> **updateDrawablePosition**(`drawableID`, `position`): `void`

Defined in: [src/type/render/IRenderWebGL.ts:223](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L223)

Update a drawable's position.

#### Parameters

##### drawableID

`number`

{number} - drawable id.

##### position

`TwoNumberArray`

{number[]} - the new position.

#### Returns

`void`

***

### updateDrawableProperties()

> **updateDrawableProperties**(`drawableID`, `properties`): `void`

Defined in: [src/type/render/IRenderWebGL.ts:236](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L236)

update position, direction, scale, or effect properties

#### Parameters

##### drawableID

`number`

{number}

##### properties

[`ScratchRenderProperties`](../type-aliases/ScratchRenderProperties.md)

{ScratchRenderProperties}

#### Returns

`void`

***

### updateDrawableScale()

> **updateDrawableScale**(`drawableID`, `scale`): `void`

Defined in: [src/type/render/IRenderWebGL.ts:242](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L242)

Update a drawable's scale.

#### Parameters

##### drawableID

`number`

##### scale

`number`[]

#### Returns

`void`

***

### updateDrawableSkinId()

> **updateDrawableSkinId**(`drawableID`, `skinId`): `void`

Defined in: [src/type/render/IRenderWebGL.ts:248](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L248)

Update a drawable's skin

#### Parameters

##### drawableID

`number`

{number}

##### skinId

`number`

{number}

#### Returns

`void`

***

### updateDrawableVisible()

> **updateDrawableVisible**(`drawableID`, `visible`): `void`

Defined in: [src/type/render/IRenderWebGL.ts:254](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L254)

Update a drawable's visibility.

#### Parameters

##### drawableID

`number`

{number}

##### visible

`boolean`

{boolean}

#### Returns

`void`

***

### updateSVGSkin()

> **updateSVGSkin**(`skinId`, `svgData`, `rotationCenter?`): `void`

Defined in: [src/type/render/IRenderWebGL.ts:261](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L261)

Update an existing SVG skin, or create an SVG skin if the previous skin was not SVG.

#### Parameters

##### skinId

`number`

##### svgData

`string`

##### rotationCenter?

`TwoNumberArray`

#### Returns

`void`

***

### updateTextSkin()

> **updateTextSkin**(`skinId`, `type`, `text`, `pointsLeft`): `void`

Defined in: [src/type/render/IRenderWebGL.ts:277](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/render/IRenderWebGL.ts#L277)

#### Parameters

##### skinId

`number`

{number} - skin id.

##### type

`string`

{string} - "say" or "think".

##### text

`string`

{string} - the text for the bubble.

##### pointsLeft

`boolean`

{boolean} - which side the bubble is pointing.

#### Returns

`void`
