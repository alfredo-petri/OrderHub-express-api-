import {
    invalidEmailErrorMessage,
    requiredErrorMessage,
} from '@/utils/validation-errors'
import z from 'zod'

export const emailSchema = (field: string) => {
    return z
        .string({ required_error: requiredErrorMessage(field) })
        .email({ message: invalidEmailErrorMessage })
}
