# Class: Cast

Defined in: [src/lib/utils/cast.ts:18](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/utils/cast.ts#L18)

## Fileoverview

Utilities for casting and comparing Scratch data-types.
Scratch behaves slightly differently from JavaScript in many respects,
and these differences should be encapsulated below.
For example, in Scratch, add(1, join("hello", world")) -> 1.
This is because "hello world" is cast to 0.
In JavaScript, 1 + Number("hello" + "world") would give you NaN.
Use when coercing a value before computation.

## Constructors

### Constructor

> **new Cast**(): `Cast`

#### Returns

`Cast`

## Accessors

### LIST\_ALL

#### Get Signature

> **get** `static` **LIST\_ALL**(): `string`

Defined in: [src/lib/utils/cast.ts:209](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/utils/cast.ts#L209)

##### Returns

`string`

***

### LIST\_INVALID

#### Get Signature

> **get** `static` **LIST\_INVALID**(): `string`

Defined in: [src/lib/utils/cast.ts:205](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/utils/cast.ts#L205)

##### Returns

`string`

## Methods

### compare()

> `static` **compare**(`v1`, `v2`): `number`

Defined in: [src/lib/utils/cast.ts:150](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/utils/cast.ts#L150)

Compare two values, using Scratch cast, case-insensitive string compare, etc.
In Scratch 2.0, this is captured by `interp.compare.`

#### Parameters

##### v1

`any`

First value to compare.

##### v2

`any`

Second value to compare.

#### Returns

`number`

Negative number if v1 < v2; 0 if equal; positive otherwise.

***

### isInt()

> `static` **isInt**(`val`): `boolean`

Defined in: [src/lib/utils/cast.ts:186](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/utils/cast.ts#L186)

Determine if a Scratch argument number represents a round integer.

#### Parameters

##### val

`any`

Value to check.

#### Returns

`boolean`

True if number looks like an integer.

***

### isWhiteSpace()

> `static` **isWhiteSpace**(`val`): `boolean`

Defined in: [src/lib/utils/cast.ts:139](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/utils/cast.ts#L139)

Determine if a Scratch argument is a white space string (or null / empty).

#### Parameters

##### val

`any`

value to check.

#### Returns

`boolean`

True if the argument is all white spaces or null / empty.

***

### rgbToHsv()

> `static` **rgbToHsv**(`rgb`): [`HSVObject`](../../../../type/util/cast/type-aliases/HSVObject.md)

Defined in: [src/lib/utils/cast.ts:86](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/utils/cast.ts#L86)

Convert an RGB color to HSV format. 
ref: scratch-vm, util/color.js

#### Parameters

##### rgb

[`RGBObject`](../../../../type/util/cast/type-aliases/RGBObject.md)

{r: red [0,255], g: green [0,255], b: blue [0,255]}.

#### Returns

[`HSVObject`](../../../../type/util/cast/type-aliases/HSVObject.md)

hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}

***

### toBoolean()

> `static` **toBoolean**(`value`): `boolean`

Defined in: [src/lib/utils/cast.ts:53](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/utils/cast.ts#L53)

Scratch cast to boolean.
In Scratch 2.0, this is captured by `interp.boolArg.`
Treats some string values differently from JavaScript.

#### Parameters

##### value

`any`

Value to cast to boolean.

#### Returns

`boolean`

The Scratch-casted boolean value.

***

### toListIndex()

> `static` **toListIndex**(`index`, `length`, `acceptAll`): `string` \| `number`

Defined in: [src/lib/utils/cast.ts:223](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/utils/cast.ts#L223)

Compute a 1-based index into a list, based on a Scratch argument.
Two special cases may be returned:
LIST_ALL: if the block is referring to all of the items in the list.
LIST_INVALID: if the index was invalid in any way.

#### Parameters

##### index

`any`

Scratch arg, including 1-based numbers or special cases.

##### length

`number`

Length of the list.

##### acceptAll

`boolean`

Whether it should accept "all" or not.

#### Returns

`string` \| `number`

1-based index for list, LIST_ALL, or LIST_INVALID.

***

### toNumber()

> `static` **toNumber**(`value`): `number`

Defined in: [src/lib/utils/cast.ts:26](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/utils/cast.ts#L26)

Scratch cast to number.
Treats NaN as 0.
In Scratch 2.0, this is captured by `interp.numArg.`

#### Parameters

##### value

`any`

Value to cast to number.

#### Returns

`number`

The Scratch-casted number value.

***

### toRgbColorList()

> `static` **toRgbColorList**(`value`): [`RGBColorArray`](../../../../type/util/cast/type-aliases/RGBColorArray.md)

Defined in: [src/lib/utils/cast.ts:111](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/utils/cast.ts#L111)

Cast any Scratch argument to an RGB color array to be used for the renderer.

#### Parameters

##### value

`any`

Value to convert to RGB color array.

#### Returns

[`RGBColorArray`](../../../../type/util/cast/type-aliases/RGBColorArray.md)

[r,g,b], values between 0-255.

***

### toRgbColorObject()

> `static` **toRgbColorObject**(`value`): [`RGBObject`](../../../../type/util/cast/type-aliases/RGBObject.md)

Defined in: [src/lib/utils/cast.ts:121](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/utils/cast.ts#L121)

Cast any Scratch argument to an RGB color object to be used for the renderer.

#### Parameters

##### value

`any`

Value to convert to RGB color object.

#### Returns

[`RGBObject`](../../../../type/util/cast/type-aliases/RGBObject.md)

[r,g,b], values between 0-255.

***

### toString()

> `static` **toString**(`value`): `string`

Defined in: [src/lib/utils/cast.ts:77](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/utils/cast.ts#L77)

Scratch cast to string.

#### Parameters

##### value

`any`

Value to cast to string.

#### Returns

`string`

The Scratch-casted string value.
