import {
    invalidTypeErrorMessage,
    requiredErrorMessage,
} from '@/utils/validation-errors'
import z from 'zod'

export const idSchema = (field: string) => {
    return z
        .string({
            invalid_type_error: invalidTypeErrorMessage(field, 'string'),
            required_error: requiredErrorMessage(field),
        })
        .uuid(invalidTypeErrorMessage(field, 'uuid'))
}
