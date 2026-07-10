# Interface: SMonitors

Defined in: [src/type/entity/monitor/index.ts:7](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/monitor/index.ts#L7)

Monitors

## Methods

### addVar()

> **addVar**(`vars`): `void`

Defined in: [src/type/entity/monitor/index.ts:12](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/monitor/index.ts#L12)

モニターを追加する.

#### Parameters

##### vars

[`MonitoringVars`](../monitoring/type-aliases/MonitoringVars.md)

#### Returns

`void`

***

### allReposition()

> **allReposition**(): `void`

Defined in: [src/type/entity/monitor/index.ts:16](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/monitor/index.ts#L16)

モニターを再配置する

#### Returns

`void`

***

### drawMonitors()

> **drawMonitors**(): `void`

Defined in: [src/type/entity/monitor/index.ts:37](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/monitor/index.ts#L37)

全てのMonitorを描画する

#### Returns

`void`

***

### getMonitor()

> **getMonitor**(`monitorId`): [`IMonitor`](../monitor/interfaces/IMonitor.md)

Defined in: [src/type/entity/monitor/index.ts:22](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/monitor/index.ts#L22)

指定したIDのモニターを返す

#### Parameters

##### monitorId

`string`

{string}

#### Returns

[`IMonitor`](../monitor/interfaces/IMonitor.md)

***

### hideMonitor()

> **hideMonitor**(`monitorId`): `void`

Defined in: [src/type/entity/monitor/index.ts:32](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/monitor/index.ts#L32)

指定したIDのモニターを隠す

#### Parameters

##### monitorId

`string`

{string}

#### Returns

`void`

***

### showMonitor()

> **showMonitor**(`monitorId`): `void`

Defined in: [src/type/entity/monitor/index.ts:27](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/monitor/index.ts#L27)

指定したIDのモニターを表示する

#### Parameters

##### monitorId

`string`

#### Returns

`void`
