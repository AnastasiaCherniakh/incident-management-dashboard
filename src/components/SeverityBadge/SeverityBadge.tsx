import type { Severity } from "../../types/incident";
import './SeverityBadge.css';

interface Props {
    severity: Severity;
}

/**
 * Maps severity values to CSS classes.
 */

const severityClassMap: Record<Severity, string> = {
    low: "badge badge-low",
    medium: "badge badge-medium",
    high: "badge badge-high",
    critical: "badge badge-critical"
}

export default function SeverityBadge({ severity }: Props) {
    return (
        <span className={severityClassMap[severity]}>
            {severity}
        </span>
    )
}