import {
    invalidTypeErrorMessage,
    requiredErrorMessage,
} from '@/utils/validation-errors'
import z from 'zod'

export const idSchema = z
    .string({
        invalid_type_error: invalidTypeErrorMessage('id', 'string'),
        required_error: requiredErrorMessage('id'),
    })
    .uuid(invalidTypeErrorMessage('id', 'uuid'))

export const idQueryParam = z
    .string({
        invalid_type_error: invalidTypeErrorMessage('id', 'string'),
        required_error: requiredErrorMessage('id'),
    })
    .uuid(invalidTypeErrorMessage('id', 'uuid'))
    .optional()
