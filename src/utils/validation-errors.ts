export const requiredErrorMessage = (field: string): string => {
    return `${field} value is required`
}

export const invalidTypeErrorMessage = (
    field: string,
    expectedType: string,
): string => {
    return `${field} value must be ${expectedType} type`
}

export const minStringErrorMessage = (
    field: string,
    minCharacterQuantity: number,
): string => {
    return `${field} value must be at least ${minCharacterQuantity} characters`
}

export const greaterThanErrorMessage = (
    field: string,
    minValue: number,
): string => {
    return `${field} must be greater than ${minValue}`
}
