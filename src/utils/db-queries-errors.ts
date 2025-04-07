export const notFound = (resource: string): string =>
    `${resource} with the provided identifier not founded`
export const emailInUse = 'email is already in use'
export const credentialsError = 'email or password invalid'
export const invalidToken = 'invalid token, unauthorized'
export const requiredToken = 'token is required'
export const unauthorized = 'unauthorized'
export const deliveredStatus = 'this order has already been delivered'
export const shippedStatusNeeded =
    'invalid delivery status, the order must be marked as shipped before logging the shipping details.'
export const userView = 'the user can only view their deliveries'
