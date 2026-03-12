import { useIncidents } from "../hooks/useIncidents"
import IncidentTable from "../components/IncidentTable";

/**
 * Main dashboard page displaying incidents
 */

export default function DashboardPage() {

    const { incidents } = useIncidents();

    return (
        <div>

            <h1>Incident Dashboard</h1>

            <IncidentTable incidents={incidents}/>

        </div>
    )
}