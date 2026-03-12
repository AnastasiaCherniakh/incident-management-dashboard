import type { Incident } from "../types/incident"
import IncidentRow from "./IncidentRow"

/**
 * Table component responsible for displaying
 * a list of incidents.
 */

type Props = {
    incidents: Incident[]
}

export default function IncidentTable({ incidents }: Props){
    return (
        <table>

            <thead>
                <tr>
                    <th>Title</th>
                    <th>Severity</th>
                    <th>Status</th>
                    <th>Category</th>
                    <th>Created</th>
                </tr>
            </thead>

            <tbody>
                {incidents.map((incident) => (
                    <IncidentRow 
                    key={incident.id}
                    incident={incident}/>
                    ))}
            </tbody>
        </table>
    )
}