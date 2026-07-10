# Interface: IEntityImage

Defined in: [src/type/entity/entity/IEntityImage.ts:6](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityImage.ts#L6)

Entity Image(イメージ)

## Properties

### images

> `readonly` **images**: [`IImage`](../../../../image/interfaces/IImage.md)[]

Defined in: [src/type/entity/entity/IEntityImage.ts:40](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityImage.ts#L40)

***

### names

> `readonly` **names**: `string`[]

Defined in: [src/type/entity/entity/IEntityImage.ts:38](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityImage.ts#L38)

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

## Methods

### add()

> **add**(`images`): `void`

Defined in: [src/type/entity/entity/IEntityImage.ts:24](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityImage.ts#L24)

画像を追加する

#### Parameters

##### images

[`IImage`](../../../../image/interfaces/IImage.md)[]

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
