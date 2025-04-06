import z from 'zod'
import { idSchema } from '../specific-types-schemas/id-schema'
import { stringSchema } from '../type-schemas/string-schemas'

export const createDeliverySchema = z.object({
    user_id: idSchema('user_id'),
    description: stringSchema('description', 'string'),
})
