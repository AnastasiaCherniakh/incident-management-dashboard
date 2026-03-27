import type { Incident, Status } from "../types/incident"
import SeverityBadge from "./SeverityBadge/SeverityBadge"

/**
 * Displays a single incident row inside the table
 * Responsible only for presentation incident data.
 */

type Props = {
    incident: Incident
    onStatusChange: (id: string, status: Status) => void
}

export default function IncidentRow( { incident, onStatusChange }: Props ) {
    return (
        <tr>
            <td>{incident.title}</td>
            <td>
                <SeverityBadge severity={incident.severity} />
            </td>
            <td>
                <select
                value={incident.status} 
                onChange={(e) => 
                    onStatusChange(incident.id, e.target.value as Status)
                }
                >
                    <option value="open">Open</option>
                    <option value="in-progress">In Progress</option>
                    <option value="resolved">Resolved</option>
                </select>
            </td>
            <td>{incident.category}</td>
            <td>{new Date(incident.createdAt).toLocaleString()}</td>
        </tr>
    )
}