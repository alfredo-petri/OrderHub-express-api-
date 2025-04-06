import { invalidTypeErrorMessage } from '@/utils/validation-errors'
import z from 'zod'

export const statusSchema = z.enum(
    ['acepted', 'production', 'shipped', 'delivered'],
    {
        message: invalidTypeErrorMessage(
            'status',
            'acepted or production or shipped or delivered',
        ),
    },
)
