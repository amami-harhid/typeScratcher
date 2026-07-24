import type { NumericRange } from "./numericRange";

/** Hue range */
export type Hue = NumericRange<0, 360>;
/** Saturation range */
export type Saturation = NumericRange<0, 100>;
/** Brightness range */
export type Brightness = NumericRange<0, 100>;
/** Transparency range */
export type Transparency = NumericRange<0, 100>;