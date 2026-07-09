# Class: SvgTextCreator

Defined in: [src/lib/svgText/svgTextCreator.ts:10](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/svgText/svgTextCreator.ts#L10)

SvgTextCreator

## Implements

- [`ISvgTextCreator`](../../../../type/svgText/ISvgTextCreator/interfaces/ISvgTextCreator.md)

## Constructors

### Constructor

> **new SvgTextCreator**(): `SvgTextCreator`

#### Returns

`SvgTextCreator`

## Methods

### toSvg()

> **toSvg**(`textArr`, `option?`): `string`

Defined in: [src/lib/svgText/svgTextCreator.ts:37](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/svgText/svgTextCreator.ts#L37)

文字の配列をSVG化する

#### Parameters

##### textArr

`string`[]

##### option?

[`TSvgOption`](../../../../type/svgText/ISvgTextCreator/type-aliases/TSvgOption.md)

#### Returns

`string`

#### Implementation of

[`ISvgTextCreator`](../../../../type/svgText/ISvgTextCreator/interfaces/ISvgTextCreator.md).[`toSvg`](../../../../type/svgText/ISvgTextCreator/interfaces/ISvgTextCreator.md#tosvg)

***

### toSvg2()

> **toSvg2**(`textArr`, `fontSize?`, `fontStyle?`, `color?`, `fontFamily?`): `string`

Defined in: [src/lib/svgText/svgTextCreator.ts:27](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/svgText/svgTextCreator.ts#L27)

文字の配列をSVG化する

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

#### Implementation of

[`ISvgTextCreator`](../../../../type/svgText/ISvgTextCreator/interfaces/ISvgTextCreator.md).[`toSvg2`](../../../../type/svgText/ISvgTextCreator/interfaces/ISvgTextCreator.md#tosvg2)

***

### getInstance()

> `static` **getInstance**(): `SvgTextCreator`

Defined in: [src/lib/svgText/svgTextCreator.ts:12](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/svgText/svgTextCreator.ts#L12)

#### Returns

`SvgTextCreator`
