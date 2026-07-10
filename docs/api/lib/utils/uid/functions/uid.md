# Function: uid()

> **uid**(): `string`

Defined in: [src/lib/utils/uid.ts:19](https://github.com/amami-harhid/typeScratcher/blob/a4418bf571141c7abcffd6125697dd4f3ad07abf/src/lib/utils/uid.ts#L19)

Generate a unique ID, from Blockly.  This should be globally unique.
87 characters ^ 20 length > 128 bits (better than a UUID).

## Returns

`string`

A globally unique ID string.
