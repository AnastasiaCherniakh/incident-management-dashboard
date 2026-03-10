export type Severity =
| "low"
| "medium"
| "high"
| "critical"

export type Status = 
| "open"
| "in-progress"
| "resolved"

export type Category = 
| "network"
| "database"
| "frontend"
| "backend"
| "security"

export interface Incident {
    id: string
    title: string
    description: string
    severity: Severity
    status: Status
    category: Category
    createdAt: number
}