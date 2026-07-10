# Class: StageControl

Defined in: [src/lib/entity/stage/stageControl.ts:14](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/stage/stageControl.ts#L14)

Stage Control(制御)

## Implements

- [`IStageControl`](../../../../../type/entity/stage/IStageControl/type-aliases/IStageControl.md)

## Constructors

### Constructor

> **new StageControl**(`entity`): `StageControl`

Defined in: [src/lib/entity/stage/stageControl.ts:20](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/stage/stageControl.ts#L20)

**`Internal`**

#### Parameters

##### entity

[`IStage`](../../../../../type/entity/stage/interfaces/IStage.md)

{IStage}

#### Returns

`StageControl`

## Methods

### stopAll()

> **stopAll**(): `void`

Defined in: [src/lib/entity/stage/stageControl.ts:66](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/stage/stageControl.ts#L66)

全てのスプライトの動作を停止する
クローンや他のスプライトを含めてすべてのスクリプトが停止する。

#### Returns

`void`

#### Implementation of

`IStageControl.stopAll`

***

### stopOtherScripts()

> **stopOtherScripts**(): `void`

Defined in: [src/lib/entity/stage/stageControl.ts:83](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/stage/stageControl.ts#L83)

このスプライトの他のスクリプトを停止する
親スプライトから派生したクローンを含めて、同じスプライトであるとみなすので、
親スプライトからこのメソッドを実行すると、親の他のスクリプトと派生したクローンの全てのスクリプトが止まる。
クローンからこのメソッドを実行する場合、他のクローン、親スプライトは同じスプライトとはみなさない。
すまり、クローンからこのメソッドを実行すると、当該クローンの他のスクリプトだけを止める。

#### Returns

`void`

#### Implementation of

`IStageControl.stopOtherScripts`

***

### stopThisScript()

> **stopThisScript**(): `void`

Defined in: [src/lib/entity/stage/stageControl.ts:72](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/stage/stageControl.ts#L72)

このスクリプトを停止する

#### Returns

`void`

#### Implementation of

`IStageControl.stopThisScript`

***

### wait()

> **wait**(`sec`): `Promise`\<`void`\>

Defined in: [src/lib/entity/stage/stageControl.ts:27](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/stage/stageControl.ts#L27)

指定秒数分、待つ。

#### Parameters

##### sec

`number`

#### Returns

`Promise`\<`void`\>

#### Implementation of

`IStageControl.wait`

***

### waitUntil()

> **waitUntil**(`condition`): `Promise`\<`void`\>

Defined in: [src/lib/entity/stage/stageControl.ts:43](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/stage/stageControl.ts#L43)

条件が成立する迄、待つ。
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

[`ConditionFunction`](../../../../utils/wait/type-aliases/ConditionFunction.md)

{Wait.ConditionFunction} - 条件結果を返す関数

#### Returns

`Promise`\<`void`\>

#### Implementation of

`IStageControl.waitUntil`

***

### waitWhile()

> **waitWhile**(`condition`): `Promise`\<`void`\>

Defined in: [src/lib/entity/stage/stageControl.ts:59](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/lib/entity/stage/stageControl.ts#L59)

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

[`ConditionFunction`](../../../../utils/wait/type-aliases/ConditionFunction.md)

{Wait.ConditionFunction} - 条件結果を返す関数

#### Returns

`Promise`\<`void`\>

#### Implementation of

`IStageControl.waitWhile`
