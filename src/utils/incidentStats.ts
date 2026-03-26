import type { Incident } from "../types/incident";

/**
 * Calculate dashboard statistics from incidents list. 
 */
export function getIncidentStats(incidents: Incident[]) {
    const total = incidents.length;

    const open = incidents.filter(incident => incident.status === 'open').length;

    const critical = incidents.filter(incident => incident.severity === 'critical').length;

    return {
        total,
        open,
        critical
    };
}