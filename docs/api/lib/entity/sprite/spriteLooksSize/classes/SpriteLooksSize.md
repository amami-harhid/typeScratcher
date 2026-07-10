# Class: SpriteLooksSize

Defined in: [src/lib/entity/sprite/spriteLooksSize.ts:10](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteLooksSize.ts#L10)

サイズ

## Extends

- `EventEmitter`

## Implements

- [`ISpriteLooksSize`](../../../../../type/entity/sprite/ISpriteLooksSize/interfaces/ISpriteLooksSize.md)

## Constructors

### Constructor

> **new SpriteLooksSize**(`entity`): `SpriteLooksSize`

Defined in: [src/lib/entity/sprite/spriteLooksSize.ts:20](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteLooksSize.ts#L20)

**`Internal`**

#### Parameters

##### entity

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

{ISprite}

#### Returns

`SpriteLooksSize`

#### Overrides

`EventEmitter.constructor`

## Accessors

### drawingSize

#### Get Signature

> **get** **drawingSize**(): [`TBoundsEx`](../../../../../type/common/typeCommon/interfaces/TBoundsEx.md)

Defined in: [src/lib/entity/sprite/spriteLooksSize.ts:121](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteLooksSize.ts#L121)

自分自身の縦横表示サイズを得る

##### Returns

[`TBoundsEx`](../../../../../type/common/typeCommon/interfaces/TBoundsEx.md)

bounds: {left:number, top:number, right:number, bottom:number, width: number, height: number }

#### Implementation of

[`ISpriteLooksSize`](../../../../../type/entity/sprite/ISpriteLooksSize/interfaces/ISpriteLooksSize.md).[`drawingSize`](../../../../../type/entity/sprite/ISpriteLooksSize/interfaces/ISpriteLooksSize.md#drawingsize)

***

### h

#### Get Signature

> **get** **h**(): `number`

Defined in: [src/lib/entity/sprite/spriteLooksSize.ts:54](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteLooksSize.ts#L54)

縦サイズ

##### Returns

`number`

#### Set Signature

> **set** **h**(`height`): `void`

Defined in: [src/lib/entity/sprite/spriteLooksSize.ts:68](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteLooksSize.ts#L68)

縦サイズ

##### Parameters

###### height

`number`

##### Returns

`void`

#### Implementation of

[`ISpriteLooksSize`](../../../../../type/entity/sprite/ISpriteLooksSize/interfaces/ISpriteLooksSize.md).[`h`](../../../../../type/entity/sprite/ISpriteLooksSize/interfaces/ISpriteLooksSize.md#h)

***

### scale

#### Get Signature

> **get** **scale**(): [`SpriteLooksSizeScale`](../../spriteLooksSizeScale/classes/SpriteLooksSizeScale.md)

Defined in: [src/lib/entity/sprite/spriteLooksSize.ts:106](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteLooksSize.ts#L106)

縦横サイズ

##### Returns

[`SpriteLooksSizeScale`](../../spriteLooksSizeScale/classes/SpriteLooksSizeScale.md)

#### Set Signature

> **set** **scale**(`scale`): `void`

Defined in: [src/lib/entity/sprite/spriteLooksSize.ts:112](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteLooksSize.ts#L112)

縦横サイズ

##### Parameters

###### scale

`TwoNumberArray`

##### Returns

`void`

#### Implementation of

[`ISpriteLooksSize`](../../../../../type/entity/sprite/ISpriteLooksSize/interfaces/ISpriteLooksSize.md).[`scale`](../../../../../type/entity/sprite/ISpriteLooksSize/interfaces/ISpriteLooksSize.md#scale)

***

### w

#### Get Signature

> **get** **w**(): `number`

Defined in: [src/lib/entity/sprite/spriteLooksSize.ts:28](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteLooksSize.ts#L28)

横サイズ

##### Returns

`number`

#### Set Signature

> **set** **w**(`width`): `void`

Defined in: [src/lib/entity/sprite/spriteLooksSize.ts:38](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteLooksSize.ts#L38)

横サイズ

##### Parameters

###### width

`number`

##### Returns

`void`

#### Implementation of

[`ISpriteLooksSize`](../../../../../type/entity/sprite/ISpriteLooksSize/interfaces/ISpriteLooksSize.md).[`w`](../../../../../type/entity/sprite/ISpriteLooksSize/interfaces/ISpriteLooksSize.md#w)

## Methods

### sizeUpdate()

> **sizeUpdate**(): `void`

Defined in: [src/lib/entity/sprite/spriteLooksSize.ts:84](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteLooksSize.ts#L84)

Skin作成後にSprite.init()の中からキックされる

#### Returns

`void`
