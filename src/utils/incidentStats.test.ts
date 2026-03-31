import { describe, it, expect } from "vitest";
import { getIncidentStats } from "./incidentStats";
import type { Incident } from "../types/incident";

const mockIncidents: Incident[] = [
  {
    id: "1",
    title: "A",
    description: "",
    severity: "low",
    status: "open",
    category: "frontend",
    createdAt: 1,
  },
  {
    id: "2",
    title: "B",
    description: "",
    severity: "critical",
    status: "open",
    category: "backend",
    createdAt: 2,
  },
  {
    id: "3",
    title: "C",
    description: "",
    severity: "critical",
    status: "resolved",
    category: "network",
    createdAt: 3,
  },
];

describe("getIncidentStats", () => {
    it("calculates total, open and critical incidents correctly", () => {
        const result = getIncidentStats(mockIncidents);

        expect(result).toEqual({
            total: 3,
            open: 2,
            critical: 2,
        });
    });

    it("returns zero count for empty array", () => {
        const result = getIncidentStats([]);

        expect(result).toEqual({
            total: 0,
            open: 0,
            critical: 0,
        });
    });
});