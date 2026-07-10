# Class: Runtime

Defined in: [src/lib/engine/runtime.ts:12](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/engine/runtime.ts#L12)

## Extends

- `EventEmitter`

## Constructors

### Constructor

> **new Runtime**(): `Runtime`

Defined in: [src/lib/engine/runtime.ts:16](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/engine/runtime.ts#L16)

#### Returns

`Runtime`

#### Overrides

`EventEmitter.constructor`

## Properties

### audioEngine

> **audioEngine**: [`IAudioEngine`](../../../../type/sound/IAudioEngine/interfaces/IAudioEngine.md)

Defined in: [src/lib/engine/runtime.ts:15](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/engine/runtime.ts#L15)

***

### ioDevices

> **ioDevices**: `IODEVICES`

Defined in: [src/lib/engine/runtime.ts:14](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/engine/runtime.ts#L14)

***

### scratchEvent

> **scratchEvent**: [`ScratchEvent`](../../scratchEvent/classes/ScratchEvent.md)

Defined in: [src/lib/engine/runtime.ts:13](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/engine/runtime.ts#L13)

## Methods

### keyIsDown()

> **keyIsDown**(`key?`): `boolean`

Defined in: [src/lib/engine/runtime.ts:35](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/engine/runtime.ts#L35)

指定したキーが押されているかの判定

#### Parameters

##### key?

`string`

{string}

#### Returns

`boolean`
