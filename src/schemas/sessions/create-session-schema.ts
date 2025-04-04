import z from 'zod'
import { emailSchema } from '../specific-types-schemas/email-schema'
import { passwordSchema } from '../specific-types-schemas/password-schema'

const createSessionSchema = z.object({
    email: emailSchema('email'),
    password: passwordSchema(),
})

export { createSessionSchema }
