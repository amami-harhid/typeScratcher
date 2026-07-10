# Class: Engine

Defined in: [src/lib/engine/index.ts:16](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/engine/index.ts#L16)

ゲームエンジン

## Implements

- [`IEngine`](../../../type/engine/interfaces/IEngine.md)

## Accessors

### mouse

#### Get Signature

> **get** **mouse**(): [`TMouse`](../../../type/mouse/type-aliases/TMouse.md)

Defined in: [src/lib/engine/index.ts:60](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/engine/index.ts#L60)

##### Returns

[`TMouse`](../../../type/mouse/type-aliases/TMouse.md)

***

### render

#### Get Signature

> **get** **render**(): [`Render`](../../render/classes/Render.md)

Defined in: [src/lib/engine/index.ts:112](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/engine/index.ts#L112)

##### Returns

[`Render`](../../render/classes/Render.md)

***

### timer

#### Get Signature

> **get** **timer**(): `number`

Defined in: [src/lib/engine/index.ts:41](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/engine/index.ts#L41)

実行開始からの経過時刻(ミリ秒)

##### Returns

`number`

## Methods

### resetTimer()

> **resetTimer**(): `void`

Defined in: [src/lib/engine/index.ts:47](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/engine/index.ts#L47)

経過時刻(ミリ秒)をリセットする

#### Returns

`void`

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/lib/engine/index.ts:163](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/engine/index.ts#L163)

ゲームエンジン開始処理

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IEngine`](../../../type/engine/interfaces/IEngine.md).[`start`](../../../type/engine/interfaces/IEngine.md#start)
