# Class: StageLooks

Defined in: [src/lib/entity/stage/stageLooks.ts:9](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/stage/stageLooks.ts#L9)

Sprite Looks(見た目)

## Extends

- [`EntityLooks`](../../../entity/entityLooks/classes/EntityLooks.md)

## Implements

- [`IStageLooks`](../../../../../type/entity/stage/IStageLooks/interfaces/IStageLooks.md)

## Constructors

### Constructor

> **new StageLooks**(`entity`): `StageLooks`

Defined in: [src/lib/entity/stage/stageLooks.ts:15](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/stage/stageLooks.ts#L15)

**`Internal`**

#### Parameters

##### entity

[`IStage`](../../../../../type/entity/stage/interfaces/IStage.md)

{IStage}

#### Returns

`StageLooks`

#### Overrides

[`EntityLooks`](../../../entity/entityLooks/classes/EntityLooks.md).[`constructor`](../../../entity/entityLooks/classes/EntityLooks.md#constructor)

## Accessors

### backdrop

#### Get Signature

> **get** **backdrop**(): [`IStageLooksBackdrop`](../../../../../type/entity/stage/IStageLooksBackdrop/interfaces/IStageLooksBackdrop.md)

Defined in: [src/lib/entity/stage/stageLooks.ts:22](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/stage/stageLooks.ts#L22)

背景番号、背景名を取り出すためのオブジェクト

##### Returns

[`IStageLooksBackdrop`](../../../../../type/entity/stage/IStageLooksBackdrop/interfaces/IStageLooksBackdrop.md)

背景

#### Implementation of

[`IStageLooks`](../../../../../type/entity/stage/IStageLooks/interfaces/IStageLooks.md).[`backdrop`](../../../../../type/entity/stage/IStageLooks/interfaces/IStageLooks.md#backdrop)

***

### effect

#### Get Signature

> **get** **effect**(): [`IEntityEffect`](../../../../../type/entity/entity/IEntityEffect/interfaces/IEntityEffect.md)

Defined in: [src/lib/entity/entity/entityLooks.ts:22](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/entityLooks.ts#L22)

##### Returns

[`IEntityEffect`](../../../../../type/entity/entity/IEntityEffect/interfaces/IEntityEffect.md)

#### Implementation of

[`IStageLooks`](../../../../../type/entity/stage/IStageLooks/interfaces/IStageLooks.md).[`effect`](../../../../../type/entity/stage/IStageLooks/interfaces/IStageLooks.md#effect)

#### Inherited from

[`EntityLooks`](../../../entity/entityLooks/classes/EntityLooks.md).[`effect`](../../../entity/entityLooks/classes/EntityLooks.md#effect)
