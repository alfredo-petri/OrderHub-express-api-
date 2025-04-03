import {
    invalidEmailErrorMessage,
    invalidTypeErrorMessage,
    requiredErrorMessage,
} from '@/utils/validation-errors'
import z from 'zod'

export const emailSchema = (field: string) => {
    return z
        .string({
            required_error: requiredErrorMessage(field),
            invalid_type_error: invalidTypeErrorMessage('email', 'string'),
        })
        .email({ message: invalidEmailErrorMessage })
}
