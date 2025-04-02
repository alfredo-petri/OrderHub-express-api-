import z from 'zod'
import { stringSchema } from '../type-schemas/string-schemas'
import { emailSchema } from '../specific-types-schemas/email-schema'
import { passwordSchema } from '../specific-types-schemas/password-schema'

const createUserSchema = z.object({
    name: stringSchema('name', 'string'),
    email: emailSchema('email'),
    password: passwordSchema(),
})

export { createUserSchema }
