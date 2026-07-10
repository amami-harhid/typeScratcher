# Class: Color

Defined in: [src/lib/utils/color.ts:6](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/utils/color.ts#L6)

## Constructors

### Constructor

> **new Color**(): `Color`

#### Returns

`Color`

## Accessors

### RGB\_BLACK

#### Get Signature

> **get** `static` **RGB\_BLACK**(): [`RGBObject`](../type-aliases/RGBObject.md)

Defined in: [src/lib/utils/color.ts:22](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/utils/color.ts#L22)

##### Returns

[`RGBObject`](../type-aliases/RGBObject.md)

***

### RGB\_WHITE

#### Get Signature

> **get** `static` **RGB\_WHITE**(): [`RGBObject`](../type-aliases/RGBObject.md)

Defined in: [src/lib/utils/color.ts:27](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/utils/color.ts#L27)

##### Returns

[`RGBObject`](../type-aliases/RGBObject.md)

## Methods

### decimalToHex()

> `static` **decimalToHex**(`decimal`): `string`

Defined in: [src/lib/utils/color.ts:36](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/utils/color.ts#L36)

Convert a Scratch decimal color to a hex string, #RRGGBB.

#### Parameters

##### decimal

`number`

RGB color as a decimal.

#### Returns

`string`

RGB color as #RRGGBB hex string.

***

### decimalToRgb()

> `static` **decimalToRgb**(`decimal`): [`RGBObject`](../type-aliases/RGBObject.md)

Defined in: [src/lib/utils/color.ts:50](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/utils/color.ts#L50)

Convert a Scratch decimal color to an RGB color object.

#### Parameters

##### decimal

`number`

RGB color as decimal.

#### Returns

[`RGBObject`](../type-aliases/RGBObject.md)

rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.

***

### hexToDecimal()

> `static` **hexToDecimal**(`hex`): `number`

Defined in: [src/lib/utils/color.ts:99](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/utils/color.ts#L99)

Convert a hex color (e.g., F00, #03F, #0033FF) to a decimal color number.

#### Parameters

##### hex

`any`

Hex representation of the color.

#### Returns

`number`

Number representing the color.

***

### hexToRgb()

> `static` **hexToRgb**(`hex`): `object`

Defined in: [src/lib/utils/color.ts:65](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/utils/color.ts#L65)

Convert a hex color (e.g., F00, #03F, #0033FF) to an RGB color object.
CC-BY-SA Tim Down:
https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

#### Parameters

##### hex

`any`

Hex representation of the color.

#### Returns

`object`

null on failure, or rgb: {r: red [0,255], g: green [0,255], b: blue [0,255]}.

##### b

> **b**: `number`

##### g

> **g**: `number`

##### r

> **r**: `number`

***

### hsv2rgb()

> `static` **hsv2rgb**(`hsv`): `object`

Defined in: [src/lib/utils/color.ts:107](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/utils/color.ts#L107)

Convert hsv to rgb

#### Parameters

##### hsv

###### h

`number`

###### s

`number`

###### t

`number`

###### v

`number`

#### Returns

`object`

##### hex

> **hex**: `string`

##### rgb

> **rgb**: [`RGBObject`](../type-aliases/RGBObject.md)

***

### mixRgb()

> `static` **mixRgb**(`rgb0`, `rgb1`, `fraction1`): [`RGBObject`](../type-aliases/RGBObject.md)

Defined in: [src/lib/utils/color.ts:161](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/utils/color.ts#L161)

Linear interpolation between rgb0 and rgb1.

#### Parameters

##### rgb0

[`RGBObject`](../type-aliases/RGBObject.md)

the color corresponding to fraction1 <= 0.

##### rgb1

[`RGBObject`](../type-aliases/RGBObject.md)

the color corresponding to fraction1 >= 1.

##### fraction1

`number`

the interpolation parameter. If this is 0.5, for example, mix the two colors equally.

#### Returns

[`RGBObject`](../type-aliases/RGBObject.md)

the interpolated color.

***

### rgbToDecimal()

> `static` **rgbToDecimal**(`rgb`): `number`

Defined in: [src/lib/utils/color.ts:90](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/utils/color.ts#L90)

Convert an RGB color object to a Scratch decimal color.

#### Parameters

##### rgb

[`RGBObject`](../type-aliases/RGBObject.md)

{r: red [0,255], g: green [0,255], b: blue [0,255]}.

#### Returns

`number`

Number representing the color.

***

### rgbToHex()

> `static` **rgbToHex**(`rgb`): `string`

Defined in: [src/lib/utils/color.ts:81](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/utils/color.ts#L81)

Convert an RGB color object to a hex color.

#### Parameters

##### rgb

`any`

{r: red [0,255], g: green [0,255], b: blue [0,255]}.

#### Returns

`string`

Hex representation of the color.

***

### rgbToHsv()

> `static` **rgbToHsv**(`rgb`): [`HSVObject`](../type-aliases/HSVObject.md)

Defined in: [src/lib/utils/color.ts:134](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/utils/color.ts#L134)

Convert an RGB color to HSV format.

#### Parameters

##### rgb

[`RGBObject`](../type-aliases/RGBObject.md)

{r: red [0,255], g: green [0,255], b: blue [0,255]}.

#### Returns

[`HSVObject`](../type-aliases/HSVObject.md)

hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
