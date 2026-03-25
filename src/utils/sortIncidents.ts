import type { Incident, Severity } from "../types/incident"


// Defines avaiLable sorting options
export type SortOption =
    | "date-asc"
    | "date-desc"
    | "severity-asc"
    | "severity-desc"

/** 
 * Maps severity levels to numeric values for sorting.
 */
const severityOrder: Record<Severity, number> = {
    low: 1,
    medium: 2,
    high: 3,
    critical: 4
}

/**
 * Sorts incidents based on selected option.
 * Returns a new sorted array.
 */
export function sortIncidents(
    incidents: Incident[],
    sortBy: SortOption
): Incident[] {

    const sorted = [...incidents]; // avoid mutation

    return sorted.sort((a, b) => {
        switch(sortBy) {
            case "date-asc":
                return a.createdAt - b.createdAt
            case "date-desc":
                return b.createdAt - a.createdAt
            case "severity-asc":
                return severityOrder[a.severity] - severityOrder[b.severity]
            case "severity-desc":
                return severityOrder[b.severity] - severityOrder[a.severity]
            default:
                return 0
        };
    });
}
