import { useIncidents } from "../hooks/useIncidents";
import IncidentForm  from '../components/IncidentForm';

// Page responsible for connecting the incident form to the incident management hook

export default function ReportIncidentPage() {
    
    const { addIncident } = useIncidents();

    return (
        <div>
            <h1>Report Incident</h1>
            <IncidentForm onSubmit={addIncident} />
        </div>
    )
}