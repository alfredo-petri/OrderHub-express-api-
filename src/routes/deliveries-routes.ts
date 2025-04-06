import { DeliveriesController } from '@/controllers/deliveries-controller'
import { DeliveryStatusController } from '@/controllers/delivery-status-controller'
import { ensureAuthenticated } from '@/middlewares/ensure-authenticated'
import { verifyUserAuthorization } from '@/middlewares/verify-user-authorization'
import { Router } from 'express'

const deliveriesRoutes = Router()
const deliveriesController = new DeliveriesController()
const deliveriesStatusController = new DeliveryStatusController()

deliveriesRoutes.use(
    ensureAuthenticated,
    verifyUserAuthorization(['sale', 'customer']),
)

deliveriesRoutes.post('/', deliveriesController.create)
deliveriesRoutes.get('/', deliveriesController.get)

deliveriesRoutes.use(verifyUserAuthorization(['sale']))
deliveriesRoutes.patch('/status', deliveriesStatusController.updateStatus)
export { deliveriesRoutes }
