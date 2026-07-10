# Class: EntityBackdrop

Defined in: [src/lib/entity/entity/entityBackdrop.ts:15](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityBackdrop.ts#L15)

サイズ

## Extended by

- [`SpriteLooksBackdrop`](../../../sprite/spriteLooksBackdrop/classes/SpriteLooksBackdrop.md)
- [`StageBackdrop`](../../../stage/stageBackdrop/classes/StageBackdrop.md)
- [`StageLooksBackdrop`](../../../stage/stageLooksBackdrop/classes/StageLooksBackdrop.md)

## Implements

- [`IEntityBackdrop`](../../../../../type/entity/entity/IEntityBackdrop/interfaces/IEntityBackdrop.md)

## Constructors

### Constructor

> **new EntityBackdrop**(`entity`): `EntityBackdrop`

Defined in: [src/lib/entity/entity/entityBackdrop.ts:23](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityBackdrop.ts#L23)

**`Internal`**

#### Parameters

##### entity

[`IEntity`](../../../../../type/entity/entity/interfaces/IEntity.md)

{Stage}

#### Returns

`EntityBackdrop`

## Properties

### currentBackdropNo

> **currentBackdropNo**: `number` = `-1`

Defined in: [src/lib/entity/entity/entityBackdrop.ts:18](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityBackdrop.ts#L18)

## Accessors

### currentSkinId

#### Get Signature

> **get** **currentSkinId**(): `number`

Defined in: [src/lib/entity/entity/entityBackdrop.ts:74](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityBackdrop.ts#L74)

使用中のSkinId

##### Returns

`number`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [src/lib/entity/entity/entityBackdrop.ts:87](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityBackdrop.ts#L87)

背景名
```ts
 // 背景名
 const name = this.Looks.Backdrop.name;
```

##### Returns

`string`

#### Set Signature

> **set** **name**(`backdropName`): `void`

Defined in: [src/lib/entity/entity/entityBackdrop.ts:99](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityBackdrop.ts#L99)

背景名
```ts
 // 背景名
 this.Looks.Backdrop.name = "backdrop";
```

##### Parameters

###### backdropName

`string`

##### Returns

`void`

***

### names

#### Get Signature

> **get** **names**(): `string`[]

Defined in: [src/lib/entity/entity/entityBackdrop.ts:39](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityBackdrop.ts#L39)

背景名の配列

##### Returns

`string`[]

***

### no

#### Get Signature

> **get** **no**(): `number`

Defined in: [src/lib/entity/entity/entityBackdrop.ts:50](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityBackdrop.ts#L50)

背景番号
```ts
 // 背景番号
 const no = this.Looks.Backdrop.no;
```

##### Returns

`number`

#### Set Signature

> **set** **no**(`no`): `void`

Defined in: [src/lib/entity/entity/entityBackdrop.ts:60](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityBackdrop.ts#L60)

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

## Methods

### add()

> **add**(`images`): `void`

Defined in: [src/lib/entity/entity/entityBackdrop.ts:26](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityBackdrop.ts#L26)

#### Parameters

##### images

[`IImage`](../../../../../type/image/interfaces/IImage.md)[]

#### Returns

`void`

***

### next()

> **next**(): `void`

Defined in: [src/lib/entity/entity/entityBackdrop.ts:130](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityBackdrop.ts#L130)

次の背景にする
```ts
 this.Looks.Backdrop.nextBackdrop();
```

#### Returns

`void`

***

### nextAndWait()

> **nextAndWait**(): `Promise`\<`void`\>

Defined in: [src/lib/entity/entity/entityBackdrop.ts:149](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityBackdrop.ts#L149)

次の背景にして待つ

#### Returns

`Promise`\<`void`\>

***

### previous()

> **previous**(): `void`

Defined in: [src/lib/entity/entity/entityBackdrop.ts:157](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityBackdrop.ts#L157)

前の背景にする

#### Returns

`void`

***

### previousAndWait()

> **previousAndWait**(): `Promise`\<`void`\>

Defined in: [src/lib/entity/entity/entityBackdrop.ts:176](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityBackdrop.ts#L176)

前の背景にして待つ。

#### Returns

`Promise`\<`void`\>

***

### switchAndWait()

> **switchAndWait**(`backdropName`): `Promise`\<`void`\>

Defined in: [src/lib/entity/entity/entityBackdrop.ts:120](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityBackdrop.ts#L120)

背景を切り替えて待つ

#### Parameters

##### backdropName

`string`

#### Returns

`Promise`\<`void`\>

***

### switchRandom()

> **switchRandom**(): `void`

Defined in: [src/lib/entity/entity/entityBackdrop.ts:184](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityBackdrop.ts#L184)

どれかの背景にする

#### Returns

`void`

***

### switchRandomAndWait()

> **switchRandomAndWait**(): `Promise`\<`void`\>

Defined in: [src/lib/entity/entity/entityBackdrop.ts:198](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityBackdrop.ts#L198)

どれかの背景にして待つ

#### Returns

`Promise`\<`void`\>

***

### untilBackdropEventDone()

> **untilBackdropEventDone**(`backdropName`): `Promise`\<`void`\>

Defined in: [src/lib/entity/entity/entityBackdrop.ts:204](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityBackdrop.ts#L204)

#### Parameters

##### backdropName

`string`

#### Returns

`Promise`\<`void`\>

***

### getBackdropChangeMessageId()

> `static` **getBackdropChangeMessageId**(`backdropName`): `string`

Defined in: [src/lib/entity/entity/entityBackdrop.ts:246](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/entity/entityBackdrop.ts#L246)

#### Parameters

##### backdropName

`string`

#### Returns

`string`
