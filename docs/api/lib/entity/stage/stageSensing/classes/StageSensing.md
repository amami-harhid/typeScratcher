# Class: StageSensing

Defined in: [src/lib/entity/stage/stageSensing.ts:13](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/stage/stageSensing.ts#L13)

Stage Sensing(調べる)

## Implements

- [`IStageSensing`](../../../../../type/entity/stage/IStageSensing/type-aliases/IStageSensing.md)

## Constructors

### Constructor

> **new StageSensing**(`entity`): `StageSensing`

Defined in: [src/lib/entity/stage/stageSensing.ts:22](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/stage/stageSensing.ts#L22)

**`Internal`**

#### Parameters

##### entity

[`IStage`](../../../../../type/entity/stage/interfaces/IStage.md)

{IStage}

#### Returns

`StageSensing`

## Accessors

### keyboard

#### Get Signature

> **get** **keyboard**(): [`IEntitySensingKey`](../../../../../type/entity/entity/IEntitySensingKey/interfaces/IEntitySensingKey.md)

Defined in: [src/lib/entity/stage/stageSensing.ts:44](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/stage/stageSensing.ts#L44)

Key 関連

##### Returns

[`IEntitySensingKey`](../../../../../type/entity/entity/IEntitySensingKey/interfaces/IEntitySensingKey.md)

#### Implementation of

`IStageSensing.keyboard`

***

### mouse

#### Get Signature

> **get** **mouse**(): [`IEntitySensingMouse`](../../../../../type/entity/entity/IEntitySensingMouse/interfaces/IEntitySensingMouse.md)

Defined in: [src/lib/entity/stage/stageSensing.ts:50](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/stage/stageSensing.ts#L50)

マウス関連

##### Returns

[`IEntitySensingMouse`](../../../../../type/entity/entity/IEntitySensingMouse/interfaces/IEntitySensingMouse.md)

#### Implementation of

`IStageSensing.mouse`

***

### timer

#### Get Signature

> **get** **timer**(): [`IEntitySensingTimer`](../../../../../type/entity/entity/IEntitySensingTimer/interfaces/IEntitySensingTimer.md)

Defined in: [src/lib/entity/stage/stageSensing.ts:56](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/stage/stageSensing.ts#L56)

タイマー関連

##### Returns

[`IEntitySensingTimer`](../../../../../type/entity/entity/IEntitySensingTimer/interfaces/IEntitySensingTimer.md)

#### Implementation of

`IStageSensing.timer`

## Methods

### askAndWait()

> **askAndWait**(`question`): `Promise`\<`string`\>

Defined in: [src/lib/entity/stage/stageSensing.ts:33](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/stage/stageSensing.ts#L33)

質問をする

#### Parameters

##### question

`string`

{string} - 質問テキスト

#### Returns

`Promise`\<`string`\>

- answer

#### Implementation of

`IStageSensing.askAndWait`
