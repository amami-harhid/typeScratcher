# Class: SpriteControl

Defined in: [src/lib/entity/sprite/spriteControl.ts:28](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/sprite/spriteControl.ts#L28)

Sprite Control(制御)

## Implements

- [`ISpriteControl`](../../../../../type/entity/sprite/ISpriteControl/interfaces/ISpriteControl.md)

## Constructors

### Constructor

> **new SpriteControl**(`entity`): `SpriteControl`

Defined in: [src/lib/entity/sprite/spriteControl.ts:42](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/sprite/spriteControl.ts#L42)

**`Internal`**

#### Parameters

##### entity

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

{Sprite}

#### Returns

`SpriteControl`

## Properties

### \_clonedEventElementKeys

> **\_clonedEventElementKeys**: `string`[] = `[]`

Defined in: [src/lib/entity/sprite/spriteControl.ts:31](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/sprite/spriteControl.ts#L31)

***

### \_clonedFuncElements

> **\_clonedFuncElements**: `CallableFunction`[] = `[]`

Defined in: [src/lib/entity/sprite/spriteControl.ts:30](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/sprite/spriteControl.ts#L30)

## Accessors

### cloneCount

#### Set Signature

> **set** `static` **cloneCount**(`_count`): `void`

Defined in: [src/lib/entity/sprite/spriteControl.ts:34](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/sprite/spriteControl.ts#L34)

##### Parameters

###### \_count

`number`

##### Returns

`void`

## Methods

### clone()

> **clone**(): `void`

Defined in: [src/lib/entity/sprite/spriteControl.ts:70](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/sprite/spriteControl.ts#L70)

クローンを作る

#### Returns

`void`

#### Implementation of

[`ISpriteControl`](../../../../../type/entity/sprite/ISpriteControl/interfaces/ISpriteControl.md).[`clone`](../../../../../type/entity/sprite/ISpriteControl/interfaces/ISpriteControl.md#clone)

***

### cloned()

> **cloned**(): [`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

Defined in: [src/lib/entity/sprite/spriteControl.ts:160](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/sprite/spriteControl.ts#L160)

クローンされたときの動作を定義する

#### Returns

[`EventFunctionSetter`](../../../../../type/entity/entity/IEntityEvent/interfaces/EventFunctionSetter.md)

***

### clonedEventKick()

> **clonedEventKick**(): `void`

Defined in: [src/lib/entity/sprite/spriteControl.ts:201](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/sprite/spriteControl.ts#L201)

クローンのイベントを開始する

#### Returns

`void`

***

### removeAllClones()

> **removeAllClones**(): `void`

Defined in: [src/lib/entity/sprite/spriteControl.ts:252](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/sprite/spriteControl.ts#L252)

クローンを全て削除する

#### Returns

`void`

#### Implementation of

[`ISpriteControl`](../../../../../type/entity/sprite/ISpriteControl/interfaces/ISpriteControl.md).[`removeAllClones`](../../../../../type/entity/sprite/ISpriteControl/interfaces/ISpriteControl.md#removeallclones)

***

### removeClone()

> **removeClone**(): `void`

Defined in: [src/lib/entity/sprite/spriteControl.ts:228](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/sprite/spriteControl.ts#L228)

クローンを抹消する

#### Returns

`void`

#### Implementation of

[`ISpriteControl`](../../../../../type/entity/sprite/ISpriteControl/interfaces/ISpriteControl.md).[`removeClone`](../../../../../type/entity/sprite/ISpriteControl/interfaces/ISpriteControl.md#removeclone)

***

### stopAll()

> **stopAll**(): `void`

Defined in: [src/lib/entity/sprite/spriteControl.ts:222](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/sprite/spriteControl.ts#L222)

全てのスプライトの動作を停止する
クローンや他のスプライトを含めてすべてのスクリプトが停止する。

#### Returns

`void`

#### Implementation of

[`ISpriteControl`](../../../../../type/entity/sprite/ISpriteControl/interfaces/ISpriteControl.md).[`stopAll`](../../../../../type/entity/sprite/ISpriteControl/interfaces/ISpriteControl.md#stopall)

***

### stopOtherScripts()

> **stopOtherScripts**(): `void`

Defined in: [src/lib/entity/sprite/spriteControl.ts:273](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/sprite/spriteControl.ts#L273)

このスプライトの他のスクリプトを停止する
親スプライトから派生したクローンを含めて、同じスプライトであるとみなすので、
親スプライトからこのメソッドを実行すると、親の他のスクリプトと派生したクローンの全てのスクリプトが止まる。
クローンからこのメソッドを実行する場合、他のクローン、親スプライトは同じスプライトとはみなさない。
すまり、クローンからこのメソッドを実行すると、当該クローンの他のスクリプトだけを止める。

#### Returns

`void`

#### Implementation of

[`ISpriteControl`](../../../../../type/entity/sprite/ISpriteControl/interfaces/ISpriteControl.md).[`stopOtherScripts`](../../../../../type/entity/sprite/ISpriteControl/interfaces/ISpriteControl.md#stopotherscripts)

***

### stopThisScript()

> **stopThisScript**(): `void`

Defined in: [src/lib/entity/sprite/spriteControl.ts:262](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/sprite/spriteControl.ts#L262)

このスクリプトを停止する

#### Returns

`void`

#### Implementation of

[`ISpriteControl`](../../../../../type/entity/sprite/ISpriteControl/interfaces/ISpriteControl.md).[`stopThisScript`](../../../../../type/entity/sprite/ISpriteControl/interfaces/ISpriteControl.md#stopthisscript)

***

### wait()

> **wait**(`sec`): `Promise`\<`void`\>

Defined in: [src/lib/entity/sprite/spriteControl.ts:49](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/sprite/spriteControl.ts#L49)

指定秒数分、待つ。

#### Parameters

##### sec

`number`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISpriteControl`](../../../../../type/entity/sprite/ISpriteControl/interfaces/ISpriteControl.md).[`wait`](../../../../../type/entity/sprite/ISpriteControl/interfaces/ISpriteControl.md#wait)

***

### waitUntil()

> **waitUntil**(`condition`): `Promise`\<`void`\>

Defined in: [src/lib/entity/sprite/spriteControl.ts:56](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/sprite/spriteControl.ts#L56)

条件が成立する迄、待つ。

#### Parameters

##### condition

[`ConditionFunction`](../../../../utils/wait/type-aliases/ConditionFunction.md)

{Until.ConditionFunction} - 条件結果を返す関数

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISpriteControl`](../../../../../type/entity/sprite/ISpriteControl/interfaces/ISpriteControl.md).[`waitUntil`](../../../../../type/entity/sprite/ISpriteControl/interfaces/ISpriteControl.md#waituntil)

***

### waitWhile()

> **waitWhile**(`condition`): `Promise`\<`void`\>

Defined in: [src/lib/entity/sprite/spriteControl.ts:64](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/entity/sprite/spriteControl.ts#L64)

条件が成立する間、待つ。

#### Parameters

##### condition

[`ConditionFunction`](../../../../utils/wait/type-aliases/ConditionFunction.md)

{Until.ConditionFunction} - 条件結果を返す関数

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISpriteControl`](../../../../../type/entity/sprite/ISpriteControl/interfaces/ISpriteControl.md).[`waitWhile`](../../../../../type/entity/sprite/ISpriteControl/interfaces/ISpriteControl.md#waitwhile)
