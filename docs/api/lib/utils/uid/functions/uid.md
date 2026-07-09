# Function: uid()

> **uid**(): `string`

Defined in: [src/lib/utils/uid.ts:19](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/lib/utils/uid.ts#L19)

Generate a unique ID, from Blockly.  This should be globally unique.
87 characters ^ 20 length > 128 bits (better than a UUID).

## Returns

`string`

A globally unique ID string.
