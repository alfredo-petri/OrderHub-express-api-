import { Request, Response, NextFunction } from 'express'

class DeliveryLogsController {
    async create(request: Request, response: Response, next: NextFunction) {
        try {
            return response.json({ message: 'ok' })
        } catch (error) {
            next(error)
        }
    }
}

export { DeliveryLogsController }
