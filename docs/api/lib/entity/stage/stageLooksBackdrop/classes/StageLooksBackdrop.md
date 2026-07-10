# Class: StageLooksBackdrop

Defined in: [src/lib/entity/stage/stageLooksBackdrop.ts:8](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/stage/stageLooksBackdrop.ts#L8)

サイズ

## Extends

- [`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md)

## Implements

- [`IStageLooksBackdrop`](../../../../../type/entity/stage/IStageLooksBackdrop/interfaces/IStageLooksBackdrop.md)

## Constructors

### Constructor

> **new StageLooksBackdrop**(`entity`): `StageLooksBackdrop`

Defined in: [src/lib/entity/stage/stageLooksBackdrop.ts:14](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/stage/stageLooksBackdrop.ts#L14)

**`Internal`**

#### Parameters

##### entity

[`IStage`](../../../../../type/entity/stage/interfaces/IStage.md)

{IStage}

#### Returns

`StageLooksBackdrop`

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`constructor`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#constructor)

## Properties

### currentBackdropNo

> **currentBackdropNo**: `number` = `-1`

Defined in: [src/lib/entity/entity/entityBackdrop.ts:18](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/entity/entityBackdrop.ts#L18)

#### Inherited from

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`currentBackdropNo`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#currentbackdropno)

## Accessors

### currentSkinId

#### Get Signature

> **get** **currentSkinId**(): `number`

Defined in: [src/lib/entity/entity/entityBackdrop.ts:74](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/entity/entityBackdrop.ts#L74)

使用中のSkinId

##### Returns

`number`

現在のSkinID

#### Implementation of

[`IStageLooksBackdrop`](../../../../../type/entity/stage/IStageLooksBackdrop/interfaces/IStageLooksBackdrop.md).[`currentSkinId`](../../../../../type/entity/stage/IStageLooksBackdrop/interfaces/IStageLooksBackdrop.md#currentskinid)

#### Inherited from

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`currentSkinId`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#currentskinid)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [src/lib/entity/stage/stageLooksBackdrop.ts:44](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/stage/stageLooksBackdrop.ts#L44)

背景名
```ts
 // 背景名
 const name = this.Looks.Backdrop.name;
```

##### Returns

`string`

#### Set Signature

> **set** **name**(`name`): `void`

Defined in: [src/lib/entity/stage/stageLooksBackdrop.ts:55](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/stage/stageLooksBackdrop.ts#L55)

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

#### Implementation of

[`IStageLooksBackdrop`](../../../../../type/entity/stage/IStageLooksBackdrop/interfaces/IStageLooksBackdrop.md).[`name`](../../../../../type/entity/stage/IStageLooksBackdrop/interfaces/IStageLooksBackdrop.md#name)

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`name`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#name)

***

### names

#### Get Signature

> **get** **names**(): `string`[]

Defined in: [src/lib/entity/entity/entityBackdrop.ts:39](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/entity/entityBackdrop.ts#L39)

背景名の配列

##### Returns

`string`[]

#### Inherited from

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`names`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#names)

***

### no

#### Get Signature

> **get** **no**(): `number`

Defined in: [src/lib/entity/stage/stageLooksBackdrop.ts:24](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/stage/stageLooksBackdrop.ts#L24)

背景番号
```ts
 // 背景番号
 const no = this.Looks.Backdrop.no;
```

##### Returns

`number`

#### Set Signature

> **set** **no**(`no`): `void`

Defined in: [src/lib/entity/stage/stageLooksBackdrop.ts:34](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/stage/stageLooksBackdrop.ts#L34)

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

#### Implementation of

[`IStageLooksBackdrop`](../../../../../type/entity/stage/IStageLooksBackdrop/interfaces/IStageLooksBackdrop.md).[`no`](../../../../../type/entity/stage/IStageLooksBackdrop/interfaces/IStageLooksBackdrop.md#no)

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`no`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#no)

## Methods

### add()

> **add**(`images`): `void`

Defined in: [src/lib/entity/entity/entityBackdrop.ts:26](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/entity/entityBackdrop.ts#L26)

#### Parameters

##### images

[`IImage`](../../../../../type/image/interfaces/IImage.md)[]

#### Returns

`void`

#### Inherited from

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`add`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#add)

***

### next()

> **next**(): `void`

Defined in: [src/lib/entity/stage/stageLooksBackdrop.ts:73](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/stage/stageLooksBackdrop.ts#L73)

次の背景にする
```ts
 this.Looks.Backdrop.nextBackdrop();
```

#### Returns

`void`

#### Implementation of

[`IStageLooksBackdrop`](../../../../../type/entity/stage/IStageLooksBackdrop/interfaces/IStageLooksBackdrop.md).[`next`](../../../../../type/entity/stage/IStageLooksBackdrop/interfaces/IStageLooksBackdrop.md#next)

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`next`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#next)

***

### nextAndWait()

> **nextAndWait**(): `Promise`\<`void`\>

Defined in: [src/lib/entity/stage/stageLooksBackdrop.ts:80](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/stage/stageLooksBackdrop.ts#L80)

次の背景にして待つ

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IStageLooksBackdrop`](../../../../../type/entity/stage/IStageLooksBackdrop/interfaces/IStageLooksBackdrop.md).[`nextAndWait`](../../../../../type/entity/stage/IStageLooksBackdrop/interfaces/IStageLooksBackdrop.md#nextandwait)

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`nextAndWait`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#nextandwait)

***

### previous()

> **previous**(): `void`

Defined in: [src/lib/entity/stage/stageLooksBackdrop.ts:87](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/stage/stageLooksBackdrop.ts#L87)

前の背景にする

#### Returns

`void`

#### Implementation of

[`IStageLooksBackdrop`](../../../../../type/entity/stage/IStageLooksBackdrop/interfaces/IStageLooksBackdrop.md).[`previous`](../../../../../type/entity/stage/IStageLooksBackdrop/interfaces/IStageLooksBackdrop.md#previous)

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`previous`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#previous)

***

### previousAndWait()

> **previousAndWait**(): `Promise`\<`void`\>

Defined in: [src/lib/entity/stage/stageLooksBackdrop.ts:95](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/stage/stageLooksBackdrop.ts#L95)

前の背景にして待つ。

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IStageLooksBackdrop`](../../../../../type/entity/stage/IStageLooksBackdrop/interfaces/IStageLooksBackdrop.md).[`previousAndWait`](../../../../../type/entity/stage/IStageLooksBackdrop/interfaces/IStageLooksBackdrop.md#previousandwait)

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`previousAndWait`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#previousandwait)

***

### switchAndWait()

> **switchAndWait**(`backdropName`): `Promise`\<`void`\>

Defined in: [src/lib/entity/stage/stageLooksBackdrop.ts:63](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/stage/stageLooksBackdrop.ts#L63)

背景を切り替えて待つ

#### Parameters

##### backdropName

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IStageLooksBackdrop`](../../../../../type/entity/stage/IStageLooksBackdrop/interfaces/IStageLooksBackdrop.md).[`switchAndWait`](../../../../../type/entity/stage/IStageLooksBackdrop/interfaces/IStageLooksBackdrop.md#switchandwait)

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`switchAndWait`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#switchandwait)

***

### switchRandom()

> **switchRandom**(): `void`

Defined in: [src/lib/entity/stage/stageLooksBackdrop.ts:102](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/stage/stageLooksBackdrop.ts#L102)

どれかの背景にする

#### Returns

`void`

#### Implementation of

[`IStageLooksBackdrop`](../../../../../type/entity/stage/IStageLooksBackdrop/interfaces/IStageLooksBackdrop.md).[`switchRandom`](../../../../../type/entity/stage/IStageLooksBackdrop/interfaces/IStageLooksBackdrop.md#switchrandom)

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`switchRandom`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#switchrandom)

***

### switchRandomAndWait()

> **switchRandomAndWait**(): `Promise`\<`void`\>

Defined in: [src/lib/entity/stage/stageLooksBackdrop.ts:110](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/stage/stageLooksBackdrop.ts#L110)

どれかの背景にして待つ

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IStageLooksBackdrop`](../../../../../type/entity/stage/IStageLooksBackdrop/interfaces/IStageLooksBackdrop.md).[`switchRandomAndWait`](../../../../../type/entity/stage/IStageLooksBackdrop/interfaces/IStageLooksBackdrop.md#switchrandomandwait)

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`switchRandomAndWait`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#switchrandomandwait)

***

### untilBackdropEventDone()

> **untilBackdropEventDone**(`backdropName`): `Promise`\<`void`\>

Defined in: [src/lib/entity/entity/entityBackdrop.ts:204](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/entity/entityBackdrop.ts#L204)

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

Defined in: [src/lib/entity/entity/entityBackdrop.ts:246](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/entity/entityBackdrop.ts#L246)

#### Parameters

##### backdropName

`string`

#### Returns

`string`

#### Inherited from

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`getBackdropChangeMessageId`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#getbackdropchangemessageid)
