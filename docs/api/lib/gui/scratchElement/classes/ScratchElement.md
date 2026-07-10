# Class: ScratchElement

Defined in: [src/lib/gui/scratchElement.ts:19](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/gui/scratchElement.ts#L19)

## Constructors

### Constructor

> **new ScratchElement**(): `ScratchElement`

#### Returns

`ScratchElement`

## Properties

### RemakeCanvasWillReadFrequentlyTrue

> `static` **RemakeCanvasWillReadFrequentlyTrue**: `HTMLCanvasElement`

Defined in: [src/lib/gui/scratchElement.ts:21](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/gui/scratchElement.ts#L21)

## Methods

### changeToPauseMark()

> `static` **changeToPauseMark**(`pauseMark`): `void`

Defined in: [src/lib/gui/scratchElement.ts:161](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/gui/scratchElement.ts#L161)

#### Parameters

##### pauseMark

`HTMLElement`

#### Returns

`void`

***

### changeToPauseMarkActive()

> `static` **changeToPauseMarkActive**(`pauseMark`): `void`

Defined in: [src/lib/gui/scratchElement.ts:165](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/gui/scratchElement.ts#L165)

#### Parameters

##### pauseMark

`HTMLElement`

#### Returns

`void`

***

### changeToRestartMark()

> `static` **changeToRestartMark**(`pauseMark`): `void`

Defined in: [src/lib/gui/scratchElement.ts:169](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/gui/scratchElement.ts#L169)

#### Parameters

##### pauseMark

`HTMLElement`

#### Returns

`void`

***

### getControlPauseMark()

> `static` **getControlPauseMark**(): `HTMLElement`

Defined in: [src/lib/gui/scratchElement.ts:154](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/gui/scratchElement.ts#L154)

#### Returns

`HTMLElement`

***

### getControlStopMark()

> `static` **getControlStopMark**(): `HTMLElement`

Defined in: [src/lib/gui/scratchElement.ts:147](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/gui/scratchElement.ts#L147)

#### Returns

`HTMLElement`

***

### getGreenFlag()

> `static` **getGreenFlag**(): `HTMLImageElement`

Defined in: [src/lib/gui/scratchElement.ts:23](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/gui/scratchElement.ts#L23)

#### Returns

`HTMLImageElement`

***

### getHeader()

> `static` **getHeader**(`main`): `HTMLDivElement`

Defined in: [src/lib/gui/scratchElement.ts:61](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/gui/scratchElement.ts#L61)

#### Parameters

##### main

`HTMLDivElement`

#### Returns

`HTMLDivElement`

***

### getMain()

> `static` **getMain**(): `HTMLDivElement`

Defined in: [src/lib/gui/scratchElement.ts:28](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/gui/scratchElement.ts#L28)

#### Returns

`HTMLDivElement`

***

### getOverlay()

> `static` **getOverlay**(): `HTMLDivElement`

Defined in: [src/lib/gui/scratchElement.ts:43](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/gui/scratchElement.ts#L43)

#### Returns

`HTMLDivElement`

***

### getScratchCanvas()

> `static` **getScratchCanvas**(): `HTMLCanvasElement`

Defined in: [src/lib/gui/scratchElement.ts:124](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/gui/scratchElement.ts#L124)

#### Returns

`HTMLCanvasElement`

***

### getStageCanvasWrapper()

> `static` **getStageCanvasWrapper**(`main`): `HTMLDivElement`

Defined in: [src/lib/gui/scratchElement.ts:113](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/gui/scratchElement.ts#L113)

#### Parameters

##### main

`HTMLDivElement`

#### Returns

`HTMLDivElement`

***

### offsetChangePageToStage()

> `static` **offsetChangePageToStage**(`pageX`, `pageY`): `object`

Defined in: [src/lib/gui/scratchElement.ts:199](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/gui/scratchElement.ts#L199)

ウィンドウ(Body)左上基準の座標をStage(Canvas)左上基準へ変換する

#### Parameters

##### pageX

`number`

##### pageY

`number`

#### Returns

`object`

##### x

> **x**: `number`

##### y

> **y**: `number`

***

### pageToScratchStagePosition()

> `static` **pageToScratchStagePosition**(`pageX`, `pageY`): `object`

Defined in: [src/lib/gui/scratchElement.ts:181](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/gui/scratchElement.ts#L181)

ページ座標をScratchベースのステージ座標へ変換する
Scratchベースなので、表示率を掛けている。

#### Parameters

##### pageX

`number`

##### pageY

`number`

#### Returns

`object`

##### scratchX

> **scratchX**: `number`

##### scratchY

> **scratchY**: `number`
