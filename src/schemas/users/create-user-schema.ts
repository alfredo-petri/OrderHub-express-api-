import z from 'zod'
import { stringSchema } from '../type-schemas/string-schemas'
import { emailSchema } from '../specific-types-schemas/email-schema'
import { passwordSchema } from '../specific-types-schemas/password-schema'
import { userRole } from '@/utils/validation-errors'

const createUserSchema = z.object({
    name: stringSchema('name', 'string'),
    email: emailSchema('email'),
    password: passwordSchema(),
    role: z
        .string()
        .optional()
        .refine(
            (value) =>
                value === undefined || value === 'sale' || value === 'customer',
            {
                message: userRole,
            },
        ),
})

export { createUserSchema }
