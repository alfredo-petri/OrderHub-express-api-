import { Delivery } from '@/class/delivery'
import { updateDeliveryStatusSchema } from '@/schemas/deliveries/update-delivery-schema'
import { Request, Response, NextFunction } from 'express'

class DeliveryStatusController {
    async updateStatus(
        request: Request,
        response: Response,
        next: NextFunction,
    ) {
        try {
            const { id, status } = updateDeliveryStatusSchema.parse(
                request.body,
            )

            const delivery = new Delivery(id)

            await delivery.init()
            const updatedDelivery = await delivery.update({ status })

            return response.status(200).json(updatedDelivery)
        } catch (error) {
            next(error)
        }
    }
}

export { DeliveryStatusController }
