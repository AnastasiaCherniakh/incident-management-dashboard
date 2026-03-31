import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import '@testing-library/jest-dom'
import IncidentForm from "./IncidentForm";

describe("IncidentForm", () => {
    it("renders form fields", () => {
        render(<IncidentForm onSubmit={vi.fn()} />);


        expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/severity/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/category/i)).toBeInTheDocument();
    });
});