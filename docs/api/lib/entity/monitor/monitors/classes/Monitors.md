# Class: Monitors

Defined in: [src/lib/entity/monitor/monitors.ts:13](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitors.ts#L13)

Monitors

## Implements

- [`IMonitors`](../../../../../type/entity/monitor/interfaces/IMonitors.md)

## Constructors

### Constructor

> **new Monitors**(): `Monitors`

Defined in: [src/lib/entity/monitor/monitors.ts:52](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitors.ts#L52)

#### Returns

`Monitors`

## Methods

### add()

> **add**(`vars`): `void`

Defined in: [src/lib/entity/monitor/monitors.ts:88](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitors.ts#L88)

IDとラベルを指定して モニターを追加する.
IDが重複する場合は追加しない.

#### Parameters

##### vars

[`MonitoringVars`](../../../../../type/entity/monitor/monitoring/type-aliases/MonitoringVars.md)

#### Returns

`void`

#### Implementation of

[`IMonitors`](../../../../../type/entity/monitor/interfaces/IMonitors.md).[`add`](../../../../../type/entity/monitor/interfaces/IMonitors.md#add)

***

### draw()

> **draw**(): `void`

Defined in: [src/lib/entity/monitor/monitors.ts:225](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitors.ts#L225)

全てのMonitorを描画する

#### Returns

`void`

#### Implementation of

[`IMonitors`](../../../../../type/entity/monitor/interfaces/IMonitors.md).[`draw`](../../../../../type/entity/monitor/interfaces/IMonitors.md#draw)

***

### get()

> **get**(`monitorId`): [`IMonitor`](../../../../../type/entity/monitor/monitor/interfaces/IMonitor.md)

Defined in: [src/lib/entity/monitor/monitors.ts:186](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitors.ts#L186)

指定したIDのモニターを返す

#### Parameters

##### monitorId

`string`

{string}

#### Returns

[`IMonitor`](../../../../../type/entity/monitor/monitor/interfaces/IMonitor.md)

#### Implementation of

[`IMonitors`](../../../../../type/entity/monitor/interfaces/IMonitors.md).[`get`](../../../../../type/entity/monitor/interfaces/IMonitors.md#get)

***

### hide()

> **hide**(`monitorId`): `void`

Defined in: [src/lib/entity/monitor/monitors.ts:212](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitors.ts#L212)

指定したIDのモニターを隠す

#### Parameters

##### monitorId

`string`

{string}

#### Returns

`void`

#### Implementation of

[`IMonitors`](../../../../../type/entity/monitor/interfaces/IMonitors.md).[`hide`](../../../../../type/entity/monitor/interfaces/IMonitors.md#hide)

***

### reposition()

> **reposition**(): `void`

Defined in: [src/lib/entity/monitor/monitors.ts:108](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitors.ts#L108)

表示中のモニターを選び再配置する

#### Returns

`void`

#### Implementation of

[`IMonitors`](../../../../../type/entity/monitor/interfaces/IMonitors.md).[`reposition`](../../../../../type/entity/monitor/interfaces/IMonitors.md#reposition)

***

### show()

> **show**(`monitorId`): `void`

Defined in: [src/lib/entity/monitor/monitors.ts:198](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitors.ts#L198)

指定したIDのモニターを表示する

#### Parameters

##### monitorId

`string`

#### Returns

`void`

#### Implementation of

[`IMonitors`](../../../../../type/entity/monitor/interfaces/IMonitors.md).[`show`](../../../../../type/entity/monitor/interfaces/IMonitors.md#show)

***

### addVar()

> `static` **addVar**(`vars`): `void`

Defined in: [src/lib/entity/monitor/monitors.ts:22](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitors.ts#L22)

#### Parameters

##### vars

[`MonitoringVars`](../../../../../type/entity/monitor/monitoring/type-aliases/MonitoringVars.md)

#### Returns

`void`

***

### allReposition()

> `static` **allReposition**(): `void`

Defined in: [src/lib/entity/monitor/monitors.ts:26](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitors.ts#L26)

#### Returns

`void`

***

### drawMonitors()

> `static` **drawMonitors**(): `void`

Defined in: [src/lib/entity/monitor/monitors.ts:42](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitors.ts#L42)

#### Returns

`void`

***

### getMonitor()

> `static` **getMonitor**(`monitorId`): [`IMonitor`](../../../../../type/entity/monitor/monitor/interfaces/IMonitor.md)

Defined in: [src/lib/entity/monitor/monitors.ts:30](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitors.ts#L30)

#### Parameters

##### monitorId

`string`

#### Returns

[`IMonitor`](../../../../../type/entity/monitor/monitor/interfaces/IMonitor.md)

***

### hideMonitor()

> `static` **hideMonitor**(`monitorId`): `void`

Defined in: [src/lib/entity/monitor/monitors.ts:38](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitors.ts#L38)

#### Parameters

##### monitorId

`string`

#### Returns

`void`

***

### showMonitor()

> `static` **showMonitor**(`monitorId`): `void`

Defined in: [src/lib/entity/monitor/monitors.ts:34](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/monitor/monitors.ts#L34)

#### Parameters

##### monitorId

`string`

#### Returns

`void`
