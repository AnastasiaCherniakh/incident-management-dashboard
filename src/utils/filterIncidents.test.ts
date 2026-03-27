import { describe, it, expect } from 'vitest';
import { filterIncidents } from "./filterIncidents";
import type { Incident } from '../types/incident';

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
        severity: "high",
        status: "resolved",
        category: "backend",
        createdAt: 2,
    },
];

describe("filterIncidents", () => {
    it("returns all incidents when no filters provided", () => {

        const result = filterIncidents(mockIncidents, {});
        expect(result).toHaveLength(2);
    });

    it("filters by severity", () => {
        const result = filterIncidents(mockIncidents, { severity: "high" });
        expect(result).toHaveLength(1);
        expect(result[0].id).toBe("2");
    });

    it("filters by status", () => {
        const result = filterIncidents(mockIncidents, { status: "open" });
        expect(result).toHaveLength(1);
        expect(result[0].id).toBe("1");
    });

    it("filters by severity AND status", () => {
        const result = filterIncidents(mockIncidents, { severity: "high", status: "resolved" });
        expect(result).toHaveLength(1);
    });

    it("returns empty array when no match", () => {
        const result = filterIncidents(mockIncidents, { status: "in-progress" });
        expect(result).toHaveLength(0);
    });

    it("does not mutate original array", () => {
        const original = [...mockIncidents];
        filterIncidents(mockIncidents, { severity: "low" });
        expect(mockIncidents).toEqual(original);
    });
})

