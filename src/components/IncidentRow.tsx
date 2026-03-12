import type { Incident } from "../types/incident"

/**
 * Displays a single incident row inside the table
 * Responsible only for presentation incident data.
 */

type Props = {
    incident: Incident
}

export default function IncidentRow( { incident }: Props ) {
    return (
        <tr>
            <td>{incident.title}</td>
            <td>{incident.severity}</td>
            <td>{incident.status}</td>
            <td>{incident.category}</td>
            <td>{new Date(incident.createdAt).toLocaleString()}</td>
        </tr>
    )
}