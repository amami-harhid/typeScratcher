# Class: SpriteLooksCostume

Defined in: [src/lib/entity/sprite/spriteLooksCostume.ts:8](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/spriteLooksCostume.ts#L8)

サイズ

## Implements

- [`ISpriteLooksCostume`](../../../../../type/entity/sprite/ISpriteLooksCostume/interfaces/ISpriteLooksCostume.md)

## Constructors

### Constructor

> **new SpriteLooksCostume**(`entity`): `SpriteLooksCostume`

Defined in: [src/lib/entity/sprite/spriteLooksCostume.ts:16](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/spriteLooksCostume.ts#L16)

**`Internal`**

#### Parameters

##### entity

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

{ISprite}

#### Returns

`SpriteLooksCostume`

## Properties

### currentConstumeNo

> **currentConstumeNo**: `number` = `-1`

Defined in: [src/lib/entity/sprite/spriteLooksCostume.ts:11](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/spriteLooksCostume.ts#L11)

## Accessors

### currentSkinId

#### Get Signature

> **get** **currentSkinId**(): `number`

Defined in: [src/lib/entity/sprite/spriteLooksCostume.ts:51](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/spriteLooksCostume.ts#L51)

使用中のSkinId

##### Returns

`number`

#### Implementation of

[`ISpriteLooksCostume`](../../../../../type/entity/sprite/ISpriteLooksCostume/interfaces/ISpriteLooksCostume.md).[`currentSkinId`](../../../../../type/entity/sprite/ISpriteLooksCostume/interfaces/ISpriteLooksCostume.md#currentskinid)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [src/lib/entity/sprite/spriteLooksCostume.ts:69](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/spriteLooksCostume.ts#L69)

コスチューム名
```ts
 // コスチューム名
 const name = this.Looks.Costume.name;
```

##### Returns

`string`

#### Set Signature

> **set** **name**(`name`): `void`

Defined in: [src/lib/entity/sprite/spriteLooksCostume.ts:82](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/spriteLooksCostume.ts#L82)

コスチューム名
```ts
 // コスチューム名
 this.Looks.Costume.name = "Cat01";
```

##### Parameters

###### name

`string`

##### Returns

`void`

#### Implementation of

[`ISpriteLooksCostume`](../../../../../type/entity/sprite/ISpriteLooksCostume/interfaces/ISpriteLooksCostume.md).[`name`](../../../../../type/entity/sprite/ISpriteLooksCostume/interfaces/ISpriteLooksCostume.md#name)

***

### no

#### Get Signature

> **get** **no**(): `number`

Defined in: [src/lib/entity/sprite/spriteLooksCostume.ts:26](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/spriteLooksCostume.ts#L26)

コスチューム番号
```ts
 // コスチューム番号
 const no = this.Looks.Costume.no;
```

##### Returns

`number`

#### Set Signature

> **set** **no**(`no`): `void`

Defined in: [src/lib/entity/sprite/spriteLooksCostume.ts:37](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/spriteLooksCostume.ts#L37)

コスチューム番号
```ts
 // コスチューム番号
 this.Looks.Costume.no = 1;
```

##### Parameters

###### no

`number`

##### Returns

`void`

#### Implementation of

[`ISpriteLooksCostume`](../../../../../type/entity/sprite/ISpriteLooksCostume/interfaces/ISpriteLooksCostume.md).[`no`](../../../../../type/entity/sprite/ISpriteLooksCostume/interfaces/ISpriteLooksCostume.md#no)

## Methods

### next()

> **next**(): `void`

Defined in: [src/lib/entity/sprite/spriteLooksCostume.ts:100](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/spriteLooksCostume.ts#L100)

次のコスチュームにする
```ts
 this.Looks.Costume.next();
``

#### Returns

`void`

#### Implementation of

[`ISpriteLooksCostume`](../../../../../type/entity/sprite/ISpriteLooksCostume/interfaces/ISpriteLooksCostume.md).[`next`](../../../../../type/entity/sprite/ISpriteLooksCostume/interfaces/ISpriteLooksCostume.md#next)
