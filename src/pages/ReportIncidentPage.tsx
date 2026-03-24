import { useIncidents } from "../hooks/useIncidents";
import { Link } from "react-router-dom";
import IncidentForm  from '../components/IncidentForm';

// Page responsible for connecting the incident form to the incident management hook

export default function ReportIncidentPage() {
    
    const { addIncident } = useIncidents();

    return (
        <div>
            <h1>Report Incident</h1>
            <Link to="/">
                <button>Back to Dashboard</button>
            </Link>
            <IncidentForm onSubmit={addIncident} />
        </div>
    )
}