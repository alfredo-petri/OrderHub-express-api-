import z from 'zod'
import { emailSchema } from '../specific-types-schemas/email-schema'
import { stringSchema } from '../type-schemas/string-schemas'

const createSessionSchema = z.object({
    email: emailSchema('email'),
    password: stringSchema('password', 'string'),
})

export { createSessionSchema }
