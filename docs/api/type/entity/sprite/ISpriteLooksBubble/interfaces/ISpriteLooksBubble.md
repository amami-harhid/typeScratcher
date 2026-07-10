# Interface: ISpriteLooksBubble

Defined in: [src/type/entity/sprite/ISpriteLooksBubble.ts:4](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/type/entity/sprite/ISpriteLooksBubble.ts#L4)

吹き出し

## Methods

### say()

> **say**(`text?`, `properties?`): `void`

Defined in: [src/type/entity/sprite/ISpriteLooksBubble.ts:12](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/type/entity/sprite/ISpriteLooksBubble.ts#L12)

言う

#### Parameters

##### text?

`string`

テキスト

##### properties?

[`BubbleProperties`](../../../TBubble/type-aliases/BubbleProperties.md)

プロパティ

#### Returns

`void`

***

### sayForSecs()

> **sayForSecs**(`text`, `sec`, `properties?`): `Promise`\<`void`\>

Defined in: [src/type/entity/sprite/ISpriteLooksBubble.ts:19](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/type/entity/sprite/ISpriteLooksBubble.ts#L19)

指定した秒数分、言う。

#### Parameters

##### text

`string`

テキスト

##### sec

`number`

秒数

##### properties?

[`BubbleProperties`](../../../TBubble/type-aliases/BubbleProperties.md)

プロパティ

#### Returns

`Promise`\<`void`\>

***

### think()

> **think**(`text?`, `properties?`): `void`

Defined in: [src/type/entity/sprite/ISpriteLooksBubble.ts:25](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/type/entity/sprite/ISpriteLooksBubble.ts#L25)

考える

#### Parameters

##### text?

`string`

{string} - テキスト

##### properties?

[`BubbleProperties`](../../../TBubble/type-aliases/BubbleProperties.md)

{BubbleProperties}

#### Returns

`void`

***

### thinkForSecs()

> **thinkForSecs**(`text`, `sec`, `properties?`): `Promise`\<`void`\>

Defined in: [src/type/entity/sprite/ISpriteLooksBubble.ts:32](https://github.com/amami-harhid/typeScratcher/blob/81dd88dfc378af938ad5c35a818e215da87a8798/src/type/entity/sprite/ISpriteLooksBubble.ts#L32)

指定した秒数分、考える。

#### Parameters

##### text

`string`

{string} - テキスト

##### sec

`number`

{number} - 秒数

##### properties?

[`BubbleProperties`](../../../TBubble/type-aliases/BubbleProperties.md)

{BubbleProperties}

#### Returns

`Promise`\<`void`\>
