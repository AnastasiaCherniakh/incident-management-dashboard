import type { SortOption } from "../utils/sortIncidents"

/**
 * UI controls for selecting sorting order.
 */

type Props = {
    sortBy: SortOption
    onSortChange: (value: SortOption) => void
}

export default function SortControls({ sortBy, onSortChange }: Props){
    return (
        <div>

            <label>Sort By</label>

            <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortOption)}>
                <option value="date-desc">Newest First</option>
                <option value="date-asc">Oldest First</option>
                <option value="severity-desc">Highest Severity</option>
                <option value="severity-asc">Lowest Severity</option>
            </select>

        </div>
    )
}