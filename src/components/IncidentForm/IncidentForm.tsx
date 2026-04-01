import { useState } from "react";
import { validateIncident } from "../../utils/validateIncident";
import type { Severity, Category } from "../../types/incident";
import './IncidentForm.css';

// Represent the data collected from the form before it becomes the full incident
type FormData = {
    title: string
    description: string
    severity: Severity | ''
    category: Category | ''
};

// Function passed from the parent component that will handle incident creation 
type Props = {
    onSubmit: (data: FormData) => void
};

// Initial empty state for form fields
const initialForm: FormData = {
    title: '',
    description: '',
    severity: '',
    category: ''
};

export default function IncidentForm({ onSubmit }: Props) {

    // Stores the current value from form inputs
    const [formData, setFormData] = useState<FormData>(initialForm);
    // Stores validation error messages for each field
    const [errors, setErrors] = useState<Record<string, string>>({});
    // Stores message of a successful submission for the user
    const [success, setSuccess] = useState("");

    // Updates the corresponding field in FormData when the user types or selects a value
    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {

        const { name, value } = e.target;
        
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        // Reset success message
        setSuccess("");
    }

    
    function handleSubmit(e: React.FormEvent) {

        e.preventDefault();

        const validationErrors = validateIncident(formData);

        // If validation fails, store the errors and stop the submission 
        if(Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return
        }

        onSubmit(formData);
        // User feedback about successful submission
        setSuccess("Incident created successfully");

        // Reset form fields and error messages after successful submission
        setFormData(initialForm);
        setErrors({});
    }


    return (
        <form onSubmit={handleSubmit} className="incident-form">
            <div>
                {success && (
                    <p className="message-success">{success}</p>
                )}
                <label htmlFor="title">Title</label>
                <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                id="title"
                />
                {errors.title && <p className="message-error">{errors.title}</p>}
            </div>

            <div>
                <label htmlFor="description">Description</label>
                <input
                name="description"
                value={formData.description}
                onChange={handleChange}
                id="description"
                />
                {errors.description && <p className="message-error">{errors.description}</p>}
            </div>

            <div>
                <label htmlFor="severity">Severity</label>
                <select
                name="severity"
                value={formData.severity}
                onChange={handleChange}
                id="severity"
                >
                <option value="">Select Severity</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
                </select>
                {errors.severity && <p className="message-error">{errors.severity}</p>}
            </div>

            <div>
                <label htmlFor="category">Category</label>
                <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                id="category"
                >
                <option value="">Select Category</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="network">Network</option>
                <option value="database">Database</option>
                <option value="security">Security</option>
                </select>
                {errors.category && <p className="message-error">{errors.category}</p>}
            </div>

            <button 
            type="submit"
            className="button-primary center-button"
            >Report Incident
            </button>
        </form>
    )
}