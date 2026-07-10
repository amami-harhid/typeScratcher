# Class: SvgText

Defined in: [src/lib/svgText/svgText.ts:14](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/svgText/svgText.ts#L14)

## Implements

- [`ISvgText`](../../../../type/svgText/ISvgText/interfaces/ISvgText.md)

## Constructors

### Constructor

> **new SvgText**(`entity`): `SvgText`

Defined in: [src/lib/svgText/svgText.ts:18](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/svgText/svgText.ts#L18)

#### Parameters

##### entity

[`IEntity`](../../../../type/entity/entity/interfaces/IEntity.md)

#### Returns

`SvgText`

## Methods

### add()

> **add**(`name`, `svgString`): `void`

Defined in: [src/lib/svgText/svgText.ts:70](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/svgText/svgText.ts#L70)

SVG文字列を追加する

#### Parameters

##### name

`string`

##### svgString

`string`

#### Returns

`void`

#### Implementation of

[`ISvgText`](../../../../type/svgText/ISvgText/interfaces/ISvgText.md).[`add`](../../../../type/svgText/ISvgText/interfaces/ISvgText.md#add)

***

### addTexts()

> **addTexts**(`name`, `texts`, `option?`): `void`

Defined in: [src/lib/svgText/svgText.ts:32](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/svgText/svgText.ts#L32)

文字列配列をSVG化して追加する

#### Parameters

##### name

`string`

##### texts

`string`[]

##### option?

[`TAddOption`](../../../../type/svgText/ISvgText/type-aliases/TAddOption.md)

#### Returns

`void`

#### Implementation of

[`ISvgText`](../../../../type/svgText/ISvgText/interfaces/ISvgText.md).[`addTexts`](../../../../type/svgText/ISvgText/interfaces/ISvgText.md#addtexts)

***

### mesure()

> **mesure**(`texts`, `fontSize?`, `fontStyle?`, `fontFamily?`): `object`

Defined in: [src/lib/svgText/svgText.ts:84](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/svgText/svgText.ts#L84)

文字列配列の大きさを計測する

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

[`ISvgText`](../../../../type/svgText/ISvgText/interfaces/ISvgText.md).[`mesure`](../../../../type/svgText/ISvgText/interfaces/ISvgText.md#mesure)

***

### replaceTexts()

> **replaceTexts**(`name`, `text`, `option?`): `void`

Defined in: [src/lib/svgText/svgText.ts:66](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/svgText/svgText.ts#L66)

文字列配列をSVG化して画像を更新する

#### Parameters

##### name

`string`

##### text

`string`[]

##### option?

[`TAddOption`](../../../../type/svgText/ISvgText/type-aliases/TAddOption.md)

#### Returns

`void`

#### Implementation of

[`ISvgText`](../../../../type/svgText/ISvgText/interfaces/ISvgText.md).[`replaceTexts`](../../../../type/svgText/ISvgText/interfaces/ISvgText.md#replacetexts)

***

### toSvg()

> **toSvg**(`textArr`, `fontSize?`, `fontStyle?`, `color?`, `fontFamily?`): `string`

Defined in: [src/lib/svgText/svgText.ts:88](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/svgText/svgText.ts#L88)

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

#### Implementation of

[`ISvgText`](../../../../type/svgText/ISvgText/interfaces/ISvgText.md).[`toSvg`](../../../../type/svgText/ISvgText/interfaces/ISvgText.md#tosvg)
