# Class: SvgTextMesure

Defined in: [src/lib/svgText/svgTexMesure.ts:7](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/svgText/svgTexMesure.ts#L7)

文字列の長さ、高さを取り出す

## Implements

- [`ISvgTextMesure`](../../../../type/svgText/ISvgTextMesure/interfaces/ISvgTextMesure.md)

## Constructors

### Constructor

> **new SvgTextMesure**(): `SvgTextMesure`

Defined in: [src/lib/svgText/svgTexMesure.ts:9](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/svgText/svgTexMesure.ts#L9)

#### Returns

`SvgTextMesure`

## Properties

### instance

> `static` **instance**: `SvgTextMesure`

Defined in: [src/lib/svgText/svgTexMesure.ts:66](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/svgText/svgTexMesure.ts#L66)

## Methods

### mesure()

> **mesure**(`texts`, `fontSize?`, `fontStyle?`, `fontFamily?`): `object`

Defined in: [src/lib/svgText/svgTexMesure.ts:20](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/svgText/svgTexMesure.ts#L20)

文字列配列のうち最大文字列長の横幅、縦幅を測る

#### Parameters

##### texts

`string`[]

##### fontSize?

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

#### Implementation of

[`ISvgTextMesure`](../../../../type/svgText/ISvgTextMesure/interfaces/ISvgTextMesure.md).[`mesure`](../../../../type/svgText/ISvgTextMesure/interfaces/ISvgTextMesure.md#mesure)

***

### getInstance()

> `static` **getInstance**(): `SvgTextMesure`

Defined in: [src/lib/svgText/svgTexMesure.ts:67](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/svgText/svgTexMesure.ts#L67)

#### Returns

`SvgTextMesure`
