export const notFound = (resource: string): string =>
    `${resource} with the provided identifier not founded`
export const emailInUse = 'email is already in use'
export const credentialsError = 'email or password invalid'
export const invalidToken = 'invalid token, unauthorized'
export const requiredToken = 'token is required'
export const unauthorized = 'unauthorized'
export const shippedStatusNeeded =
    'Invalid delivery status. The order must be marked as shipped before logging the shipping details.'
