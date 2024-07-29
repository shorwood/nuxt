/**
 * Convert a number to a human-readable string representing.
 *
 * @param number The number to convert.
 * @returns The human-readable string.
 * @example toReadableNumber(123456789) // '123,456,789'
 */
export function toReadableNumber(number: number): string {
  return number.toLocaleString()
}
