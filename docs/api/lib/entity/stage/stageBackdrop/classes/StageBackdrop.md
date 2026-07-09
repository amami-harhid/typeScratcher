# Class: StageBackdrop

Defined in: [src/lib/entity/stage/stageBackdrop.ts:7](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/stage/stageBackdrop.ts#L7)

サイズ

## Extends

- [`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md)

## Implements

- [`IStageBackdrop`](../../../../../type/entity/stage/IStageBackdrop/interfaces/IStageBackdrop.md)

## Constructors

### Constructor

> **new StageBackdrop**(`entity`): `StageBackdrop`

Defined in: [src/lib/entity/stage/stageBackdrop.ts:13](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/stage/stageBackdrop.ts#L13)

**`Internal`**

#### Parameters

##### entity

[`IStage`](../../../../../type/entity/stage/interfaces/IStage.md)

{IStage}

#### Returns

`StageBackdrop`

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`constructor`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#constructor)

## Properties

### currentBackdropNo

> **currentBackdropNo**: `number` = `-1`

Defined in: [src/lib/entity/entity/entityBackdrop.ts:18](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/entity/entityBackdrop.ts#L18)

#### Inherited from

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`currentBackdropNo`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#currentbackdropno)

## Accessors

### currentSkinId

#### Get Signature

> **get** **currentSkinId**(): `number`

Defined in: [src/lib/entity/entity/entityBackdrop.ts:74](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/entity/entityBackdrop.ts#L74)

使用中のSkinId

##### Returns

`number`

#### Inherited from

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`currentSkinId`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#currentskinid)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [src/lib/entity/stage/stageBackdrop.ts:49](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/stage/stageBackdrop.ts#L49)

背景名
```ts
 // 背景名
 const name = this.Looks.Backdrop.name;
```

##### Returns

`string`

#### Set Signature

> **set** **name**(`name`): `void`

Defined in: [src/lib/entity/stage/stageBackdrop.ts:59](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/stage/stageBackdrop.ts#L59)

背景名
```ts
 // 背景名
 this.Looks.Backdrop.name = "backdrop";
```

##### Parameters

###### name

`string`

##### Returns

`void`

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`name`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#name)

***

### names

#### Get Signature

> **get** **names**(): `string`[]

Defined in: [src/lib/entity/stage/stageBackdrop.ts:19](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/stage/stageBackdrop.ts#L19)

背景名の配列

##### Returns

`string`[]

コスチューム名 配列

#### Implementation of

[`IStageBackdrop`](../../../../../type/entity/stage/IStageBackdrop/interfaces/IStageBackdrop.md).[`names`](../../../../../type/entity/stage/IStageBackdrop/interfaces/IStageBackdrop.md#names)

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`names`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#names)

***

### no

#### Get Signature

> **get** **no**(): `number`

Defined in: [src/lib/entity/stage/stageBackdrop.ts:29](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/stage/stageBackdrop.ts#L29)

背景番号
```ts
 // 背景番号
 const no = this.Looks.Backdrop.no;
```

##### Returns

`number`

#### Set Signature

> **set** **no**(`no`): `void`

Defined in: [src/lib/entity/stage/stageBackdrop.ts:39](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/stage/stageBackdrop.ts#L39)

背景番号
```ts
 // 背景番号
 this.Looks.Backdrop.no = 1;
```

##### Parameters

###### no

`number`

##### Returns

`void`

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`no`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#no)

## Methods

### add()

> **add**(`images`): `void`

Defined in: [src/lib/entity/entity/entityBackdrop.ts:26](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/entity/entityBackdrop.ts#L26)

イメージを追加する

#### Parameters

##### images

[`IImage`](../../../../../type/image/interfaces/IImage.md)[]

#### Returns

`void`

#### Implementation of

[`IStageBackdrop`](../../../../../type/entity/stage/IStageBackdrop/interfaces/IStageBackdrop.md).[`add`](../../../../../type/entity/stage/IStageBackdrop/interfaces/IStageBackdrop.md#add)

#### Inherited from

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`add`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#add)

***

### next()

> **next**(): `void`

Defined in: [src/lib/entity/stage/stageBackdrop.ts:75](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/stage/stageBackdrop.ts#L75)

次の背景にする
```ts
 this.Looks.Backdrop.nextBackdrop();
```

#### Returns

`void`

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`next`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#next)

***

### nextAndWait()

> **nextAndWait**(): `Promise`\<`void`\>

Defined in: [src/lib/entity/stage/stageBackdrop.ts:81](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/stage/stageBackdrop.ts#L81)

次の背景にして待つ

#### Returns

`Promise`\<`void`\>

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`nextAndWait`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#nextandwait)

***

### previous()

> **previous**(): `void`

Defined in: [src/lib/entity/stage/stageBackdrop.ts:87](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/stage/stageBackdrop.ts#L87)

前の背景にする

#### Returns

`void`

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`previous`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#previous)

***

### previousAndWait()

> **previousAndWait**(): `Promise`\<`void`\>

Defined in: [src/lib/entity/stage/stageBackdrop.ts:94](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/stage/stageBackdrop.ts#L94)

前の背景にして待つ。

#### Returns

`Promise`\<`void`\>

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`previousAndWait`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#previousandwait)

***

### switchAndWait()

> **switchAndWait**(`backdropName`): `Promise`\<`void`\>

Defined in: [src/lib/entity/stage/stageBackdrop.ts:66](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/stage/stageBackdrop.ts#L66)

背景を切り替えて待つ

#### Parameters

##### backdropName

`string`

#### Returns

`Promise`\<`void`\>

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`switchAndWait`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#switchandwait)

***

### switchRandom()

> **switchRandom**(): `void`

Defined in: [src/lib/entity/stage/stageBackdrop.ts:100](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/stage/stageBackdrop.ts#L100)

どれかの背景にする

#### Returns

`void`

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`switchRandom`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#switchrandom)

***

### switchRandomAndWait()

> **switchRandomAndWait**(): `Promise`\<`void`\>

Defined in: [src/lib/entity/stage/stageBackdrop.ts:107](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/stage/stageBackdrop.ts#L107)

どれかの背景にして待つ

#### Returns

`Promise`\<`void`\>

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`switchRandomAndWait`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#switchrandomandwait)

***

### untilBackdropEventDone()

> **untilBackdropEventDone**(`backdropName`): `Promise`\<`void`\>

Defined in: [src/lib/entity/entity/entityBackdrop.ts:204](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/entity/entityBackdrop.ts#L204)

#### Parameters

##### backdropName

`string`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`untilBackdropEventDone`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#untilbackdropeventdone)

***

### getBackdropChangeMessageId()

> `static` **getBackdropChangeMessageId**(`backdropName`): `string`

Defined in: [src/lib/entity/entity/entityBackdrop.ts:246](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/entity/entityBackdrop.ts#L246)

#### Parameters

##### backdropName

`string`

#### Returns

`string`

#### Inherited from

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`getBackdropChangeMessageId`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#getbackdropchangemessageid)
