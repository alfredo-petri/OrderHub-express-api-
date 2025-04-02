import {
    invalidTypeErrorMessage,
    requiredErrorMessage,
} from '@/utils/validation-errors'
import z from 'zod'

export const idBodySchema = z.number({
    invalid_type_error: invalidTypeErrorMessage('id', 'number'),
    required_error: requiredErrorMessage('id'),
})

export const idParamSchema = z
    .string()
    .transform((value) => Number(value))
    .refine((value) => !isNaN(value), {
        message: invalidTypeErrorMessage('id', 'number'),
    })

export const idQueryParam = z
    .string()
    .transform((value) => Number(value))
    .refine((value) => !isNaN(value), {
        message: invalidTypeErrorMessage('id', 'number'),
    })
    .optional()
