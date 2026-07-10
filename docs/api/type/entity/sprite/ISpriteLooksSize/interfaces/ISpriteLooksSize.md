# Interface: ISpriteLooksSize

Defined in: [src/type/entity/sprite/ISpriteLooksSize.ts:7](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/type/entity/sprite/ISpriteLooksSize.ts#L7)

スプライトのサイズ

## Accessors

### drawingSize

#### Get Signature

> **get** **drawingSize**(): [`TBoundsEx`](../../../../common/typeCommon/interfaces/TBoundsEx.md)

Defined in: [src/type/entity/sprite/ISpriteLooksSize.ts:83](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/type/entity/sprite/ISpriteLooksSize.ts#L83)

自分自身の縦横表示サイズを得る

##### Returns

[`TBoundsEx`](../../../../common/typeCommon/interfaces/TBoundsEx.md)

TBounds
```ts
 // スプライトの表示サイズを得る
 const {w,h} = this.Looks.Size.drawingSize;
```

***

### h

#### Get Signature

> **get** **h**(): `number`

Defined in: [src/type/entity/sprite/ISpriteLooksSize.ts:30](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/type/entity/sprite/ISpriteLooksSize.ts#L30)

縦サイズ
```ts
 const height = this.Looks.Size.h;
```

##### Returns

`number`

#### Set Signature

> **set** **h**(`height`): `void`

Defined in: [src/type/entity/sprite/ISpriteLooksSize.ts:38](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/type/entity/sprite/ISpriteLooksSize.ts#L38)

縦サイズ
```ts
 this.Looks.Size.h = 150; // 150%
 this.Looks.Size.h += 10; // 10ずつ増やす
```

##### Parameters

###### height

`number`

##### Returns

`void`

***

### scale

#### Get Signature

> **get** **scale**(): [`ISpriteLooksSizeScale`](../../ISpriteLooksSizeScale/interfaces/ISpriteLooksSizeScale.md)

Defined in: [src/type/entity/sprite/ISpriteLooksSize.ts:48](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/type/entity/sprite/ISpriteLooksSize.ts#L48)

縦横サイズ
```ts
 // 横150%, 縦100% にする
 const scale = this.Looks.Size.scale;
 console.log('横', scale.w);
 console.log('縦', scale.h);
```

##### Returns

[`ISpriteLooksSizeScale`](../../ISpriteLooksSizeScale/interfaces/ISpriteLooksSizeScale.md)

#### Set Signature

> **set** **scale**(`scale`): `void`

Defined in: [src/type/entity/sprite/ISpriteLooksSize.ts:61](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/type/entity/sprite/ISpriteLooksSize.ts#L61)

縦横サイズ
```ts
 // 横150%, 縦100% にする
 this.Looks.Size.scale = {w:150, h:100};
```
```ts
 // 横10,縦20 ずつ増やす
 const scale = this.Looks.Size.scale;
 this.Looks.Size.scale = {w:scale.w +10, h:scale.h +20};
```

##### Parameters

###### scale

`TwoNumberArray`

##### Returns

`void`

***

### w

#### Get Signature

> **get** **w**(): `number`

Defined in: [src/type/entity/sprite/ISpriteLooksSize.ts:15](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/type/entity/sprite/ISpriteLooksSize.ts#L15)

横サイズ
```ts
 const width = this.Looks.Size.w;
```

##### Returns

`number`

#### Set Signature

> **set** **w**(`width`): `void`

Defined in: [src/type/entity/sprite/ISpriteLooksSize.ts:23](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/type/entity/sprite/ISpriteLooksSize.ts#L23)

横サイズ
```ts
 this.Looks.Size.w = 150; // 150%
 this.Looks.Size.w += 10; // 10ずつ増やす
```

##### Parameters

###### width

`number`

##### Returns

`void`
