/**
 * Formats a timestamp into a human-readable data-time
 * using the Intl API (locale-aware)
 */

export function formatDate(timestamp: number): string {
    return new Intl.DateTimeFormat("en-GB", {
        dateStyle: "medium",
        timeStyle: "short",
    }).format(new Date(timestamp));
}