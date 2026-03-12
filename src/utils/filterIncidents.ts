import type { Incident, Severity, Status } from "../types/incident"

/**
 * Filters incidents by severity and status.
 * Returns a new  filtered array without modifying the original data.
 */

type FilterOptions = {
    severity?: Severity
    status?: Status
}

export function filterIncidents( incidents: Incident[], filters: FilterOptions ): Incident[] {
    return incidents.filter((incident) => {

        const severityMatch = 
        !filters.severity || incident.severity === filters.severity;

        const statusMatch =
        !filters.status || incident.status === filters.status

        return severityMatch && statusMatch
    })
}