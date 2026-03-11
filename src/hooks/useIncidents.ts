import { useState } from "react";
import type { Incident, Status } from "../types/incident";
import { getIncidents, saveIncidents } from "../services/incidentStorage";
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

        const updatedIncidents = [...incidents, newIncident];

        setIncidents(updatedIncidents);
        saveIncidents(updatedIncidents);
    }

    function updateIncidentStatus(id: string, status: Status) {
        const updatedIncidents = incidents.map((incident) =>
            incident.id === id ? { ...incident, status } : incident
        );

        setIncidents(updatedIncidents);
        saveIncidents(updatedIncidents);
    }

    return {
        incidents,
        addIncident,
        updateIncidentStatus
    }
}