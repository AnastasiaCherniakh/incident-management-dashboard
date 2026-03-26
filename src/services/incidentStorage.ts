import type { Incident, Status } from "../types/incident";
import { mockIncidents } from "../data/mockIncidents";

// Centralized key for LocalStorage to avoid repeating string literals
const STORAGE_KEY = 'incidents';

/**
 * Retrieves incidents from LocalStorage.
 * Returns mock data if no incidents exist yet.
 */
export function getIncidents(): Incident[] {
    const data = localStorage.getItem(STORAGE_KEY);
    
    if(!data){
        // First visit -> just mock data
        return mockIncidents;
    }

    const stored = JSON.parse(data) as Incident[];

    // Merge mock + stored
    const merged = [...mockIncidents, ...stored];

    const unique = merged.filter(
        (incident, index, self) =>
            index === self.findIndex(i => i.id === incident.id)
    );

    return unique;
}

/**
 * 
 * Saves the current list of incidents to LocalStorage.
 */

export function saveIncidents(incidents: Incident[]): void {
    const data = JSON.stringify(incidents);
    localStorage.setItem(STORAGE_KEY, data);
}

/**
 * Updates the status of a specific incident and persists it.
 */
export function updateIncidentStatus(
    id: string,
    newStatus: Status
): Incident[] {

    const incidents = getIncidents();

    const updated = incidents.map((incident) => 
    incident.id === id
        ? { ...incident, status: newStatus }
        : incident
    );

    saveIncidents(updated);

    return updated
}
