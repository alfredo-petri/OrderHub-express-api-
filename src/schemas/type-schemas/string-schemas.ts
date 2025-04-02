import {
    invalidTypeErrorMessage,
    requiredErrorMessage,
} from '@/utils/validation-errors'
import z from 'zod'

export const stringSchema = (field: string, expectedType: string) => {
    return z.string({
        required_error: requiredErrorMessage(field),
        invalid_type_error: invalidTypeErrorMessage(field, expectedType),
    })
}
