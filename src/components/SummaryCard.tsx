
type Variant = 'neutral' | 'warning' | 'danger';

type Props = {
    title: string;
    value: number;
    variant?: Variant;
}

/**
 * Summary cards for dashboard.
 */

export default function SummaryCard({ title, value, variant = "neutral" }: Props) {
    return (
        <div className={`summary-card summary-${variant}`}>
            <p className="summary-title">{title}</p>
            <p className="summary-value">{value}</p>
        </div>
    )
}