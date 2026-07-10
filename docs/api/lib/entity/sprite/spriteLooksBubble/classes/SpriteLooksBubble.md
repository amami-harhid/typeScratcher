# Class: SpriteLooksBubble

Defined in: [src/lib/entity/sprite/spriteLooksBubble.ts:7](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/spriteLooksBubble.ts#L7)

吹き出し

## Implements

- [`ISpriteLooksBubble`](../../../../../type/entity/sprite/ISpriteLooksBubble/interfaces/ISpriteLooksBubble.md)

## Constructors

### Constructor

> **new SpriteLooksBubble**(`entity`): `SpriteLooksBubble`

Defined in: [src/lib/entity/sprite/spriteLooksBubble.ts:15](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/spriteLooksBubble.ts#L15)

**`Internal`**

#### Parameters

##### entity

[`ISprite`](../../../../../type/entity/sprite/interfaces/ISprite.md)

{ISprite}

#### Returns

`SpriteLooksBubble`

## Methods

### say()

> **say**(`text`, `properties?`): `void`

Defined in: [src/lib/entity/sprite/spriteLooksBubble.ts:29](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/spriteLooksBubble.ts#L29)

言う

#### Parameters

##### text

`string`

テキスト

##### properties?

[`BubbleProperties`](../../../../../type/entity/TBubble/type-aliases/BubbleProperties.md)

プロパティ

#### Returns

`void`

```ts
 this.Looks.Bubble.say('こんにちは');
```

#### Implementation of

[`ISpriteLooksBubble`](../../../../../type/entity/sprite/ISpriteLooksBubble/interfaces/ISpriteLooksBubble.md).[`say`](../../../../../type/entity/sprite/ISpriteLooksBubble/interfaces/ISpriteLooksBubble.md#say)

***

### sayForSecs()

> **sayForSecs**(`text`, `sec`, `properties?`): `Promise`\<`void`\>

Defined in: [src/lib/entity/sprite/spriteLooksBubble.ts:44](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/spriteLooksBubble.ts#L44)

指定した秒数分、言う。

#### Parameters

##### text

`string`

テキスト

##### sec

`number`

秒数

##### properties?

[`BubbleProperties`](../../../../../type/entity/TBubble/type-aliases/BubbleProperties.md)

プロパティ

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISpriteLooksBubble`](../../../../../type/entity/sprite/ISpriteLooksBubble/interfaces/ISpriteLooksBubble.md).[`sayForSecs`](../../../../../type/entity/sprite/ISpriteLooksBubble/interfaces/ISpriteLooksBubble.md#sayforsecs)

***

### think()

> **think**(`text`, `properties?`): `void`

Defined in: [src/lib/entity/sprite/spriteLooksBubble.ts:55](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/spriteLooksBubble.ts#L55)

考える

#### Parameters

##### text

`string`

テキスト

##### properties?

[`BubbleProperties`](../../../../../type/entity/TBubble/type-aliases/BubbleProperties.md)

プロパティ

#### Returns

`void`

#### Implementation of

[`ISpriteLooksBubble`](../../../../../type/entity/sprite/ISpriteLooksBubble/interfaces/ISpriteLooksBubble.md).[`think`](../../../../../type/entity/sprite/ISpriteLooksBubble/interfaces/ISpriteLooksBubble.md#think)

***

### thinkForSecs()

> **thinkForSecs**(`text`, `sec`, `properties?`): `Promise`\<`void`\>

Defined in: [src/lib/entity/sprite/spriteLooksBubble.ts:69](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/spriteLooksBubble.ts#L69)

指定した秒数分、考える。

#### Parameters

##### text

`string`

テキスト

##### sec

`number`

秒数

##### properties?

[`BubbleProperties`](../../../../../type/entity/TBubble/type-aliases/BubbleProperties.md)

プロパティ

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISpriteLooksBubble`](../../../../../type/entity/sprite/ISpriteLooksBubble/interfaces/ISpriteLooksBubble.md).[`thinkForSecs`](../../../../../type/entity/sprite/ISpriteLooksBubble/interfaces/ISpriteLooksBubble.md#thinkforsecs)

***

### update()

> **update**(): `void`

Defined in: [src/lib/entity/sprite/spriteLooksBubble.ts:75](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/entity/sprite/spriteLooksBubble.ts#L75)

#### Returns

`void`
