# Interface: IThreadObj\<T\>

Defined in: [src/type/engine/thread/threads.ts:17](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/engine/thread/threads.ts#L17)

## Type Parameters

### T

`T`

## Properties

### done

> `readonly` **done**: `boolean`

Defined in: [src/type/engine/thread/threads.ts:19](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/engine/thread/threads.ts#L19)

完了フラグ

***

### entity

> `readonly` **entity**: [`IEntity`](../../../../entity/entity/interfaces/IEntity.md)

Defined in: [src/type/engine/thread/threads.ts:31](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/engine/thread/threads.ts#L31)

エンティティ

***

### entityId

> **entityId**: `string`

Defined in: [src/type/engine/thread/threads.ts:25](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/engine/thread/threads.ts#L25)

エンティティID

***

### isStarted

> `readonly` **isStarted**: `boolean`

Defined in: [src/type/engine/thread/threads.ts:35](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/engine/thread/threads.ts#L35)

開始フラグ

***

### proxy

> `readonly` **proxy**: [`IEntityProxy`](../../../../entity/entity/IEntityProxy/interfaces/IEntityProxy.md)

Defined in: [src/type/engine/thread/threads.ts:33](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/engine/thread/threads.ts#L33)

エンティティプロキシ

***

### status

> **status**: `"INITIALIZING"` \| `"YIELD"` \| `"RUNNING"` \| `"COMPLETED"`

Defined in: [src/type/engine/thread/threads.ts:23](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/engine/thread/threads.ts#L23)

ステータス

***

### threadId

> **threadId**: `string`

Defined in: [src/type/engine/thread/threads.ts:21](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/engine/thread/threads.ts#L21)

スレッドID

## Methods

### genProxy()

> **genProxy**(): `void`

Defined in: [src/type/engine/thread/threads.ts:27](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/engine/thread/threads.ts#L27)

プロキシ生成

#### Returns

`void`

***

### setFunc()

> **setFunc**(`func`, ...`args`): `void`

Defined in: [src/type/engine/thread/threads.ts:29](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/engine/thread/threads.ts#L29)

イベント関数を設定する

#### Parameters

##### func

`CallableFunction`

##### args

...`T`[]

#### Returns

`void`
