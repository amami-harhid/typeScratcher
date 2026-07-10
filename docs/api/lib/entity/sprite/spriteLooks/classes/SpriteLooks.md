# Class: SpriteLooks

Defined in: [src/lib/entity/sprite/spriteLooks.ts:19](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteLooks.ts#L19)

Sprite Looks(見た目)

## Extends

- [`EntityLooks`](../../../entity/entityLooks/classes/EntityLooks.md)

## Implements

- [`ISpriteLooks`](../../../../../type/entity/sprite/ISpriteLooks/interfaces/ISpriteLooks.md)

## Constructors

### Constructor

> **new SpriteLooks**(`entity`): `SpriteLooks`

Defined in: [src/lib/entity/sprite/spriteLooks.ts:29](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteLooks.ts#L29)

**`Internal`**

#### Parameters

##### entity

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

{Sprite}

#### Returns

`SpriteLooks`

#### Overrides

[`EntityLooks`](../../../entity/entityLooks/classes/EntityLooks.md).[`constructor`](../../../entity/entityLooks/classes/EntityLooks.md#constructor)

## Accessors

### backdrop

#### Get Signature

> **get** **backdrop**(): [`IEntityLooksBackdrop`](../../../../../type/entity/entity/IEntityLooksBackdrop/interfaces/IEntityLooksBackdrop.md)

Defined in: [src/lib/entity/sprite/spriteLooks.ts:46](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteLooks.ts#L46)

背景を操作する

##### Returns

[`IEntityLooksBackdrop`](../../../../../type/entity/entity/IEntityLooksBackdrop/interfaces/IEntityLooksBackdrop.md)

背景を操作する

#### Implementation of

[`ISpriteLooks`](../../../../../type/entity/sprite/ISpriteLooks/interfaces/ISpriteLooks.md).[`backdrop`](../../../../../type/entity/sprite/ISpriteLooks/interfaces/ISpriteLooks.md#backdrop)

***

### bubble

#### Get Signature

> **get** **bubble**(): [`ISpriteLooksBubble`](../../../../../type/entity/sprite/ISpriteLooksBubble/interfaces/ISpriteLooksBubble.md)

Defined in: [src/lib/entity/sprite/spriteLooks.ts:66](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteLooks.ts#L66)

フキダシ

##### Returns

[`ISpriteLooksBubble`](../../../../../type/entity/sprite/ISpriteLooksBubble/interfaces/ISpriteLooksBubble.md)

フキダシ

#### Implementation of

[`ISpriteLooks`](../../../../../type/entity/sprite/ISpriteLooks/interfaces/ISpriteLooks.md).[`bubble`](../../../../../type/entity/sprite/ISpriteLooks/interfaces/ISpriteLooks.md#bubble)

***

### costume

#### Get Signature

> **get** **costume**(): [`ISpriteLooksCostume`](../../../../../type/entity/sprite/ISpriteLooksCostume/interfaces/ISpriteLooksCostume.md)

Defined in: [src/lib/entity/sprite/spriteLooks.ts:40](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteLooks.ts#L40)

コスチューム番号、コスチューム名を取り出すためのオブジェクト

##### Returns

[`ISpriteLooksCostume`](../../../../../type/entity/sprite/ISpriteLooksCostume/interfaces/ISpriteLooksCostume.md)

コスチュームを操作する

#### Implementation of

[`ISpriteLooks`](../../../../../type/entity/sprite/ISpriteLooks/interfaces/ISpriteLooks.md).[`costume`](../../../../../type/entity/sprite/ISpriteLooks/interfaces/ISpriteLooks.md#costume)

***

### effect

#### Get Signature

> **get** **effect**(): [`IEntityEffect`](../../../../../type/entity/entity/IEntityEffect/interfaces/IEntityEffect.md)

Defined in: [src/lib/entity/entity/entityLooks.ts:22](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/entity/entityLooks.ts#L22)

##### Returns

[`IEntityEffect`](../../../../../type/entity/entity/IEntityEffect/interfaces/IEntityEffect.md)

#### Implementation of

[`ISpriteLooks`](../../../../../type/entity/sprite/ISpriteLooks/interfaces/ISpriteLooks.md).[`effect`](../../../../../type/entity/sprite/ISpriteLooks/interfaces/ISpriteLooks.md#effect)

#### Inherited from

[`EntityLooks`](../../../entity/entityLooks/classes/EntityLooks.md).[`effect`](../../../entity/entityLooks/classes/EntityLooks.md#effect)

***

### layer

#### Get Signature

> **get** **layer**(): [`ISpriteLayer`](../../../../../type/entity/sprite/ISpriteLayer/interfaces/ISpriteLayer.md)

Defined in: [src/lib/entity/sprite/spriteLooks.ts:60](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteLooks.ts#L60)

階層

Layer

##### Returns

[`ISpriteLayer`](../../../../../type/entity/sprite/ISpriteLayer/interfaces/ISpriteLayer.md)

階層

Layer

#### Implementation of

[`ISpriteLooks`](../../../../../type/entity/sprite/ISpriteLooks/interfaces/ISpriteLooks.md).[`layer`](../../../../../type/entity/sprite/ISpriteLooks/interfaces/ISpriteLooks.md#layer)

***

### size

#### Get Signature

> **get** **size**(): [`ISpriteLooksSize`](../../../../../type/entity/sprite/ISpriteLooksSize/interfaces/ISpriteLooksSize.md)

Defined in: [src/lib/entity/sprite/spriteLooks.ts:52](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteLooks.ts#L52)

サイズ

##### Returns

[`ISpriteLooksSize`](../../../../../type/entity/sprite/ISpriteLooksSize/interfaces/ISpriteLooksSize.md)

サイズ

#### Implementation of

[`ISpriteLooks`](../../../../../type/entity/sprite/ISpriteLooks/interfaces/ISpriteLooks.md).[`size`](../../../../../type/entity/sprite/ISpriteLooks/interfaces/ISpriteLooks.md#size)

## Methods

### hide()

> **hide**(): `void`

Defined in: [src/lib/entity/sprite/spriteLooks.ts:81](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteLooks.ts#L81)

隠す

#### Returns

`void`

#### Implementation of

[`ISpriteLooks`](../../../../../type/entity/sprite/ISpriteLooks/interfaces/ISpriteLooks.md).[`hide`](../../../../../type/entity/sprite/ISpriteLooks/interfaces/ISpriteLooks.md#hide)

***

### show()

> **show**(): `void`

Defined in: [src/lib/entity/sprite/spriteLooks.ts:73](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/sprite/spriteLooks.ts#L73)

表示する

#### Returns

`void`

#### Implementation of

[`ISpriteLooks`](../../../../../type/entity/sprite/ISpriteLooks/interfaces/ISpriteLooks.md).[`show`](../../../../../type/entity/sprite/ISpriteLooks/interfaces/ISpriteLooks.md#show)
