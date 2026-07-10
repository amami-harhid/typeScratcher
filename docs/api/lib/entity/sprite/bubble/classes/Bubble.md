# Class: Bubble

Defined in: [src/lib/entity/sprite/bubble.ts:13](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/bubble.ts#L13)

## Constructors

### Constructor

> **new Bubble**(`sprite`): `Bubble`

Defined in: [src/lib/entity/sprite/bubble.ts:18](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/bubble.ts#L18)

#### Parameters

##### sprite

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

#### Returns

`Bubble`

## Accessors

### bubbleState

#### Get Signature

> **get** **bubbleState**(): [`BubbleState`](../../../../../type/entity/TBubble/type-aliases/BubbleState.md)

Defined in: [src/lib/entity/sprite/bubble.ts:35](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/bubble.ts#L35)

##### Returns

[`BubbleState`](../../../../../type/entity/TBubble/type-aliases/BubbleState.md)

***

### direction

#### Get Signature

> **get** **direction**(): `number`

Defined in: [src/lib/entity/sprite/bubble.ts:44](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/bubble.ts#L44)

##### Returns

`number`

#### Set Signature

> **set** **direction**(`_direction`): `void`

Defined in: [src/lib/entity/sprite/bubble.ts:47](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/bubble.ts#L47)

##### Parameters

###### \_direction

`number`

##### Returns

`void`

***

### isBubbleActive

#### Get Signature

> **get** **isBubbleActive**(): `boolean`

Defined in: [src/lib/entity/sprite/bubble.ts:38](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/bubble.ts#L38)

##### Returns

`boolean`

## Methods

### \_createBubbleState()

> **\_createBubbleState**(): [`BubbleState`](../../../../../type/entity/TBubble/type-aliases/BubbleState.md)

Defined in: [src/lib/entity/sprite/bubble.ts:24](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/bubble.ts#L24)

#### Returns

[`BubbleState`](../../../../../type/entity/TBubble/type-aliases/BubbleState.md)

***

### \_positionBubble()

> **\_positionBubble**(): `void`

Defined in: [src/lib/entity/sprite/bubble.ts:159](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/bubble.ts#L159)

#### Returns

`void`

***

### \_renderBubble()

> **\_renderBubble**(`_properties?`): `Promise`\<`void`\>

Defined in: [src/lib/entity/sprite/bubble.ts:128](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/bubble.ts#L128)

#### Parameters

##### \_properties?

[`BubbleProperties`](../../../../../type/entity/TBubble/type-aliases/BubbleProperties.md) = `{}`

#### Returns

`Promise`\<`void`\>

***

### createDrawable()

> **createDrawable**(): `Promise`\<`void`\>

Defined in: [src/lib/entity/sprite/bubble.ts:67](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/bubble.ts#L67)

#### Returns

`Promise`\<`void`\>

***

### createTextSkin()

> **createTextSkin**(): `Promise`\<`void`\>

Defined in: [src/lib/entity/sprite/bubble.ts:75](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/bubble.ts#L75)

#### Returns

`Promise`\<`void`\>

***

### destroyBubble()

> **destroyBubble**(): `void`

Defined in: [src/lib/entity/sprite/bubble.ts:204](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/bubble.ts#L204)

#### Returns

`void`

***

### moveWithSprite()

> **moveWithSprite**(): `void`

Defined in: [src/lib/entity/sprite/bubble.ts:156](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/bubble.ts#L156)

#### Returns

`void`

***

### say()

> **say**(`text`, `properties?`): `Promise`\<`void`\>

Defined in: [src/lib/entity/sprite/bubble.ts:93](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/bubble.ts#L93)

#### Parameters

##### text

`string`

##### properties?

[`BubbleProperties`](../../../../../type/entity/TBubble/type-aliases/BubbleProperties.md) = `{}`

#### Returns

`Promise`\<`void`\>

***

### setScale()

> **setScale**(`w`, `h`): `void`

Defined in: [src/lib/entity/sprite/bubble.ts:56](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/bubble.ts#L56)

Bubbleスケールを設定する

#### Parameters

##### w

`number`

{number} - 横スケール(%).

##### h

`number`

{number} - 縦スケール(%).

#### Returns

`void`

***

### think()

> **think**(`text`, `properties?`): `Promise`\<`void`\>

Defined in: [src/lib/entity/sprite/bubble.ts:103](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/bubble.ts#L103)

#### Parameters

##### text

`string`

##### properties?

[`BubbleProperties`](../../../../../type/entity/TBubble/type-aliases/BubbleProperties.md) = `{}`

#### Returns

`Promise`\<`void`\>

***

### updateScale()

> **updateScale**(`w`, `h`): `void`

Defined in: [src/lib/entity/sprite/bubble.ts:113](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/entity/sprite/bubble.ts#L113)

#### Parameters

##### w

`number`

##### h

`number`

#### Returns

`void`
