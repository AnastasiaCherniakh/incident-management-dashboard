import { useState } from "react"
import { useIncidents } from "../hooks/useIncidents"
import IncidentTable from "../components/IncidentTable"
import FilterControls from "../components/FilterControls"
import { filterIncidents } from "../utils/filterIncidents"
import type { Severity, Status } from "../types/incident"

/**
 * Main dashboard page displaying incidents
 */

export default function DashboardPage() {

    const { incidents } = useIncidents();

    const [severityFilter, setSeverityFilter] = useState<Severity | ''>('');
    const [statusFilter, setStatusFilter] = useState<Status | ''>('');

    const filteredIncidents = filterIncidents(incidents, {
        severity: severityFilter || undefined,
        status: statusFilter || undefined
    });

    return (
        <div>

            <h1>Incident Dashboard</h1>

            <FilterControls 
            severity={severityFilter}
            status={statusFilter}
            onSeverityChange={setSeverityFilter}
            onStatusChange={setStatusFilter}
            />

            <IncidentTable incidents={filteredIncidents}/>

        </div>
    )
}