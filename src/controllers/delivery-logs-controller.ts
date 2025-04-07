import { Delivery } from '@/class/delivery'
import { Deliverylogs } from '@/class/delivery-logs'
import { createDeliveryLogsSchema } from '@/schemas/delivery-logs/create-delivery-logs-schema'
import { AppError } from '@/utils/AppError'
import { shippedStatusNeeded } from '@/utils/db-queries-errors'
import { Request, Response, NextFunction } from 'express'

class DeliveryLogsController {
    async create(request: Request, response: Response, next: NextFunction) {
        const { delivery_id: deliveryId, description } =
            createDeliveryLogsSchema.parse(request.body)

        try {
            const delivery = new Delivery(deliveryId)

            await delivery.init()

            if (delivery.status === 'delivered') {
                throw new AppError(shippedStatusNeeded, 422)
            }

            if (delivery.status !== 'shipped') {
                throw new AppError(shippedStatusNeeded, 422)
            }

            await Deliverylogs.new({
                deliveryId,
                description,
            })

            return response.status(201).json()
        } catch (error) {
            next(error)
        }
    }
}

export { DeliveryLogsController }
