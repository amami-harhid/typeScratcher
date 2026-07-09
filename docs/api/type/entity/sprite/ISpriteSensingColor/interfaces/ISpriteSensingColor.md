# Interface: ISpriteSensingColor

Defined in: [src/type/entity/sprite/ISpriteSensingColor.ts:4](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/sprite/ISpriteSensingColor.ts#L4)

Sprite Sensing(調べる) Color

## Methods

### isTouching()

> **isTouching**(`targetColor`): `boolean`

Defined in: [src/type/entity/sprite/ISpriteSensingColor.ts:11](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/sprite/ISpriteSensingColor.ts#L11)

指定した色に触れたことを判定する

#### Parameters

##### targetColor

`string`

{string} - 色,先頭#,16進数

#### Returns

`boolean`

***

### isTouchingBy()

> **isTouchingBy**(`ownColor`, `targetColor`): `boolean`

Defined in: [src/type/entity/sprite/ISpriteSensingColor.ts:19](https://github.com/amami-harhid/typeScratcher/blob/0917aa907c2a4851193fb04e3d2b06ed49b59613/src/type/entity/sprite/ISpriteSensingColor.ts#L19)

指定した色(target)に自身の色(mask)が触れたことを判定する

#### Parameters

##### ownColor

`string`

{string} - 自身の色,先頭#,16進数

##### targetColor

`string`

{string} - 相手の色,先頭#,16進数

#### Returns

`boolean`
