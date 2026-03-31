import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { userEvent } from "@testing-library/user-event";
import '@testing-library/jest-dom';
import IncidentForm from "./IncidentForm";

describe("IncidentForm", () => {
    it("renders form fields", () => {
        render(<IncidentForm onSubmit={vi.fn()} />);


        expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/severity/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/category/i)).toBeInTheDocument();
    });

    it("submits form with valid data", async () => {
        const handleSubmit = vi.fn();

        render(<IncidentForm onSubmit={handleSubmit}/>);

        await userEvent.type(screen.getByLabelText(/title/i), "Server down");
        await userEvent.type(
            screen.getByLabelText(/description/i),
            "Server is not responding properly"
        );

        await userEvent.selectOptions(screen.getByLabelText(/severity/i), "high");
        await userEvent.selectOptions(screen.getByLabelText(/category/i), "backend");
        await userEvent.click(screen.getByText(/report incident/i));

        expect(handleSubmit).toHaveBeenCalled();
    });

    it("shows success message after submission", async () => {
        render(<IncidentForm onSubmit={vi.fn()} />);

        await userEvent.type(screen.getByLabelText(/title/i), "Server down");
        await userEvent.type(
            screen.getByLabelText(/description/i),
            "Server is not responding properly"
        );

        await userEvent.selectOptions(screen.getByLabelText(/severity/i), "high");
        await userEvent.selectOptions(screen.getByLabelText(/category/i), "backend");
        await userEvent.click(screen.getByText(/report incident/i));

        expect(screen.getByText(/incident created successfully/i)).toBeInTheDocument();
    });
});