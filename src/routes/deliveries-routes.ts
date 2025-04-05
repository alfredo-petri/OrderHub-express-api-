import { DeliveriesController } from '@/controllers/deliveries-controller'
import { ensureAuthenticated } from '@/middlewares/ensure-authenticated'
import { Router } from 'express'

const deliveriesRoutes = Router()
const deliveriesController = new DeliveriesController()

deliveriesRoutes.use(ensureAuthenticated)

deliveriesRoutes.post('/', deliveriesController.create)

export { deliveriesRoutes }
