export type NumericRange<
  /** START is a parameter representing the starting value, and it extends the number type. */
  START extends number,
  /** END is a parameter representing the end value, extending the number type. */
  END extends number,
  /** ARR is a parameter representing an array of `unknown` type; it defaults to an empty array. */
  ARR extends unknown[] = [],
  /** ACC is a parameter representing an accumulated value; it extends the `number` type. It defaults to the `never` type. */
  ACC extends number = never
> = ARR['length'] extends END
  ? ACC | START | END   // If the length of ARR is equal to END, it returns the type of ACC, START, or END.
  : NumericRange<       // If the length of ARR is not equal to END, recursively call the NumericRange type.
      START,
      END,
      [...ARR, 1],      // Add 1 to ARR. This increases the length of ARR.
      ARR[START] extends undefined ? ACC : ACC | ARR['length']  
      // If an element does not exist at the START position, the ACC is passed through as-is, 
      // if it does exist, the result is of a type corresponding to the length of either the ACC or the ARR. 
    >