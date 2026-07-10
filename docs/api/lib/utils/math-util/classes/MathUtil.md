# Class: MathUtil

Defined in: [src/lib/utils/math-util.ts:1](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/utils/math-util.ts#L1)

## Constructors

### Constructor

> **new MathUtil**(): `MathUtil`

#### Returns

`MathUtil`

## Methods

### clamp()

> `static` **clamp**(`n`, `min`, `max`): `number`

Defined in: [src/lib/utils/math-util.ts:28](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/utils/math-util.ts#L28)

Clamp a number between two limits.
If n < min, return min. If n > max, return max. Else, return n.

#### Parameters

##### n

`number`

Number to clamp.

##### min

`number`

Minimum limit.

##### max

`number`

Maximum limit.

#### Returns

`number`

Value of n clamped to min and max.

***

### degToRad()

> `static` **degToRad**(`deg`): `number`

Defined in: [src/lib/utils/math-util.ts:7](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/utils/math-util.ts#L7)

Convert a value from degrees to radians.

#### Parameters

##### deg

`number`

Value in degrees.

#### Returns

`number`

Equivalent value in radians.

***

### inclusiveRandIntWithout()

> `static` **inclusiveRandIntWithout**(`lower`, `upper`, `excluded`): `number`

Defined in: [src/lib/utils/math-util.ts:93](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/utils/math-util.ts#L93)

Return a random number given an inclusive range and a number in that
range that should be excluded.

For instance, (1, 5, 3) will only pick 1, 2, 4, or 5 (with equal
probability)

#### Parameters

##### lower

`number`

The lower bound (inlcusive)

##### upper

`number`

The upper bound (inclusive), such that lower <= upper

##### excluded

`number`

The number to exclude (MUST be in the range)

#### Returns

`number`

A random integer in the range [lower, upper] that is not "excluded"

***

### radToDeg()

> `static` **radToDeg**(`rad`): `number`

Defined in: [src/lib/utils/math-util.ts:16](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/utils/math-util.ts#L16)

Convert a value from radians to degrees.

#### Parameters

##### rad

`number`

Value in radians.

#### Returns

`number`

Equivalent value in degrees.

***

### reducedSortOrdering()

> `static` **reducedSortOrdering**(`elts`): `number`[]

Defined in: [src/lib/utils/math-util.ts:76](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/utils/math-util.ts#L76)

Given an array of unique numbers,
returns a reduced array such that each element of the reduced array
represents the position of that element in a sorted version of the
original array.
E.g. [5, 19. 13, 1] => [1, 3, 2, 0]

#### Parameters

##### elts

`number`[]

The elements to sort and reduce

#### Returns

`number`[]

The array of reduced orderings

***

### scale()

> `static` **scale**(`i`, `iMin`, `iMax`, `oMin`, `oMax`): `number`

Defined in: [src/lib/utils/math-util.ts:116](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/utils/math-util.ts#L116)

Scales a number from one range to another.

#### Parameters

##### i

`number`

number to be scaled

##### iMin

`number`

input range minimum

##### iMax

`number`

input range maximum

##### oMin

`number`

output range minimum

##### oMax

`number`

output range maximum

#### Returns

`number`

scaled number

***

### tan()

> `static` **tan**(`angle`): `number`

Defined in: [src/lib/utils/math-util.ts:53](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/utils/math-util.ts#L53)

Convert a value from tan function in degrees.

#### Parameters

##### angle

`number`

in degrees

#### Returns

`number`

Correct tan value

***

### wrapClamp()

> `static` **wrapClamp**(`n`, `min`, `max`): `number`

Defined in: [src/lib/utils/math-util.ts:42](https://github.com/amami-harhid/typeScratcher/blob/088b8c4d5b9f05c65bbf70e67348fb16730c23a9/src/lib/utils/math-util.ts#L42)

Keep a number between two limits, wrapping "extra" into the range.
e.g., wrapClamp(7, 1, 5) == 2
wrapClamp(0, 1, 5) == 5
wrapClamp(-11, -10, 6) == 6, etc.

#### Parameters

##### n

`number`

Number to wrap.

##### min

`number`

Minimum limit.

##### max

`number`

Maximum limit.

#### Returns

`number`

- Value of n wrapped between min and max.
