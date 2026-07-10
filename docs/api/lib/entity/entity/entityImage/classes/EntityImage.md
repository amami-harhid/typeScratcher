# Class: EntityImage

Defined in: [src/lib/entity/entity/entityImage.ts:10](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entityImage.ts#L10)

Entity イメージ

## Extended by

- [`SpriteImage`](../../../sprite/spriteImage/classes/SpriteImage.md)

## Implements

- [`IEntityImage`](../../../../../type/entity/entity/IEntityImage/interfaces/IEntityImage.md)

## Constructors

### Constructor

> **new EntityImage**(`entity`): `EntityImage`

Defined in: [src/lib/entity/entity/entityImage.ts:19](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entityImage.ts#L19)

**`Internal`**

#### Parameters

##### entity

[`IEntity`](../../../../../type/entity/entity/interfaces/IEntity.md)

{IEntity}

#### Returns

`EntityImage`

## Accessors

### effect

#### Get Signature

> **get** **effect**(): [`IEntityEffect`](../../../../../type/entity/entity/IEntityEffect/interfaces/IEntityEffect.md)

Defined in: [src/lib/entity/entity/entityImage.ts:24](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entityImage.ts#L24)

##### Returns

[`IEntityEffect`](../../../../../type/entity/entity/IEntityEffect/interfaces/IEntityEffect.md)

***

### images

#### Get Signature

> **get** **images**(): [`IImage`](../../../../../type/image/interfaces/IImage.md)[]

Defined in: [src/lib/entity/entity/entityImage.ts:34](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entityImage.ts#L34)

##### Returns

[`IImage`](../../../../../type/image/interfaces/IImage.md)[]

#### Implementation of

[`IEntityImage`](../../../../../type/entity/entity/IEntityImage/interfaces/IEntityImage.md).[`images`](../../../../../type/entity/entity/IEntityImage/interfaces/IEntityImage.md#images)

***

### names

#### Get Signature

> **get** **names**(): `string`[]

Defined in: [src/lib/entity/entity/entityImage.ts:37](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entityImage.ts#L37)

追加されている画像名を配列で受け取る
```ts
 // this がスプライトのとき
 const costumeNames = this.Image.names();
 console.log( costumeNames ); // --> ['Cat01','Cat02']
```
```ts
 // this がステージのとき
 const backdropNames = this.Image.names();
 console.log( backdropNames ); // --> ['Jurassic','Backdrops']
```

##### Returns

`string`[]

追加されている画像名を配列で受け取る
```ts
 // this がスプライトのとき
 const costumeNames = this.Image.names();
 console.log( costumeNames ); // --> ['Cat01','Cat02']
```
```ts
 // this がステージのとき
 const backdropNames = this.Image.names();
 console.log( backdropNames ); // --> ['Jurassic','Backdrops']
```

#### Implementation of

[`IEntityImage`](../../../../../type/entity/entity/IEntityImage/interfaces/IEntityImage.md).[`names`](../../../../../type/entity/entity/IEntityImage/interfaces/IEntityImage.md#names)

## Methods

### add()

> **add**(`images`): `void`

Defined in: [src/lib/entity/entity/entityImage.ts:28](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entityImage.ts#L28)

画像を追加する

#### Parameters

##### images

[`IImage`](../../../../../type/image/interfaces/IImage.md)[]

{IImages[]} 
```ts
 // スプライトへ画像を追加
 // Cat01の名前の画像を追加する
 await sprite.Image.add('Cat01');
```
```ts
 // ステージへ画像を追加
 // Jurassicの名前の画像を追加する
 await stage.Image.add('Jurassic');
```

#### Returns

`void`

#### Implementation of

[`IEntityImage`](../../../../../type/entity/entity/IEntityImage/interfaces/IEntityImage.md).[`add`](../../../../../type/entity/entity/IEntityImage/interfaces/IEntityImage.md#add)

***

### destoryAllSkins()

> **destoryAllSkins**(): `void`

Defined in: [src/lib/entity/entity/entityImage.ts:53](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entityImage.ts#L53)

#### Returns

`void`

***

### imageLoadCompleteAll()

> **imageLoadCompleteAll**(): `boolean`

Defined in: [src/lib/entity/entity/entityImage.ts:44](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entityImage.ts#L44)

#### Returns

`boolean`
