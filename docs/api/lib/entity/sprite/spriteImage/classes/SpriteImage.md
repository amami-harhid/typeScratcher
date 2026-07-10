# Class: SpriteImage

Defined in: [src/lib/entity/sprite/spriteImage.ts:7](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/spriteImage.ts#L7)

Sprite Image(イメージ)

## Extends

- [`EntityImage`](../../../entity/entityImage/classes/EntityImage.md)

## Constructors

### Constructor

> **new SpriteImage**(`entity`): `SpriteImage`

Defined in: [src/lib/entity/sprite/spriteImage.ts:13](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/spriteImage.ts#L13)

**`Internal`**

#### Parameters

##### entity

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

{Sprite}

#### Returns

`SpriteImage`

#### Overrides

[`EntityImage`](../../../entity/entityImage/classes/EntityImage.md).[`constructor`](../../../entity/entityImage/classes/EntityImage.md#constructor)

## Accessors

### effect

#### Get Signature

> **get** **effect**(): [`IEntityEffect`](../../../../../type/entity/entity/IEntityEffect/interfaces/IEntityEffect.md)

Defined in: [src/lib/entity/entity/entityImage.ts:24](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entityImage.ts#L24)

##### Returns

[`IEntityEffect`](../../../../../type/entity/entity/IEntityEffect/interfaces/IEntityEffect.md)

#### Inherited from

[`EntityImage`](../../../entity/entityImage/classes/EntityImage.md).[`effect`](../../../entity/entityImage/classes/EntityImage.md#effect)

***

### images

#### Get Signature

> **get** **images**(): [`IImage`](../../../../../type/image/interfaces/IImage.md)[]

Defined in: [src/lib/entity/entity/entityImage.ts:34](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entityImage.ts#L34)

##### Returns

[`IImage`](../../../../../type/image/interfaces/IImage.md)[]

#### Inherited from

[`EntityImage`](../../../entity/entityImage/classes/EntityImage.md).[`images`](../../../entity/entityImage/classes/EntityImage.md#images)

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

#### Inherited from

[`EntityImage`](../../../entity/entityImage/classes/EntityImage.md).[`names`](../../../entity/entityImage/classes/EntityImage.md#names)

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

#### Inherited from

[`EntityImage`](../../../entity/entityImage/classes/EntityImage.md).[`add`](../../../entity/entityImage/classes/EntityImage.md#add)

***

### destoryAllSkins()

> **destoryAllSkins**(): `void`

Defined in: [src/lib/entity/entity/entityImage.ts:53](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entityImage.ts#L53)

#### Returns

`void`

#### Inherited from

[`EntityImage`](../../../entity/entityImage/classes/EntityImage.md).[`destoryAllSkins`](../../../entity/entityImage/classes/EntityImage.md#destoryallskins)

***

### imageLoadCompleteAll()

> **imageLoadCompleteAll**(): `boolean`

Defined in: [src/lib/entity/entity/entityImage.ts:44](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/entity/entityImage.ts#L44)

#### Returns

`boolean`

#### Inherited from

[`EntityImage`](../../../entity/entityImage/classes/EntityImage.md).[`imageLoadCompleteAll`](../../../entity/entityImage/classes/EntityImage.md#imageloadcompleteall)
