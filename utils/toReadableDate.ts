/**
 * Convert an ISO-8601 date string into a human-readable date string.
 *
 * @param date The ISO-8601 date string to convert.
 * @returns The human-readable date string.
 * @example toReadableDate('2021-09-01T12:00:00Z') // 'September 1, 2021, 12:00 PM'
 */
export function toReadableDate(date: string): string {
  const dateObject = new Date(date)
  return Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeStyle: 'short' }).format(dateObject)
}
