import { useState } from "react";
import { validateIncident } from "../../utils/validateIncident";
import './IncidentForm.css';

// Represent the data collected from the form before it becomes the full incident
type FormData = {
    title: string
    description: string
    severity: string
    category: string
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
                    <p>{success}</p>
                )}
                <label>Title</label>
                <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                />
                {errors.title && <p>{errors.title}</p>}
            </div>

            <div>
                <label>Description</label>
                <input
                name="description"
                value={formData.description}
                onChange={handleChange}
                />
                {errors.description && <p>{errors.description}</p>}
            </div>

            <div>
                <label>Severity</label>
                <select
                name="severity"
                value={formData.severity}
                onChange={handleChange}
                >
                <option value="">Select Severity</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
                </select>
                {errors.severity && <p>{errors.severity}</p>}
            </div>

            <div>
                <label>Category</label>
                <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                >
                <option value="">Select Category</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="network">Network</option>
                <option value="database">Database</option>
                <option value="security">Security</option>
                </select>
                {errors.category && <p>{errors.category}</p>}
            </div>

            <button 
            type="submit"
            className="button-primary center-button"
            disabled={!formData.title || !formData.severity || !formData.category} //disable submit if required fields are empty
            >Report Incident
            </button>
        </form>
    )
}