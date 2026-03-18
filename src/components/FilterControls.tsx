import type { Severity, Status } from "../types/incident"

/**
 * UI controls allowing users to filter incidents
 * by severity and status
 */

type Props = {
    severity: Severity | ""
    status: Status | ""
    onSeverityChange: (value: Severity | "") => void
    onStatusChange: (value:  Status | "") => void
}

export default function FilterControls({
    severity,
    status,
    onSeverityChange,
    onStatusChange
}: Props) {

    return (
        <div>

            <label>Severity</label>
            <select 
            value={severity}
            onChange={(e) => onSeverityChange(e.target.value as Severity | "")}
            >
                <option value=''>All</option>
                <option value='low'>Low</option>
                <option value='medium'>Medium</option>
                <option value='high'>High</option>
                <option value='critical'>Critical</option>
            </select>

            <label>Status</label>
            <select 
            value={status}
            onChange={(e) => onStatusChange(e.target.value as Status | "")}
            >
                <option value=''>All</option>
                <option value='open'>Open</option>
                <option value='in-progress'>In progress</option>
                <option value='resolved'>Resolved</option>
            </select>
        </div>
    )

}