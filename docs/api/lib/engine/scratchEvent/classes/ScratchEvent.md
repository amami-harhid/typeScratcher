# Class: ScratchEvent

Defined in: [src/lib/engine/scratchEvent.ts:14](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/engine/scratchEvent.ts#L14)

Scratch Event

## Extends

- `EventEmitter`

## Constructors

### Constructor

> **new ScratchEvent**(): `ScratchEvent`

Defined in: [src/lib/engine/scratchEvent.ts:53](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/engine/scratchEvent.ts#L53)

#### Returns

`ScratchEvent`

#### Overrides

`EventEmitter.constructor`

## Accessors

### running

#### Get Signature

> **get** **running**(): `boolean`

Defined in: [src/lib/engine/scratchEvent.ts:69](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/engine/scratchEvent.ts#L69)

##### Returns

`boolean`

***

### runningThreadCount

#### Set Signature

> **set** **runningThreadCount**(`runningThreadCount`): `void`

Defined in: [src/lib/engine/scratchEvent.ts:72](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/engine/scratchEvent.ts#L72)

##### Parameters

###### runningThreadCount

`number`

##### Returns

`void`

***

### CANVAS\_CLICKED

#### Get Signature

> **get** `static` **CANVAS\_CLICKED**(): `string`

Defined in: [src/lib/engine/scratchEvent.ts:34](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/engine/scratchEvent.ts#L34)

##### Returns

`string`

***

### GREEN\_FLAG\_CLICKED

#### Get Signature

> **get** `static` **GREEN\_FLAG\_CLICKED**(): `string`

Defined in: [src/lib/engine/scratchEvent.ts:16](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/engine/scratchEvent.ts#L16)

##### Returns

`string`

***

### PAUSE\_CLICKED

#### Get Signature

> **get** `static` **PAUSE\_CLICKED**(): `string`

Defined in: [src/lib/engine/scratchEvent.ts:25](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/engine/scratchEvent.ts#L25)

##### Returns

`string`

***

### READY\_AUDIO\_ENGINE

#### Get Signature

> **get** `static` **READY\_AUDIO\_ENGINE**(): `string`

Defined in: [src/lib/engine/scratchEvent.ts:22](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/engine/scratchEvent.ts#L22)

##### Returns

`string`

***

### RESTART\_CLICKED

#### Get Signature

> **get** `static` **RESTART\_CLICKED**(): `string`

Defined in: [src/lib/engine/scratchEvent.ts:28](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/engine/scratchEvent.ts#L28)

##### Returns

`string`

***

### SPRITE\_GLIDE

#### Get Signature

> **get** `static` **SPRITE\_GLIDE**(): `string`

Defined in: [src/lib/engine/scratchEvent.ts:37](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/engine/scratchEvent.ts#L37)

##### Returns

`string`

***

### SPRITE\_GLIDE\_STOP

#### Get Signature

> **get** `static` **SPRITE\_GLIDE\_STOP**(): `string`

Defined in: [src/lib/engine/scratchEvent.ts:40](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/engine/scratchEvent.ts#L40)

##### Returns

`string`

***

### SPRITE\_INIT

#### Get Signature

> **get** `static` **SPRITE\_INIT**(): `string`

Defined in: [src/lib/engine/scratchEvent.ts:43](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/engine/scratchEvent.ts#L43)

##### Returns

`string`

***

### START\_AUDIO\_ENGINE

#### Get Signature

> **get** `static` **START\_AUDIO\_ENGINE**(): `string`

Defined in: [src/lib/engine/scratchEvent.ts:19](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/engine/scratchEvent.ts#L19)

##### Returns

`string`

***

### STOP\_CLICKED

#### Get Signature

> **get** `static` **STOP\_CLICKED**(): `string`

Defined in: [src/lib/engine/scratchEvent.ts:31](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/engine/scratchEvent.ts#L31)

##### Returns

`string`

## Methods

### backdropChangerRegist()

> **backdropChangerRegist**(`backdropName`): `void`

Defined in: [src/lib/engine/scratchEvent.ts:207](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/engine/scratchEvent.ts#L207)

#### Parameters

##### backdropName

`string`

#### Returns

`void`

***

### clonedEventRegist()

> **clonedEventRegist**(`sprite`): `void`

Defined in: [src/lib/engine/scratchEvent.ts:234](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/engine/scratchEvent.ts#L234)

#### Parameters

##### sprite

[`Sprite`](../../../entity/sprite/classes/Sprite.md)

#### Returns

`void`

***

### getClonedEventMessageId()

> **getClonedEventMessageId**(`sprite`): `string`

Defined in: [src/lib/engine/scratchEvent.ts:262](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/engine/scratchEvent.ts#L262)

#### Parameters

##### sprite

[`Sprite`](../../../entity/sprite/classes/Sprite.md)

#### Returns

`string`

***

### greenFlagClick()

> **greenFlagClick**(): `void`

Defined in: [src/lib/engine/scratchEvent.ts:87](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/engine/scratchEvent.ts#L87)

#### Returns

`void`

***

### isBackdropChangerExist()

> **isBackdropChangerExist**(`backdropName`): `boolean`

Defined in: [src/lib/engine/scratchEvent.ts:215](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/engine/scratchEvent.ts#L215)

#### Parameters

##### backdropName

`string`

#### Returns

`boolean`

***

### isClonedEventExist()

> **isClonedEventExist**(`messageId`): `boolean`

Defined in: [src/lib/engine/scratchEvent.ts:244](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/engine/scratchEvent.ts#L244)

#### Parameters

##### messageId

`string`

#### Returns

`boolean`

***

### keyClick()

> **keyClick**(`key`): `void`

Defined in: [src/lib/engine/scratchEvent.ts:163](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/engine/scratchEvent.ts#L163)

#### Parameters

##### key

`string`

#### Returns

`void`

***

### messageReceiverRegist()

> **messageReceiverRegist**(`messageId`): `void`

Defined in: [src/lib/engine/scratchEvent.ts:186](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/engine/scratchEvent.ts#L186)

#### Parameters

##### messageId

`string`

#### Returns

`void`

***

### pauseMarkClick()

> **pauseMarkClick**(): `void`

Defined in: [src/lib/engine/scratchEvent.ts:132](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/engine/scratchEvent.ts#L132)

#### Returns

`void`

***

### spliteClick()

> **spliteClick**(): `void`

Defined in: [src/lib/engine/scratchEvent.ts:151](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/engine/scratchEvent.ts#L151)

#### Returns

`void`

***

### stageFirstClick()

> **stageFirstClick**(): `void`

Defined in: [src/lib/engine/scratchEvent.ts:75](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/engine/scratchEvent.ts#L75)

#### Returns

`void`

***

### stopMarkClick()

> **stopMarkClick**(): `void`

Defined in: [src/lib/engine/scratchEvent.ts:118](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/lib/engine/scratchEvent.ts#L118)

#### Returns

`void`
