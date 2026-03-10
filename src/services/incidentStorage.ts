import type { Incident } from "../types/incident";

// Centralized key for LocalStorage to avoid repeating string literals
const STORAGE_KEY = 'incidents';

/**
 * Retrieves incidents from LocalStorage.
 * Returns an empty array if no incidents exist yet.
 */
export function getIncidents(): Incident[] {
    const data = localStorage.getItem(STORAGE_KEY);
    
    if(!data){
        return [];
    }

    return JSON.parse(data) as Incident[];
}

/**
 * 
 * Saves the current list of incidents to LocalStorage.
 */

export function saveIncidents(incidents: Incident[]): void {
    const data = JSON.stringify(incidents);
    localStorage.setItem(STORAGE_KEY, data);
}
