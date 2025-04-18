import { Delivery } from '@/class/delivery'
import { createDeliverySchema } from '@/schemas/deliveries/create-delivery-schema'
import { Request, Response, NextFunction } from 'express'

class DeliveriesController {
    async get(_request: Request, response: Response, next: NextFunction) {
        try {
            const deliveries = await Delivery.list()

            return response.json({ deliveries })
        } catch (error) {
            next(error)
        }
    }

    async create(request: Request, response: Response, next: NextFunction) {
        try {
            const { user_id: userId, description } = createDeliverySchema.parse(
                request.body,
            )

            await Delivery.new({ userId, description })

            return response.status(201).json()
        } catch (error) {
            next(error)
        }
    }
}

export { DeliveriesController }
