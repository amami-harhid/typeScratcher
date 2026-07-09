# Function: uid()

> **uid**(): `string`

Defined in: [src/lib/utils/uid.ts:19](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/lib/utils/uid.ts#L19)

Generate a unique ID, from Blockly.  This should be globally unique.
87 characters ^ 20 length > 128 bits (better than a UUID).

## Returns

`string`

A globally unique ID string.
