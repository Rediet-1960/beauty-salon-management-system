// Shared helper/utility functions used across the app

/**
 * Format a price number to display as currency
 * Example: formatPrice(50) → "$50.00"
 */
export function formatPrice(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

/**
 * Format duration in minutes to readable string
 * Example: formatDuration(90) → "1h 30min"
 */
export function formatDuration(minutes) {
  if (minutes < 60) return `${minutes}min`
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m > 0 ? `${h}h ${m}min` : `${h}h`
}
