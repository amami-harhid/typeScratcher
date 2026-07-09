# Type Alias: NumericRange\<START, END, ARR, ACC\>

> **NumericRange**\<`START`, `END`, `ARR`, `ACC`\> = `ARR`\[`"length"`\] *extends* `END` ? `ACC` \| `START` \| `END` : `NumericRange`\<`START`, `END`, \[`...ARR`, `1`\], `ARR`\[`START`\] *extends* `undefined` ? `ACC` : `ACC` \| `ARR`\[`"length"`\]\>

Defined in: [src/type/common/numericRange.ts:1](https://github.com/amami-harhid/typeScratcher/blob/3c033398bc9eddc7a6eafd2adfc198090050a5d3/src/type/common/numericRange.ts#L1)

## Type Parameters

### START

`START` *extends* `number`

### END

`END` *extends* `number`

### ARR

`ARR` *extends* `unknown`[] = \[\]

### ACC

`ACC` *extends* `number` = `never`
