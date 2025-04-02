import {
    invalidTypeErrorMessage,
    minStringErrorMessage,
    passwordEspecialCharErrorMessage,
    passwordNumberErrorMessage,
    passwordUppercaseErrorMessage,
    requiredErrorMessage,
} from '@/utils/validation-errors'
import z from 'zod'

export const passwordSchema = () => {
    return z
        .string({
            invalid_type_error: invalidTypeErrorMessage('password', 'string'),
            required_error: requiredErrorMessage('password'),
        })
        .min(8, minStringErrorMessage('password', 8))
        .regex(/[0-9]/, passwordNumberErrorMessage)
        .regex(/[\W_]/, passwordEspecialCharErrorMessage)
        .regex(/[A-Z]/, passwordUppercaseErrorMessage)
}
