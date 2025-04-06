import { DeliveriesController } from '@/controllers/deliveries-controller'
import { ensureAuthenticated } from '@/middlewares/ensure-authenticated'
import { verifyUserAuthorization } from '@/middlewares/verify-user-authorization'
import { Router } from 'express'

const deliveriesRoutes = Router()
const deliveriesController = new DeliveriesController()

deliveriesRoutes.use(
    ensureAuthenticated,
    verifyUserAuthorization(['sale', 'customer']),
)

deliveriesRoutes.post('/', deliveriesController.create)
deliveriesRoutes.get('/', deliveriesController.get)

export { deliveriesRoutes }
