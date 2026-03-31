import { describe, it, expect } from "vitest";
import { sortIncidents } from "./sortIncidents";
import type { Incident } from "../types/incident";

const mockIncidents: Incident[] = [
  {
    id: "1",
    title: "Old Low",
    description: "",
    severity: "low",
    status: "open",
    category: "frontend",
    createdAt: 1,
  },
  {
    id: "2",
    title: "New Critical",
    description: "",
    severity: "critical",
    status: "open",
    category: "backend",
    createdAt: 3,
  },
  {
    id: "3",
    title: "Mid High",
    description: "",
    severity: "high",
    status: "open",
    category: "network",
    createdAt: 2,
  },

];

describe("sortIncidents", () => {
    it("sorts incidents by date ascending", () => {
        const result = sortIncidents(mockIncidents, "date-asc");

        expect(result.map(i => i.id)).toEqual(["1", "3", "2"]);
    });

    it("sorts incidents by date descending", () => {
        const result = sortIncidents(mockIncidents, "date-desc");

        expect(result.map(i => i.id)).toEqual(["2", "3", "1"]);
    });

    it("sorts incidents by severity ascending", () => {
        const result = sortIncidents(mockIncidents, "severity-asc");
        
        expect(result.map(i => i.id)).toEqual(["1", "3", "2"]);
    });

    it("sorts incidents by severity descending", () => {
        const result = sortIncidents(mockIncidents, "severity-desc");

        expect(result.map(i => i.id)).toEqual(["2", "3", "1"]);
    });

    it("does not mutate original array", () => {
        const original = [...mockIncidents];
        sortIncidents(mockIncidents, "severity-asc");

        expect(mockIncidents).toEqual(original);
    });

    it("returns empty array when input is empty", () => {
        const result = sortIncidents([], "date-desc");

        expect(result).toEqual([]);
    });
});