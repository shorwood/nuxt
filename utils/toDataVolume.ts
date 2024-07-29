/**
 * Given a size in bytes, returns a human-readable string.
 *
 * @param size The size in bytes.
 * @returns A human-readable string representing the size.
 * @example toDataVolume(1024) // '1.00 KB'
 */
export function toDataVolume(size: number): string {
  const units = ['B', 'KB', 'MB', 'GB', 'TB']
  let unit = 0
  while (size > 1024) { size /= 1024; unit++ }
  return `${size.toFixed(2)} ${units[unit]}`
}
