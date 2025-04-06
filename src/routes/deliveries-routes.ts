import { DeliveriesController } from '@/controllers/deliveries-controller'
import { DeliveryStatusController } from '@/controllers/delivery-status-controller'
import { ensureAuthenticated } from '@/middlewares/ensure-authenticated'
import { verifyUserAuthorization } from '@/middlewares/verify-user-authorization'
import { Router } from 'express'

const deliveriesRoutes = Router()
const deliveriesController = new DeliveriesController()
const deliveriesStatusController = new DeliveryStatusController()

deliveriesRoutes.use(ensureAuthenticated)

// all user types
deliveriesRoutes.post('/', deliveriesController.create)

deliveriesRoutes.use(verifyUserAuthorization(['sale']))

// only sale user
deliveriesRoutes.get('/', deliveriesController.get)
deliveriesRoutes.patch('/status', deliveriesStatusController.updateStatus)
export { deliveriesRoutes }
