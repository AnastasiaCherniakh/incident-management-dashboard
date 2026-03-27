import type { Incident, Status } from "../../types/incident"
import IncidentRow from "../IncidentRow"
import './IncidentTable.css'

/**
 * Table component responsible for displaying
 * a list of incidents.
 */

type Props = {
    incidents: Incident[]
    onStatusChange: (id: string, status: Status) => void
}

export default function IncidentTable({ incidents, onStatusChange }: Props){
    return (
        <div className="table-wrapper">
            <table className="incident-table">

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
                    {incidents.length === 0 ? (
                        <tr>
                            <td colSpan={5}>No incidents found</td> {/* Show message when table is empty */}
                        </tr>
                    ) : (
                        incidents.map((incident) => (
                            <IncidentRow 
                            key={incident.id}
                            incident={incident}
                            onStatusChange={onStatusChange}
                            />
                        ))
                    )}
                    
                </tbody>
            </table>
        </div>
    )
}