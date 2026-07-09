# Interface: ISpriteControl

Defined in: [src/type/entity/sprite/ISpriteControl.ts:6](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/ISpriteControl.ts#L6)

Sprite Control(制御)

## Extends

- [`IEntityControl`](../../../entity/IEntityControl/interfaces/IEntityControl.md)

## Methods

### clone()

> **clone**(): `void`

Defined in: [src/type/entity/sprite/ISpriteControl.ts:11](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/ISpriteControl.ts#L11)

クローンを作る

#### Returns

`void`

***

### removeAllClones()

> **removeAllClones**(): `void`

Defined in: [src/type/entity/sprite/ISpriteControl.ts:19](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/ISpriteControl.ts#L19)

クローンを全て削除する

#### Returns

`void`

***

### removeClone()

> **removeClone**(): `void`

Defined in: [src/type/entity/sprite/ISpriteControl.ts:15](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/sprite/ISpriteControl.ts#L15)

クローンを抹消する

#### Returns

`void`

***

### stopAll()

> **stopAll**(): `void`

Defined in: [src/type/entity/entity/IEntityControl.ts:47](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/entity/IEntityControl.ts#L47)

全てのスプライトの動作を停止する

クローンや他のスプライトを含めてすべてのスクリプトが停止する。

#### Returns

`void`

#### Inherited from

[`IEntityControl`](../../../entity/IEntityControl/interfaces/IEntityControl.md).[`stopAll`](../../../entity/IEntityControl/interfaces/IEntityControl.md#stopall)

***

### stopOtherScripts()

> **stopOtherScripts**(): `void`

Defined in: [src/type/entity/entity/IEntityControl.ts:60](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/entity/IEntityControl.ts#L60)

このスプライトの他のスクリプトを停止する

親スプライトから派生したクローンを含めて、同じスプライトであるとみなす。
クローンからこのメソッドを実行する場合、他のクローン、親スプライトは同じスプライトとはみなさない。
親スプライトからこのメソッドを実行すると、親の他のスクリプトと派生したクローンの全てのスクリプトを停止する。
クローンからこのメソッドを実行すると、当該クローンの他のスクリプトだけを停止する。

#### Returns

`void`

#### Inherited from

[`IEntityControl`](../../../entity/IEntityControl/interfaces/IEntityControl.md).[`stopOtherScripts`](../../../entity/IEntityControl/interfaces/IEntityControl.md#stopotherscripts)

***

### stopThisScript()

> **stopThisScript**(): `void`

Defined in: [src/type/entity/entity/IEntityControl.ts:51](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/entity/IEntityControl.ts#L51)

このスクリプトを停止する

#### Returns

`void`

#### Inherited from

[`IEntityControl`](../../../entity/IEntityControl/interfaces/IEntityControl.md).[`stopThisScript`](../../../entity/IEntityControl/interfaces/IEntityControl.md#stopthisscript)

***

### wait()

> **wait**(`sec`): `Promise`\<`void`\>

Defined in: [src/type/entity/entity/IEntityControl.ts:11](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/entity/IEntityControl.ts#L11)

指定秒数分、待つ。

#### Parameters

##### sec

`number`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IEntityControl`](../../../entity/IEntityControl/interfaces/IEntityControl.md).[`wait`](../../../entity/IEntityControl/interfaces/IEntityControl.md#wait)

***

### waitUntil()

> **waitUntil**(`condition`): `Promise`\<`void`\>

Defined in: [src/type/entity/entity/IEntityControl.ts:26](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/entity/IEntityControl.ts#L26)

条件が成立する迄、待つ

```ts
const condition = ()=>{
 // マウスの押下を判定
 return Lib.mouseIsPressed() === true;
};
// マウスが押されるまで待つ
await this.Control.waitUntil(condition);

```

#### Parameters

##### condition

`CallableFunction`

{CallableFunction} - 条件結果を返す関数

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IEntityControl`](../../../entity/IEntityControl/interfaces/IEntityControl.md).[`waitUntil`](../../../entity/IEntityControl/interfaces/IEntityControl.md#waituntil)

***

### waitWhile()

> **waitWhile**(`condition`): `Promise`\<`void`\>

Defined in: [src/type/entity/entity/IEntityControl.ts:41](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/entity/entity/IEntityControl.ts#L41)

条件が成立する間、待つ。

```ts
const condition = ()=>{
 // マウスの押下を判定
 return Lib.mouseIsPressed() === true;
};
// マウスが押されている間、待つ
await this.Control.waitWhile(condition);

```

#### Parameters

##### condition

`CallableFunction`

{CallableFunction} - 条件結果を返す関数

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IEntityControl`](../../../entity/IEntityControl/interfaces/IEntityControl.md).[`waitWhile`](../../../entity/IEntityControl/interfaces/IEntityControl.md#waitwhile)
