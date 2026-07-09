# Class: Keyboard

Defined in: [src/lib/engine/keyboad.ts:11](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/engine/keyboad.ts#L11)

## Constructors

### Constructor

> **new Keyboard**(`runtime`): `Keyboard`

Defined in: [src/lib/engine/keyboad.ts:15](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/engine/keyboad.ts#L15)

#### Parameters

##### runtime

[`Runtime`](../../runtime/classes/Runtime.md)

#### Returns

`Keyboard`

## Accessors

### spaceStopPropagation

#### Get Signature

> **get** **spaceStopPropagation**(): `boolean`

Defined in: [src/lib/engine/keyboad.ts:49](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/engine/keyboad.ts#L49)

##### Returns

`boolean`

#### Set Signature

> **set** **spaceStopPropagation**(`spaceStopPropagation`): `void`

Defined in: [src/lib/engine/keyboad.ts:52](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/engine/keyboad.ts#L52)

##### Parameters

###### spaceStopPropagation

`boolean`

##### Returns

`void`

## Methods

### \_keyArgToScratchKey()

> **\_keyArgToScratchKey**(`keyArg`): `string`

Defined in: [src/lib/engine/keyboad.ts:104](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/engine/keyboad.ts#L104)

Convert from a block argument to a Scratch key name.

#### Parameters

##### keyArg

`string` \| `number`

the input arg.

#### Returns

`string`

the corresponding Scratch key.

***

### \_keyStringToScratchKey()

> **\_keyStringToScratchKey**(`keyString`): `string`

Defined in: [src/lib/engine/keyboad.ts:73](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/engine/keyboad.ts#L73)

Convert from a keyboard event key name to a Scratch key name.

#### Parameters

##### keyString

`string`

the input key string.

#### Returns

`string`

the corresponding Scratch key, or an empty string.

***

### keyIsDown()

> **keyIsDown**(`keyArg?`): `boolean`

Defined in: [src/lib/engine/keyboad.ts:60](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/engine/keyboad.ts#L60)

キーが押されているかを判定する

#### Parameters

##### keyArg?

`string`

key argument.

#### Returns

`boolean`

Is the specified key down?

***

### postData()

> **postData**(`data`): `void`

Defined in: [src/lib/engine/keyboad.ts:34](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/engine/keyboad.ts#L34)

#### Parameters

##### data

`POST_DATA`

#### Returns

`void`
