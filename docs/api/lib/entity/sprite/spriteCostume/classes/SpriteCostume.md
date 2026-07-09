# Class: SpriteCostume

Defined in: [src/lib/entity/sprite/spriteCostume.ts:8](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/spriteCostume.ts#L8)

サイズ

## Implements

- [`ISpriteCostume`](../../../../../type/entity/sprite/ISpriteCostume/interfaces/ISpriteCostume.md)

## Constructors

### Constructor

> **new SpriteCostume**(`entity`): `SpriteCostume`

Defined in: [src/lib/entity/sprite/spriteCostume.ts:16](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/spriteCostume.ts#L16)

**`Internal`**

#### Parameters

##### entity

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

{ISprite}

#### Returns

`SpriteCostume`

## Properties

### currentConstumeNo

> **currentConstumeNo**: `number` = `-1`

Defined in: [src/lib/entity/sprite/spriteCostume.ts:11](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/spriteCostume.ts#L11)

## Accessors

### currentSkinId

#### Get Signature

> **get** **currentSkinId**(): `number`

Defined in: [src/lib/entity/sprite/spriteCostume.ts:63](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/spriteCostume.ts#L63)

使用中のSkinId

##### Returns

`number`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [src/lib/entity/sprite/spriteCostume.ts:81](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/spriteCostume.ts#L81)

コスチューム名
```ts
 // コスチューム名
 const name = this.Looks.Costume.name;
```

##### Returns

`string`

#### Set Signature

> **set** **name**(`name`): `void`

Defined in: [src/lib/entity/sprite/spriteCostume.ts:94](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/spriteCostume.ts#L94)

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

***

### names

#### Get Signature

> **get** **names**(): `string`[]

Defined in: [src/lib/entity/sprite/spriteCostume.ts:26](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/spriteCostume.ts#L26)

コスチューム名 配列

##### Returns

`string`[]

コスチューム名 配列

#### Implementation of

[`ISpriteCostume`](../../../../../type/entity/sprite/ISpriteCostume/interfaces/ISpriteCostume.md).[`names`](../../../../../type/entity/sprite/ISpriteCostume/interfaces/ISpriteCostume.md#names)

***

### no

#### Get Signature

> **get** **no**(): `number`

Defined in: [src/lib/entity/sprite/spriteCostume.ts:38](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/spriteCostume.ts#L38)

コスチューム番号
```ts
 // コスチューム番号
 const no = this.Looks.Costume.no;
```

##### Returns

`number`

#### Set Signature

> **set** **no**(`no`): `void`

Defined in: [src/lib/entity/sprite/spriteCostume.ts:49](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/spriteCostume.ts#L49)

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

## Methods

### add()

> **add**(`images`): `void`

Defined in: [src/lib/entity/sprite/spriteCostume.ts:19](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/spriteCostume.ts#L19)

画像を追加

#### Parameters

##### images

[`IImage`](../../../../../type/image/interfaces/IImage.md)[]

#### Returns

`void`

#### Implementation of

[`ISpriteCostume`](../../../../../type/entity/sprite/ISpriteCostume/interfaces/ISpriteCostume.md).[`add`](../../../../../type/entity/sprite/ISpriteCostume/interfaces/ISpriteCostume.md#add)

***

### next()

> **next**(): `void`

Defined in: [src/lib/entity/sprite/spriteCostume.ts:112](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/entity/sprite/spriteCostume.ts#L112)

次のコスチュームにする
```ts
 this.Looks.Costume.next();
``

#### Returns

`void`
