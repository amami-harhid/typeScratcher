# Class: Rewriter

Defined in: [src/lib/engine/thread/rewriter.ts:4](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/engine/thread/rewriter.ts#L4)

## Constructors

### Constructor

> **new Rewriter**(): `Rewriter`

#### Returns

`Rewriter`

## Methods

### toGenerator()

> `static` **toGenerator**\<`T`\>(`proxy`, `func`, ...`args`): `AsyncGenerator`\<`any`, `void`, `any`\>

Defined in: [src/lib/engine/thread/rewriter.ts:6](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/engine/thread/rewriter.ts#L6)

#### Type Parameters

##### T

`T`

#### Parameters

##### proxy

[`IEntityProxy`](../../../../../type/entity/entity/IEntityProxy/interfaces/IEntityProxy.md)

##### func

`CallableFunction`

##### args

...`T`[]

#### Returns

`AsyncGenerator`\<`any`, `void`, `any`\>
