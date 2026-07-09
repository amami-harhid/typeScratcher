# Class: QuestionBoxElement

Defined in: [src/lib/gui/questionBoxElement.ts:36](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/gui/questionBoxElement.ts#L36)

QuestionBoxElement

## Extends

- `EventEmitter`

## Constructors

### Constructor

> **new QuestionBoxElement**(): `QuestionBoxElement`

Defined in: [src/lib/gui/questionBoxElement.ts:45](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/gui/questionBoxElement.ts#L45)

#### Returns

`QuestionBoxElement`

#### Overrides

`EventEmitter.constructor`

## Properties

### QuestionBoxForceComplete

> `static` **QuestionBoxForceComplete**: `string` = `"QuestionBoxForceComplete"`

Defined in: [src/lib/gui/questionBoxElement.ts:38](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/gui/questionBoxElement.ts#L38)

質問ボックス完了フラグ

## Methods

### ask()

> **ask**(`entity`, `text`): `Promise`\<`string`\>

Defined in: [src/lib/gui/questionBoxElement.ts:104](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/gui/questionBoxElement.ts#L104)

質問を表示して答えの入力を待つ

#### Parameters

##### entity

[`IEntity`](../../../../type/entity/entity/interfaces/IEntity.md)

{IEntity}

##### text

`string`

{string}

#### Returns

`Promise`\<`string`\>

答え {Promise<string>}

***

### askWait()

> **askWait**(`entity`): `Promise`\<`boolean`\>

Defined in: [src/lib/gui/questionBoxElement.ts:55](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/gui/questionBoxElement.ts#L55)

DOM(StageStageOverlays)が存在しなくなるまで待つ
強制打ち切りの場合は false を返す

#### Parameters

##### entity

[`IEntity`](../../../../type/entity/entity/interfaces/IEntity.md)

#### Returns

`Promise`\<`boolean`\>

Promise<void>

***

### isSprite()

> `static` **isSprite**(`entity`): `boolean`

Defined in: [src/lib/gui/questionBoxElement.ts:91](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/gui/questionBoxElement.ts#L91)

entity がSpriteなのかを判定する

#### Parameters

##### entity

[`IEntity`](../../../../type/entity/entity/interfaces/IEntity.md)

#### Returns

`boolean`

Spriteの場合 True

***

### removeAsk()

> `static` **removeAsk**(): `void`

Defined in: [src/lib/gui/questionBoxElement.ts:227](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/gui/questionBoxElement.ts#L227)

質問を消す

#### Returns

`void`

***

### removeQuestionOverlay()

> `static` **removeQuestionOverlay**(): `void`

Defined in: [src/lib/gui/questionBoxElement.ts:217](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/gui/questionBoxElement.ts#L217)

#### Returns

`void`

***

### removeTargetAsk()

> `static` **removeTargetAsk**(`entity`): `void`

Defined in: [src/lib/gui/questionBoxElement.ts:209](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/gui/questionBoxElement.ts#L209)

#### Parameters

##### entity

[`IEntity`](../../../../type/entity/entity/interfaces/IEntity.md)

#### Returns

`void`
