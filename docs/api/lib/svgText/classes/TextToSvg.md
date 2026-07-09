# Class: TextToSvg

Defined in: [src/lib/svgText/index.ts:25](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/svgText/index.ts#L25)

## Implements

- [`ITextToSvg`](../../../type/svgText/interfaces/ITextToSvg.md)

## Constructors

### Constructor

> **new TextToSvg**(): `TextToSvg`

Defined in: [src/lib/svgText/index.ts:33](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/svgText/index.ts#L33)

#### Returns

`TextToSvg`

## Accessors

### padding

#### Set Signature

> **set** **padding**(`padding`): `void`

Defined in: [src/lib/svgText/index.ts:47](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/svgText/index.ts#L47)

##### Parameters

###### padding

`number`

##### Returns

`void`

***

### scratchFontFamily

#### Set Signature

> **set** **scratchFontFamily**(`fontFamily`): `void`

Defined in: [src/lib/svgText/index.ts:50](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/svgText/index.ts#L50)

ScratchFontFamily

##### Parameters

###### fontFamily

[`ScratchFontFamilyValue`](../../../type/svgText/type-aliases/ScratchFontFamilyValue.md)

##### Returns

`void`

#### Implementation of

[`ITextToSvg`](../../../type/svgText/interfaces/ITextToSvg.md).[`scratchFontFamily`](../../../type/svgText/interfaces/ITextToSvg.md#scratchfontfamily)

***

### textAttributes

#### Set Signature

> **set** **textAttributes**(`attr`): `void`

Defined in: [src/lib/svgText/index.ts:69](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/svgText/index.ts#L69)

##### Parameters

###### attr

[`TextAttributes`](../../../type/svgText/type-aliases/TextAttributes.md)

##### Returns

`void`

## Methods

### addExternalFontDatas()

> **addExternalFontDatas**(`fonts`): `void`

Defined in: [src/lib/svgText/index.ts:53](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/svgText/index.ts#L53)

#### Parameters

##### fonts

[`Font`](../../fonts/classes/Font.md)[]

#### Returns

`void`

***

### createSvgData()

> **createSvgData**(`inputText`, `textAttr`): `Promise`\<`string`\>

Defined in: [src/lib/svgText/index.ts:121](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/svgText/index.ts#L121)

SVGデータを作成する( Base64 )

#### Parameters

##### inputText

`string`

##### textAttr

[`TextAttributes`](../../../type/svgText/type-aliases/TextAttributes.md)

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`ITextToSvg`](../../../type/svgText/interfaces/ITextToSvg.md).[`createSvgData`](../../../type/svgText/interfaces/ITextToSvg.md#createsvgdata)

***

### setExternalFontFamily()

> **setExternalFontFamily**(`fontFamily`): `Promise`\<`void`\>

Defined in: [src/lib/svgText/index.ts:58](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/svgText/index.ts#L58)

#### Parameters

##### fontFamily

[`ParmFontFace`](../../../type/svgText/type-aliases/ParmFontFace.md)[]

#### Returns

`Promise`\<`void`\>

***

### getInstance()

> `static` **getInstance**(): `TextToSvg`

Defined in: [src/lib/svgText/index.ts:253](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/svgText/index.ts#L253)

#### Returns

`TextToSvg`
