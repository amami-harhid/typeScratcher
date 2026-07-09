# Interface: SVariable

Defined in: [src/type/entity/monitor/SVariable.ts:6](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/SVariable.ts#L6)

変数格納プロキシ生成

## Methods

### monitoring()

> **monitoring**(`variable`): `void`

Defined in: [src/type/entity/monitor/SVariable.ts:23](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/SVariable.ts#L23)

モニタリングする

#### Parameters

##### variable

[`MonitoringVars`](../../monitoring/type-aliases/MonitoringVars.md)

#### Returns

`void`

***

### number()

> **number**(`value`): [`NumberProxy`](../../monitoring/interfaces/NumberProxy.md)

Defined in: [src/type/entity/monitor/SVariable.ts:12](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/SVariable.ts#L12)

数値プロキシ生成

#### Parameters

##### value

`number`

#### Returns

[`NumberProxy`](../../monitoring/interfaces/NumberProxy.md)

***

### reposition()

> **reposition**(): `void`

Defined in: [src/type/entity/monitor/SVariable.ts:28](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/SVariable.ts#L28)

表示中のモニター枠を再配置する

#### Returns

`void`

***

### string()

> **string**(`text`): [`StringProxy`](../../monitoring/interfaces/StringProxy.md)

Defined in: [src/type/entity/monitor/SVariable.ts:17](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/monitor/SVariable.ts#L17)

文字列プロキシ生成

#### Parameters

##### text

`string`

#### Returns

[`StringProxy`](../../monitoring/interfaces/StringProxy.md)
