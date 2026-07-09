# Class: Font

Defined in: [src/lib/fonts/index.ts:11](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/fonts/index.ts#L11)

Font

## Implements

- [`IFont`](../../../type/font/interfaces/IFont.md)

## Constructors

### Constructor

> **new Font**(`font`): `Font`

Defined in: [src/lib/fonts/index.ts:18](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/fonts/index.ts#L18)

#### Parameters

##### font

`FontArgStringObject`

#### Returns

`Font`

## Accessors

### fonts

#### Get Signature

> **get** **fonts**(): `string`[]

Defined in: [src/lib/fonts/index.ts:39](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/fonts/index.ts#L39)

##### Returns

`string`[]

***

### loadCompleted

#### Get Signature

> **get** **loadCompleted**(): `boolean`

Defined in: [src/lib/fonts/index.ts:42](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/fonts/index.ts#L42)

##### Returns

`boolean`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [src/lib/fonts/index.ts:36](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/fonts/index.ts#L36)

##### Returns

`string`

#### Implementation of

[`IFont`](../../../type/font/interfaces/IFont.md).[`name`](../../../type/font/interfaces/IFont.md#name)

## Methods

### load()

> **load**(): `Promise`\<`void`\>

Defined in: [src/lib/fonts/index.ts:24](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/fonts/index.ts#L24)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFont`](../../../type/font/interfaces/IFont.md).[`load`](../../../type/font/interfaces/IFont.md#load)
