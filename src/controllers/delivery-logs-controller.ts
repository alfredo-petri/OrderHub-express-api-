import { Delivery } from '@/class/delivery'
import { Deliverylogs } from '@/class/delivery-logs'
import { createDeliveryLogsSchema } from '@/schemas/delivery-logs/create-delivery-logs-schema'
import { idSchema } from '@/schemas/specific-types-schemas/id-schema'
import { AppError } from '@/utils/AppError'
import { shippedStatusNeeded, userView } from '@/utils/db-queries-errors'
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

    async show(request: Request, response: Response, next: NextFunction) {
        try {
            const deliveryId = idSchema('delivery_id').parse(
                request.params.delivery_id,
            )

            const delivery = new Delivery(deliveryId)
            await delivery.init()

            if (
                request.user?.role === 'customer' &&
                request.user.id !== delivery.userId
            ) {
                throw new AppError(userView, 401)
            }
            return response.json(delivery)
        } catch (error) {
            next(error)
        }
    }
}

export { DeliveryLogsController }
