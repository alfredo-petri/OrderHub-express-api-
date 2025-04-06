import z from 'zod'
import { idSchema } from '../specific-types-schemas/id-schema'
import { stringSchema } from '../type-schemas/string-schemas'

export const createDeliveryLogsSchema = z.object({
    delivery_id: idSchema('delivery_id'),
    description: stringSchema('description', 'string'),
})
