# Interface: IEntityBroadCast

Defined in: [src/type/entity/entity/IEntityBroadcast.ts:15](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/entity/IEntityBroadcast.ts#L15)

メッセージ送受信

## Methods

### receiver()

> **receiver**(`messageId`): [`EventFunctionSetter`](../../IEntityEvent/interfaces/EventFunctionSetter.md)

Defined in: [src/type/entity/entity/IEntityBroadcast.ts:45](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/entity/IEntityBroadcast.ts#L45)

メッセージ受信時のイベント定義セッター

#### Parameters

##### messageId

`string`

#### Returns

[`EventFunctionSetter`](../../IEntityEvent/interfaces/EventFunctionSetter.md)

***

### send()

> **send**(`messageId`, ...`args`): `void`

Defined in: [src/type/entity/entity/IEntityBroadcast.ts:27](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/entity/IEntityBroadcast.ts#L27)

メッセージを送る

#### Parameters

##### messageId

`string`

メッセージID

##### args

...`unknown`[]

引数
```ts
 const count: number = 100;
 const mouseDown: boolean = false;
 this.Event.broadcast('Start', count, mouseDown );
```

#### Returns

`void`

***

### sendAndWait()

> **sendAndWait**(`messageId`, ...`args`): `Promise`\<`void`\>

Defined in: [src/type/entity/entity/IEntityBroadcast.ts:39](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/entity/IEntityBroadcast.ts#L39)

メッセージを送り終わるまで待つ

#### Parameters

##### messageId

`string`

メッセージID

##### args

...`unknown`[]

引数
```ts
 const count: number = 100;
 const mouseDown: boolean = false;
 await this.Event.broadcastAndWait('Start', count, mouseDown );
```

#### Returns

`Promise`\<`void`\>
