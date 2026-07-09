# Interface: IMonitors

Defined in: [src/type/entity/monitor/index.ts:40](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/monitor/index.ts#L40)

## Methods

### add()

> **add**(`vars`): `void`

Defined in: [src/type/entity/monitor/index.ts:47](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/monitor/index.ts#L47)

IDとラベルを指定して モニターを追加する.
IDが重複する場合は追加しない.

#### Parameters

##### vars

[`MonitoringVars`](../monitoring/type-aliases/MonitoringVars.md)

#### Returns

`void`

***

### draw()

> **draw**(): `void`

Defined in: [src/type/entity/monitor/index.ts:67](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/monitor/index.ts#L67)

全てのMonitorを描画する

#### Returns

`void`

***

### get()

> **get**(`monitorId`): [`IMonitor`](../monitor/interfaces/IMonitor.md)

Defined in: [src/type/entity/monitor/index.ts:53](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/monitor/index.ts#L53)

指定したIDのモニターを返す

#### Parameters

##### monitorId

`string`

{string}

#### Returns

[`IMonitor`](../monitor/interfaces/IMonitor.md)

***

### hide()

> **hide**(`monitorId`): `void`

Defined in: [src/type/entity/monitor/index.ts:63](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/monitor/index.ts#L63)

指定したIDのモニターを隠す

#### Parameters

##### monitorId

`string`

{string}

#### Returns

`void`

***

### reposition()

> **reposition**(): `void`

Defined in: [src/type/entity/monitor/index.ts:72](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/monitor/index.ts#L72)

モニターを再配置する

#### Returns

`void`

***

### show()

> **show**(`monitorId`): `void`

Defined in: [src/type/entity/monitor/index.ts:58](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/monitor/index.ts#L58)

指定したIDのモニターを表示する

#### Parameters

##### monitorId

`string`

#### Returns

`void`
