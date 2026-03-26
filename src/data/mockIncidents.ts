import type { Incident } from "../types/incident";

/**
 * Mock incidents used as initial demo data.
 * Covers different severities, statuses with timestamps
 * for consistent sorting.
 */

export const mockIncidents: Incident[] = [
  {
    id: "1",
    title: "API latency spike",
    description: "Requests to the /auth endpoint are taking over 3 seconds.",
    severity: "high",
    status: "open",
    category: "network",
    createdAt: 1710000000000
  },
  {
    id: "2",
    title: "Login page error",
    description: "Users cannot log in due to a 500 server error.",
    severity: "critical",
    status: "in-progress",
    category: "backend",
    createdAt: 1710100000000
  },
  {
    id: "3",
    title: "Broken image on homepage",
    description: "Hero section image is not loading on mobile devices.",
    severity: "low",
    status: "resolved",
    category: "frontend",
    createdAt: 1710200000000
  },
  {
    id: "4",
    title: "Database connection timeout",
    description: "Intermittent connection failures to the production database.",
    severity: "critical",
    status: "open",
    category: "database",
    createdAt: 1710300000000
  },
  {
    id: "5",
    title: "Slow search results",
    description: "Search queries take too long to return results.",
    severity: "medium",
    status: "open",
    category: "security",
    createdAt: 1710400000000
  },
  {
    id: "6",
    title: "UI misalignment on mobile",
    description: "Buttons overlap on smaller screen sizes.",
    severity: "low",
    status: "in-progress",
    category: "frontend",
    createdAt: 1710500000000
  }
];