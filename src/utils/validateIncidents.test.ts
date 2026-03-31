import { describe, it, expect } from "vitest";
import { validateIncident } from "./validateIncident";
import type { IncidentInput } from "./validateIncident";

const validInput: IncidentInput = {
    title: "Server outage",
    description: "The server is down and not responding",
    severity: "high",
    category: "backend",
};

describe("validateIncident", () => {
    it("returns no errors for valid input", () => {
        const result = validateIncident(validInput);

        expect(result).toEqual({});
    });

    it("returns error when title is empty", () => {
        const result = validateIncident({
            ...validInput,
            title: "",
        });

        expect(result.title).toBe("Title is required");
    });

    it("returns error when description is empty", () => {
        const result = validateIncident({
            ...validInput,
            description: "",
        });

        expect(result.description).toBe("Description is required");
    });

    it("return error when description is shorter than 10 characters", () => {
        const result = validateIncident({
            ...validInput,
            description: "short",
        });

        expect(result.description).toBe("Description must be at least 10 characters");
    });

    it("returns error when severity is empty", () => {
        const result = validateIncident({
            ...validInput,
            severity: "",
        });

        expect(result.severity).toBe("Severity must be selected");
    });

    it("returns error when category is empty", () => {
        const result = validateIncident({
            ...validInput,
            category: "",
        });

        expect(result.category).toBe("Category must be selected");
    });

    it("returns multiple errors when multiple fields are invalid", () => {
        const result = validateIncident({
            title: "",
            description: "",
            severity: "",
            category: "",
        });

        expect(result).toEqual({
            title: "Title is required",
            description: "Description is required",
            severity: "Severity must be selected",
            category: "Category must be selected",
        });
    });

    it("treats whitespaces-only strings as empty", () => {
        const result = validateIncident({
            ...validInput,
            title: "   ",
        });

        expect(result.title).toBe("Title is required");
    });
});
