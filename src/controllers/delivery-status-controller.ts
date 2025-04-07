import { Delivery } from '@/class/delivery'
import { Deliverylogs } from '@/class/delivery-logs'
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

            await delivery.update({ status })

            await Deliverylogs.new({
                deliveryId: id,
                description: `status update to: ${status}`,
            })

            return response.status(200).json()
        } catch (error) {
            next(error)
        }
    }
}

export { DeliveryStatusController }
