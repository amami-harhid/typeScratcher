# Class: EntityFont

Defined in: [src/lib/entity/entity/entityFont.ts:9](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/entityFont.ts#L9)

Entity フォント

## Implements

- [`IEntityFont`](../../../../../type/entity/entity/IEntityFont/interfaces/IEntityFont.md)

## Constructors

### Constructor

> **new EntityFont**(`entity`): `EntityFont`

Defined in: [src/lib/entity/entity/entityFont.ts:17](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/entityFont.ts#L17)

**`Internal`**

#### Parameters

##### entity

[`IEntity`](../../../../../type/entity/entity/interfaces/IEntity.md)

{IEntity}

#### Returns

`EntityFont`

## Accessors

### fonts

#### Get Signature

> **get** **fonts**(): [`IFont`](../../../../../type/font/interfaces/IFont.md)[]

Defined in: [src/lib/entity/entity/entityFont.ts:26](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/entityFont.ts#L26)

フォントを取得する

##### Returns

[`IFont`](../../../../../type/font/interfaces/IFont.md)[]

フォントを取得する

#### Implementation of

[`IEntityFont`](../../../../../type/entity/entity/IEntityFont/interfaces/IEntityFont.md).[`fonts`](../../../../../type/entity/entity/IEntityFont/interfaces/IEntityFont.md#fonts)

***

### names

#### Get Signature

> **get** **names**(): `string`[]

Defined in: [src/lib/entity/entity/entityFont.ts:29](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/entityFont.ts#L29)

追加されている画像名を配列で受け取る

##### Returns

`string`[]

追加されている画像名を配列で受け取る

#### Implementation of

[`IEntityFont`](../../../../../type/entity/entity/IEntityFont/interfaces/IEntityFont.md).[`names`](../../../../../type/entity/entity/IEntityFont/interfaces/IEntityFont.md#names)

## Methods

### add()

> **add**(`fonts`): `void`

Defined in: [src/lib/entity/entity/entityFont.ts:21](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/entityFont.ts#L21)

フォントを追加する

#### Parameters

##### fonts

[`IFont`](../../../../../type/font/interfaces/IFont.md)[]

#### Returns

`void`

#### Implementation of

[`IEntityFont`](../../../../../type/entity/entity/IEntityFont/interfaces/IEntityFont.md).[`add`](../../../../../type/entity/entity/IEntityFont/interfaces/IEntityFont.md#add)

***

### imageLoadCompleteAll()

> **imageLoadCompleteAll**(): `boolean`

Defined in: [src/lib/entity/entity/entityFont.ts:36](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/entity/entityFont.ts#L36)

#### Returns

`boolean`
