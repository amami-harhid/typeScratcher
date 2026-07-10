# Interface: ISpriteLooksCostume

Defined in: [src/type/entity/sprite/ISpriteLooksCostume.ts:4](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/sprite/ISpriteLooksCostume.ts#L4)

コスチューム

## Accessors

### currentSkinId

#### Get Signature

> **get** **currentSkinId**(): `number`

Defined in: [src/type/entity/sprite/ISpriteLooksCostume.ts:18](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/sprite/ISpriteLooksCostume.ts#L18)

現在のSkinID

##### Returns

`number`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [src/type/entity/sprite/ISpriteLooksCostume.ts:35](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/sprite/ISpriteLooksCostume.ts#L35)

コスチューム名
```ts
 // コスチューム名
 const name = this.Looks.Costume.name;
```

##### Returns

`string`

#### Set Signature

> **set** **name**(`name`): `void`

Defined in: [src/type/entity/sprite/ISpriteLooksCostume.ts:43](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/sprite/ISpriteLooksCostume.ts#L43)

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

### no

#### Get Signature

> **get** **no**(): `number`

Defined in: [src/type/entity/sprite/ISpriteLooksCostume.ts:13](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/sprite/ISpriteLooksCostume.ts#L13)

コスチューム番号
```ts
 // コスチューム番号
 const no = this.Looks.Costume.no;
```

##### Returns

`number`

#### Set Signature

> **set** **no**(`no`): `void`

Defined in: [src/type/entity/sprite/ISpriteLooksCostume.ts:27](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/sprite/ISpriteLooksCostume.ts#L27)

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

### next()

> **next**(): `void`

Defined in: [src/type/entity/sprite/ISpriteLooksCostume.ts:48](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/sprite/ISpriteLooksCostume.ts#L48)

次のコスチュームにする

#### Returns

`void`
