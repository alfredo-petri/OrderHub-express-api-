import { DeliveryLogsController } from '@/controllers/delivery-logs-controller'
import { ensureAuthenticated } from '@/middlewares/ensure-authenticated'
import { verifyUserAuthorization } from '@/middlewares/verify-user-authorization'
import { Router } from 'express'

const deliveryLogsRoutes = Router()
const deliveryLogsController = new DeliveryLogsController()

// authentication verify to all users
deliveryLogsRoutes.use(ensureAuthenticated)

// only sale user can do this
deliveryLogsRoutes.use(verifyUserAuthorization(['sale']))
deliveryLogsRoutes.post('/', deliveryLogsController.create)

export { deliveryLogsRoutes }
