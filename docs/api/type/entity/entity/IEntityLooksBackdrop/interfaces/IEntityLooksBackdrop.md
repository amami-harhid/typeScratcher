# Interface: IEntityLooksBackdrop

Defined in: [src/type/entity/entity/IEntityLooksBackdrop.ts:2](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityLooksBackdrop.ts#L2)

背景

## Extended by

- [`IStageLooksBackdrop`](../../../stage/IStageLooksBackdrop/interfaces/IStageLooksBackdrop.md)

## Accessors

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [src/type/entity/entity/IEntityLooksBackdrop.ts:26](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityLooksBackdrop.ts#L26)

背景名
```ts
 // 背景名
 const name = this.Looks.Backdrop.name;
```

##### Returns

`string`

#### Set Signature

> **set** **name**(`backdropName`): `void`

Defined in: [src/type/entity/entity/IEntityLooksBackdrop.ts:34](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityLooksBackdrop.ts#L34)

背景名
```ts
 // 背景名
 this.Looks.Backdrop.name = "backdrop";
```

##### Parameters

###### backdropName

`string`

##### Returns

`void`

***

### no

#### Get Signature

> **get** **no**(): `number`

Defined in: [src/type/entity/entity/IEntityLooksBackdrop.ts:10](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityLooksBackdrop.ts#L10)

背景番号
```ts
 // 背景番号
 const no = this.Looks.Backdrop.no;
```

##### Returns

`number`

#### Set Signature

> **set** **no**(`no`): `void`

Defined in: [src/type/entity/entity/IEntityLooksBackdrop.ts:18](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityLooksBackdrop.ts#L18)

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

## Methods

### next()

> **next**(): `void`

Defined in: [src/type/entity/entity/IEntityLooksBackdrop.ts:41](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityLooksBackdrop.ts#L41)

次の背景にする
```ts
 this.Looks.Backdrop.next();
```

#### Returns

`void`

***

### nextAndWait()

> **nextAndWait**(): `Promise`\<`void`\>

Defined in: [src/type/entity/entity/IEntityLooksBackdrop.ts:45](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityLooksBackdrop.ts#L45)

次の背景にして待つ

#### Returns

`Promise`\<`void`\>

***

### previous()

> **previous**(): `void`

Defined in: [src/type/entity/entity/IEntityLooksBackdrop.ts:52](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityLooksBackdrop.ts#L52)

前の背景にする
```ts
 this.Looks.Backdrop.previous();
```

#### Returns

`void`

***

### previousAndWait()

> **previousAndWait**(): `Promise`\<`void`\>

Defined in: [src/type/entity/entity/IEntityLooksBackdrop.ts:56](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityLooksBackdrop.ts#L56)

前の背景にして待つ

#### Returns

`Promise`\<`void`\>

***

### switchAndWait()

> **switchAndWait**(`backdropName`): `Promise`\<`void`\>

Defined in: [src/type/entity/entity/IEntityLooksBackdrop.ts:69](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityLooksBackdrop.ts#L69)

背景を変えて待つ

#### Parameters

##### backdropName

`string`

#### Returns

`Promise`\<`void`\>

***

### switchRandom()

> **switchRandom**(): `void`

Defined in: [src/type/entity/entity/IEntityLooksBackdrop.ts:60](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityLooksBackdrop.ts#L60)

どれかの背景にする

#### Returns

`void`

***

### switchRandomAndWait()

> **switchRandomAndWait**(): `Promise`\<`void`\>

Defined in: [src/type/entity/entity/IEntityLooksBackdrop.ts:64](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/type/entity/entity/IEntityLooksBackdrop.ts#L64)

どれかの背景にして待つ

#### Returns

`Promise`\<`void`\>
