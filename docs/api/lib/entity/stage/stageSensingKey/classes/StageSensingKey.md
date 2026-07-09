# Class: StageSensingKey

Defined in: [src/lib/entity/stage/stageSensingKey.ts:8](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/stage/stageSensingKey.ts#L8)

Stage Sensing(調べる) Key

## Implements

- [`IEntitySensingKey`](../../../../../type/entity/entity/IEntitySensingKey/interfaces/IEntitySensingKey.md)

## Constructors

### Constructor

> **new StageSensingKey**(`entity`): `StageSensingKey`

Defined in: [src/lib/entity/stage/stageSensingKey.ts:14](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/stage/stageSensingKey.ts#L14)

**`Internal`**

#### Parameters

##### entity

[`IStage`](../../../../../type/entity/stage/interfaces/IStage.md)

{IStage}

#### Returns

`StageSensingKey`

## Methods

### isDown()

> **isDown**(`key`): `boolean`

Defined in: [src/lib/entity/stage/stageSensingKey.ts:23](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/stage/stageSensingKey.ts#L23)

キーが押されていることの判定

#### Parameters

##### key

`string`

{string}

#### Returns

`boolean`

キー押下判定

#### Implementation of

[`IEntitySensingKey`](../../../../../type/entity/entity/IEntitySensingKey/interfaces/IEntitySensingKey.md).[`isDown`](../../../../../type/entity/entity/IEntitySensingKey/interfaces/IEntitySensingKey.md#isdown)

***

### isNotDown()

> **isNotDown**(`key`): `boolean`

Defined in: [src/lib/entity/stage/stageSensingKey.ts:31](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/stage/stageSensingKey.ts#L31)

キーが押されていないことの判定

#### Parameters

##### key

`string`

{string}

#### Returns

`boolean`

キー押下判定

#### Implementation of

[`IEntitySensingKey`](../../../../../type/entity/entity/IEntitySensingKey/interfaces/IEntitySensingKey.md).[`isNotDown`](../../../../../type/entity/entity/IEntitySensingKey/interfaces/IEntitySensingKey.md#isnotdown)
