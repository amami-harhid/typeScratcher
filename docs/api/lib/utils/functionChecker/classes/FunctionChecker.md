# Class: FunctionChecker

Defined in: [src/lib/utils/functionChecker.ts:16](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/utils/functionChecker.ts#L16)

## Constructors

### Constructor

> **new FunctionChecker**(): `FunctionChecker`

#### Returns

`FunctionChecker`

## Methods

### getFunctionDeclares()

> `static` **getFunctionDeclares**(`func`): `TFunctionChecker`

Defined in: [src/lib/utils/functionChecker.ts:22](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/utils/functionChecker.ts#L22)

関数定義を渡しアロー関数、Async、Generatorの種類を返す。

#### Parameters

##### func

`CallableFunction`

#### Returns

`TFunctionChecker`

関数の種類

***

### getTypeOfGenerator()

> `static` **getTypeOfGenerator**(`func`): `TypeOfGenerator`

Defined in: [src/lib/utils/functionChecker.ts:41](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/utils/functionChecker.ts#L41)

未使用

#### Parameters

##### func

`CallableFunction`

#### Returns

`TypeOfGenerator`
