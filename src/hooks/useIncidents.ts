import { useState } from "react";
import type { Incident, Status } from "../types/incident";
import { getIncidents, saveIncidents, updateIncidentStatus } from "../services/incidentStorage";
import type { IncidentInput } from "../utils/validateIncident";

/**
 * Custom hook responsible for managing incident state.
 * Handles loading, creating and updating incidents,
 * and persists them to LocalStorage.
 */

export function useIncidents() {

    // Lazy initialization prevents an extra render
    const [incidents, setIncidents] = useState<Incident[]>(() => getIncidents());

    function addIncident(input: IncidentInput) {

        //Create a full Incident object from validated form input
        const newIncident: Incident = {
            id: crypto.randomUUID(),
            title: input.title,
            description: input.description,
            severity: input.severity as Incident['severity'],
            status: 'open',
            category: input.category as Incident['category'],
            createdAt: Date.now()
        }

        setIncidents(prev => {
            const updated = [...prev, newIncident];
            saveIncidents(updated);
            return updated;
        });
    }

/**
 * Updates incident status and syncs state with storage.
 */
    function updateStatus(id: string, status: Status) {
        const updated = updateIncidentStatus(id, status)
        setIncidents(updated);
    }

    return {
        incidents,
        addIncident,
        updateStatus
    }
}