export type IncidentValidationErrors = {
    title?: string
    description?: string
    severity?: string
    category?: string
}

export type IncidentInput = {
    title: string
    description: string
    severity: string
    category: string
}

/**
 * Validates incident from input.
 * Return an object containing validation errors for each field.
 */

export function validateIncident(
    input: IncidentInput
): IncidentValidationErrors {
    
    const errors: IncidentValidationErrors = {};

    //Title validation
    if(!input.title.trim()){
        errors.title = "Title is required"
    }

    //Description validation
    if(!input.description.trim()) {
        errors.description = "Description is required"
    } else if(input.description.length < 10) {
        errors.description = "Description must be at least 10 characters"
    }

    //Severity validation
    if(!input.severity.trim()) {
        errors.severity = "Severity must be selected"
    }

    //Category validation
    if(!input.category.trim()) {
        errors.category = "Category must be selected"
    }

    return errors
}