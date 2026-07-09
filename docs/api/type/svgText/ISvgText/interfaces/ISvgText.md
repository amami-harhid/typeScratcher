# Interface: ISvgText

Defined in: [src/type/svgText/ISvgText.ts:8](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/svgText/ISvgText.ts#L8)

## Methods

### add()

> **add**(`name`, `svg`): `void`

Defined in: [src/type/svgText/ISvgText.ts:28](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/svgText/ISvgText.ts#L28)

SVG文字列を追加する

#### Parameters

##### name

`string`

##### svg

`string`

#### Returns

`void`

***

### addTexts()

> **addTexts**(`name`, `text`, `option?`): `void`

Defined in: [src/type/svgText/ISvgText.ts:15](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/svgText/ISvgText.ts#L15)

文字列配列をSVG化して追加する

#### Parameters

##### name

`string`

##### text

`string`[]

##### option?

[`TAddOption`](../type-aliases/TAddOption.md)

#### Returns

`void`

***

### mesure()

> **mesure**(`texts`, `fontSize`, `fontStyle?`, `fontFamily?`): `object`

Defined in: [src/type/svgText/ISvgText.ts:36](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/svgText/ISvgText.ts#L36)

文字列配列の大きさを計測する

#### Parameters

##### texts

`string`[]

##### fontSize

`number`

##### fontStyle?

`string`

##### fontFamily?

`string`

#### Returns

`object`

##### h

> **h**: `number`

##### w

> **w**: `number`

***

### replaceTexts()

> **replaceTexts**(`name`, `text`, `option?`): `void`

Defined in: [src/type/svgText/ISvgText.ts:22](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/svgText/ISvgText.ts#L22)

文字列配列をSVG化して画像を更新する

#### Parameters

##### name

`string`

##### text

`string`[]

##### option?

[`TAddOption`](../type-aliases/TAddOption.md)

#### Returns

`void`

***

### toSvg()

> **toSvg**(`textArr`, `fontSize?`, `fontStyle?`, `color?`, `fontFamily?`): `string`

Defined in: [src/type/svgText/ISvgText.ts:45](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/svgText/ISvgText.ts#L45)

文字列配列をSVG化する

#### Parameters

##### textArr

`string`[]

##### fontSize?

`number`

##### fontStyle?

`string`

##### color?

`string`

##### fontFamily?

`string`

#### Returns

`string`
