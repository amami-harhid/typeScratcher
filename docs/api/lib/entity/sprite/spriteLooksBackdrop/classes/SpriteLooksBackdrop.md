# Class: SpriteLooksBackdrop

Defined in: [src/lib/entity/sprite/spriteLooksBackdrop.ts:11](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/sprite/spriteLooksBackdrop.ts#L11)

背景

## Extends

- [`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md)

## Implements

- [`ISpriteLooksBackdrop`](../../../../../type/entity/sprite/ISpriteLooksBackdrop/interfaces/ISpriteLooksBackdrop.md)

## Constructors

### Constructor

> **new SpriteLooksBackdrop**(`entity`): `SpriteLooksBackdrop`

Defined in: [src/lib/entity/sprite/spriteLooksBackdrop.ts:17](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/sprite/spriteLooksBackdrop.ts#L17)

**`Internal`**

#### Parameters

##### entity

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

{ISprite}

#### Returns

`SpriteLooksBackdrop`

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`constructor`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#constructor)

## Properties

### currentBackdropNo

> **currentBackdropNo**: `number` = `-1`

Defined in: [src/lib/entity/entity/entityBackdrop.ts:18](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entityBackdrop.ts#L18)

#### Inherited from

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`currentBackdropNo`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#currentbackdropno)

## Accessors

### currentSkinId

#### Get Signature

> **get** **currentSkinId**(): `number`

Defined in: [src/lib/entity/entity/entityBackdrop.ts:74](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entityBackdrop.ts#L74)

使用中のSkinId

##### Returns

`number`

#### Inherited from

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`currentSkinId`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#currentskinid)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [src/lib/entity/sprite/spriteLooksBackdrop.ts:64](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/sprite/spriteLooksBackdrop.ts#L64)

背景名
```ts
 // 背景名
 const name = this.Looks.Backdrop.name;
```

##### Returns

`string`

#### Set Signature

> **set** **name**(`name`): `void`

Defined in: [src/lib/entity/sprite/spriteLooksBackdrop.ts:78](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/sprite/spriteLooksBackdrop.ts#L78)

背景名
```ts
 // 背景名
 this.Looks.Backdrop.name = "backdrop";
```

##### Parameters

###### name

`string`

##### Returns

`void`

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`name`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#name)

***

### names

#### Get Signature

> **get** **names**(): `string`[]

Defined in: [src/lib/entity/sprite/spriteLooksBackdrop.ts:23](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/sprite/spriteLooksBackdrop.ts#L23)

背景名の配列

##### Returns

`string`[]

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`names`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#names)

***

### no

#### Get Signature

> **get** **no**(): `number`

Defined in: [src/lib/entity/sprite/spriteLooksBackdrop.ts:37](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/sprite/spriteLooksBackdrop.ts#L37)

背景番号
```ts
 // 背景番号
 const no = this.Looks.Backdrop.no;
```

##### Returns

`number`

#### Set Signature

> **set** **no**(`no`): `void`

Defined in: [src/lib/entity/sprite/spriteLooksBackdrop.ts:51](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/sprite/spriteLooksBackdrop.ts#L51)

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

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`no`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#no)

## Methods

### add()

> **add**(`images`): `void`

Defined in: [src/lib/entity/entity/entityBackdrop.ts:26](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entityBackdrop.ts#L26)

#### Parameters

##### images

[`IImage`](../../../../../type/image/interfaces/IImage.md)[]

#### Returns

`void`

#### Inherited from

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`add`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#add)

***

### next()

> **next**(): `void`

Defined in: [src/lib/entity/sprite/spriteLooksBackdrop.ts:100](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/sprite/spriteLooksBackdrop.ts#L100)

次の背景にする
```ts
 this.Looks.Backdrop.nextBackdrop();
```

#### Returns

`void`

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`next`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#next)

***

### nextAndWait()

> **nextAndWait**(): `Promise`\<`void`\>

Defined in: [src/lib/entity/sprite/spriteLooksBackdrop.ts:109](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/sprite/spriteLooksBackdrop.ts#L109)

次の背景にして待つ

#### Returns

`Promise`\<`void`\>

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`nextAndWait`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#nextandwait)

***

### previous()

> **previous**(): `void`

Defined in: [src/lib/entity/sprite/spriteLooksBackdrop.ts:118](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/sprite/spriteLooksBackdrop.ts#L118)

前の背景にする

#### Returns

`void`

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`previous`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#previous)

***

### previousAndWait()

> **previousAndWait**(): `Promise`\<`void`\>

Defined in: [src/lib/entity/sprite/spriteLooksBackdrop.ts:128](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/sprite/spriteLooksBackdrop.ts#L128)

前の背景にして待つ。

#### Returns

`Promise`\<`void`\>

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`previousAndWait`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#previousandwait)

***

### switchAndWait()

> **switchAndWait**(`backdropName`): `Promise`\<`void`\>

Defined in: [src/lib/entity/sprite/spriteLooksBackdrop.ts:88](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/sprite/spriteLooksBackdrop.ts#L88)

背景を切り替えて待つ

#### Parameters

##### backdropName

`string`

#### Returns

`Promise`\<`void`\>

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`switchAndWait`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#switchandwait)

***

### switchRandom()

> **switchRandom**(): `void`

Defined in: [src/lib/entity/sprite/spriteLooksBackdrop.ts:137](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/sprite/spriteLooksBackdrop.ts#L137)

どれかの背景にする

#### Returns

`void`

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`switchRandom`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#switchrandom)

***

### switchRandomAndWait()

> **switchRandomAndWait**(): `Promise`\<`void`\>

Defined in: [src/lib/entity/sprite/spriteLooksBackdrop.ts:147](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/sprite/spriteLooksBackdrop.ts#L147)

どれかの背景にして待つ

#### Returns

`Promise`\<`void`\>

#### Overrides

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`switchRandomAndWait`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#switchrandomandwait)

***

### untilBackdropEventDone()

> **untilBackdropEventDone**(`backdropName`): `Promise`\<`void`\>

Defined in: [src/lib/entity/entity/entityBackdrop.ts:204](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entityBackdrop.ts#L204)

#### Parameters

##### backdropName

`string`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`untilBackdropEventDone`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#untilbackdropeventdone)

***

### getBackdropChangeMessageId()

> `static` **getBackdropChangeMessageId**(`backdropName`): `string`

Defined in: [src/lib/entity/entity/entityBackdrop.ts:246](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/entity/entity/entityBackdrop.ts#L246)

#### Parameters

##### backdropName

`string`

#### Returns

`string`

#### Inherited from

[`EntityBackdrop`](../../../entity/entityBackdrop/classes/EntityBackdrop.md).[`getBackdropChangeMessageId`](../../../entity/entityBackdrop/classes/EntityBackdrop.md#getbackdropchangemessageid)
