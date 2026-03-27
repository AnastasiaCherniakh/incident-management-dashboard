import { useState } from "react"
import { Link } from "react-router-dom"
import { useIncidents } from "../../hooks/useIncidents"
import IncidentTable from "../../components/IncidentTable/IncidentTable"
import FilterControls from "../../components/FilterControls/FilterControls"
import SortControls from "../../components/SortControls"
import SummaryCard from "../../components/SummaryCard/SummaryCard"
import { filterIncidents } from "../../utils/filterIncidents"
import { sortIncidents } from "../../utils/sortIncidents"
import type { SortOption } from "../../utils/sortIncidents"
import type { Severity, Status } from "../../types/incident"
import { getIncidentStats } from "../../utils/incidentStats"
import './DashboardPage.css'

/**
 * Main dashboard page displaying incidents
 */

export default function DashboardPage() {

    const { incidents, updateStatus } = useIncidents();

    const [severityFilter, setSeverityFilter] = useState<Severity | ''>('');
    const [statusFilter, setStatusFilter] = useState<Status | ''>('');
    const [sortBy, setSortBy] = useState<SortOption>('date-desc')

    // First step: filter
    const filteredIncidents = filterIncidents(incidents, {
        severity: severityFilter || undefined,
        status: statusFilter || undefined
    });

    // Second step: sort
    const sortedIncidents = sortIncidents(filteredIncidents, sortBy); 

    // Third step: get stats
    const stats = getIncidentStats(sortedIncidents);

    return (
        <div className="dashboard">

            <h1>Incident Dashboard</h1>

            <div className="dashboard-actions">
                <Link to="/report">
                    <button className="button-primary">+ Add New Incident</button>
                </Link>
            </div>

            <div className="summary-cards">
                <SummaryCard title="Total" variant="neutral" value={stats.total} />
                <SummaryCard title="Open" variant="warning" value={stats.open} />
                <SummaryCard title="Critical" variant="danger" value={stats.critical} />
            </div>

            <div className="controls">
                <FilterControls 
                severity={severityFilter}
                status={statusFilter}
                onSeverityChange={setSeverityFilter}
                onStatusChange={setStatusFilter}
                />

                <SortControls 
                sortBy={sortBy}
                onSortChange={setSortBy}/>
            </div>

            <IncidentTable 
            incidents={sortedIncidents}
            onStatusChange={updateStatus}
            />

        </div>
    )
}