import z from 'zod'
import { idSchema } from '../specific-types-schemas/id-schema'
import { statusSchema } from '../specific-types-schemas/status-schema'

export const updateDeliveryStatusSchema = z.object({
    id: idSchema('id'),
    status: statusSchema,
})
