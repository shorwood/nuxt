import { fr } from 'date-fns/locale/fr'
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow'

/**
 * Given a date, returns a human-readable string representing the time since that date.
 *
 * @param date The date to convert.
 * @returns A human-readable string representing the time since the date.
 * @example toDateFromNow(new Date()) // 'à l'instant'
 */
export function toDateFromNow(date: Date | string): string {
  return formatDistanceToNow(date, { locale: fr, addSuffix: true })
}
