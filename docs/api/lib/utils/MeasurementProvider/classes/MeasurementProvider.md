# Class: MeasurementProvider

Defined in: [src/lib/utils/MeasurementProvider.ts:5](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/utils/MeasurementProvider.ts#L5)

MeasurementProvider

## Implements

- [`IMeasurementProvider`](../../../../type/util/IMeasurementProvider/interfaces/IMeasurementProvider.md)

## Constructors

### Constructor

> **new MeasurementProvider**(`ctx`): `MeasurementProvider`

Defined in: [src/lib/utils/MeasurementProvider.ts:14](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/utils/MeasurementProvider.ts#L14)

#### Parameters

##### ctx

`CanvasRenderingContext2D`

provides a canvas rendering context
with 'font' set to the text style of the text to be wrapped.

#### Returns

`MeasurementProvider`

## Methods

### beginMeasurementSession()

> **beginMeasurementSession**(): `void`

Defined in: [src/lib/utils/MeasurementProvider.ts:35](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/utils/MeasurementProvider.ts#L35)

Called by the TextWrapper before a batch of zero or more calls to measureText().

#### Returns

`void`

***

### endMeasurementSession()

> **endMeasurementSession**(): `void`

Defined in: [src/lib/utils/MeasurementProvider.ts:40](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/utils/MeasurementProvider.ts#L40)

Called by the TextWrapper after a batch of zero or more calls to measureText().

#### Returns

`void`

***

### measureText()

> **measureText**(`text`): `number`

Defined in: [src/lib/utils/MeasurementProvider.ts:24](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/utils/MeasurementProvider.ts#L24)

文字列の長さを測定する、測定値はキャッシュする.

#### Parameters

##### text

`string`

測定対象の文字列.

#### Returns

`number`

- 文字列の長さ.

#### Implementation of

[`IMeasurementProvider`](../../../../type/util/IMeasurementProvider/interfaces/IMeasurementProvider.md).[`measureText`](../../../../type/util/IMeasurementProvider/interfaces/IMeasurementProvider.md#measuretext)
