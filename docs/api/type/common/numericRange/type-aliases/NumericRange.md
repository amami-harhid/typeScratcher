# Type Alias: NumericRange\<START, END, ARR, ACC\>

> **NumericRange**\<`START`, `END`, `ARR`, `ACC`\> = `ARR`\[`"length"`\] *extends* `END` ? `ACC` \| `START` \| `END` : `NumericRange`\<`START`, `END`, \[`...ARR`, `1`\], `ARR`\[`START`\] *extends* `undefined` ? `ACC` : `ACC` \| `ARR`\[`"length"`\]\>

Defined in: [src/type/common/numericRange.ts:1](https://github.com/amami-harhid/typeScratcher/blob/8b5206f2f07e71809cdee699141d949db76458cf/src/type/common/numericRange.ts#L1)

## Type Parameters

### START

`START` *extends* `number`

### END

`END` *extends* `number`

### ARR

`ARR` *extends* `unknown`[] = \[\]

### ACC

`ACC` *extends* `number` = `never`
