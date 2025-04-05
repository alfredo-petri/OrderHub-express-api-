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
    return `${field} value must be greater than ${minValue}`
}

export const invalidEmailErrorMessage = `email value must be a valid email`

// password errors

export const passwordNumberErrorMessage =
    'password must contain at least one number'

export const passwordEspecialCharErrorMessage =
    'password must contain at least one special character (!@#$%&*?)'

export const passwordUppercaseErrorMessage =
    'password must contain at least one uppercase letter'

export const passwordLowercaseErrorMessage =
    'password must contain at least one lowercase letter'

// user
export const userRole = `user role must be "sale" or "customer"`
