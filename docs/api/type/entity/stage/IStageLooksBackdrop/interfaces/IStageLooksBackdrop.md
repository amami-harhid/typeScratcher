# Interface: IStageLooksBackdrop

Defined in: [src/type/entity/stage/IStageLooksBackdrop.ts:6](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/stage/IStageLooksBackdrop.ts#L6)

StageBackdrop

## Extends

- [`IEntityLooksBackdrop`](../../../entity/IEntityLooksBackdrop/interfaces/IEntityLooksBackdrop.md)

## Properties

### currentSkinId

> `readonly` **currentSkinId**: `number`

Defined in: [src/type/entity/stage/IStageLooksBackdrop.ts:11](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/stage/IStageLooksBackdrop.ts#L11)

現在のSkinID

## Accessors

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [src/type/entity/entity/IEntityLooksBackdrop.ts:26](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/entity/IEntityLooksBackdrop.ts#L26)

背景名
```ts
 // 背景名
 const name = this.Looks.Backdrop.name;
```

##### Returns

`string`

#### Set Signature

> **set** **name**(`backdropName`): `void`

Defined in: [src/type/entity/entity/IEntityLooksBackdrop.ts:34](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/entity/IEntityLooksBackdrop.ts#L34)

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

#### Inherited from

[`IEntityLooksBackdrop`](../../../entity/IEntityLooksBackdrop/interfaces/IEntityLooksBackdrop.md).[`name`](../../../entity/IEntityLooksBackdrop/interfaces/IEntityLooksBackdrop.md#name)

***

### no

#### Get Signature

> **get** **no**(): `number`

Defined in: [src/type/entity/entity/IEntityLooksBackdrop.ts:10](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/entity/IEntityLooksBackdrop.ts#L10)

背景番号
```ts
 // 背景番号
 const no = this.Looks.Backdrop.no;
```

##### Returns

`number`

#### Set Signature

> **set** **no**(`no`): `void`

Defined in: [src/type/entity/entity/IEntityLooksBackdrop.ts:18](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/entity/IEntityLooksBackdrop.ts#L18)

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

#### Inherited from

[`IEntityLooksBackdrop`](../../../entity/IEntityLooksBackdrop/interfaces/IEntityLooksBackdrop.md).[`no`](../../../entity/IEntityLooksBackdrop/interfaces/IEntityLooksBackdrop.md#no)

## Methods

### next()

> **next**(): `void`

Defined in: [src/type/entity/entity/IEntityLooksBackdrop.ts:41](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/entity/IEntityLooksBackdrop.ts#L41)

次の背景にする
```ts
 this.Looks.Backdrop.next();
```

#### Returns

`void`

#### Inherited from

[`IEntityLooksBackdrop`](../../../entity/IEntityLooksBackdrop/interfaces/IEntityLooksBackdrop.md).[`next`](../../../entity/IEntityLooksBackdrop/interfaces/IEntityLooksBackdrop.md#next)

***

### nextAndWait()

> **nextAndWait**(): `Promise`\<`void`\>

Defined in: [src/type/entity/entity/IEntityLooksBackdrop.ts:45](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/entity/IEntityLooksBackdrop.ts#L45)

次の背景にして待つ

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IEntityLooksBackdrop`](../../../entity/IEntityLooksBackdrop/interfaces/IEntityLooksBackdrop.md).[`nextAndWait`](../../../entity/IEntityLooksBackdrop/interfaces/IEntityLooksBackdrop.md#nextandwait)

***

### previous()

> **previous**(): `void`

Defined in: [src/type/entity/entity/IEntityLooksBackdrop.ts:52](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/entity/IEntityLooksBackdrop.ts#L52)

前の背景にする
```ts
 this.Looks.Backdrop.previous();
```

#### Returns

`void`

#### Inherited from

[`IEntityLooksBackdrop`](../../../entity/IEntityLooksBackdrop/interfaces/IEntityLooksBackdrop.md).[`previous`](../../../entity/IEntityLooksBackdrop/interfaces/IEntityLooksBackdrop.md#previous)

***

### previousAndWait()

> **previousAndWait**(): `Promise`\<`void`\>

Defined in: [src/type/entity/entity/IEntityLooksBackdrop.ts:56](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/entity/IEntityLooksBackdrop.ts#L56)

前の背景にして待つ

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IEntityLooksBackdrop`](../../../entity/IEntityLooksBackdrop/interfaces/IEntityLooksBackdrop.md).[`previousAndWait`](../../../entity/IEntityLooksBackdrop/interfaces/IEntityLooksBackdrop.md#previousandwait)

***

### switchAndWait()

> **switchAndWait**(`backdropName`): `Promise`\<`void`\>

Defined in: [src/type/entity/entity/IEntityLooksBackdrop.ts:69](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/entity/IEntityLooksBackdrop.ts#L69)

背景を変えて待つ

#### Parameters

##### backdropName

`string`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IEntityLooksBackdrop`](../../../entity/IEntityLooksBackdrop/interfaces/IEntityLooksBackdrop.md).[`switchAndWait`](../../../entity/IEntityLooksBackdrop/interfaces/IEntityLooksBackdrop.md#switchandwait)

***

### switchRandom()

> **switchRandom**(): `void`

Defined in: [src/type/entity/entity/IEntityLooksBackdrop.ts:60](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/entity/IEntityLooksBackdrop.ts#L60)

どれかの背景にする

#### Returns

`void`

#### Inherited from

[`IEntityLooksBackdrop`](../../../entity/IEntityLooksBackdrop/interfaces/IEntityLooksBackdrop.md).[`switchRandom`](../../../entity/IEntityLooksBackdrop/interfaces/IEntityLooksBackdrop.md#switchrandom)

***

### switchRandomAndWait()

> **switchRandomAndWait**(): `Promise`\<`void`\>

Defined in: [src/type/entity/entity/IEntityLooksBackdrop.ts:64](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/type/entity/entity/IEntityLooksBackdrop.ts#L64)

どれかの背景にして待つ

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IEntityLooksBackdrop`](../../../entity/IEntityLooksBackdrop/interfaces/IEntityLooksBackdrop.md).[`switchRandomAndWait`](../../../entity/IEntityLooksBackdrop/interfaces/IEntityLooksBackdrop.md#switchrandomandwait)
