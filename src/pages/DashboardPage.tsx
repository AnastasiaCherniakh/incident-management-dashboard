import { useIncidents } from "../hooks/useIncidents"

/**
 * Dashboard page displaying all the incidents in a table.
 * This page reads incident data from the custom hook
 * and renders a simple overview for the user.
 */

export default function DashboardPage() {

    const { incidents } = useIncidents();

    return (
        <div>

            <h1>Incident Dashboard</h1>

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
                        <tr key={incident.id}>

                            <td>{incident.title}</td>
                            <td>{incident.severity}</td>
                            <td>{incident.status}</td>
                            <td>{incident.category}</td>
                            <td>{new Date(incident.createdAt).toLocaleString()}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}