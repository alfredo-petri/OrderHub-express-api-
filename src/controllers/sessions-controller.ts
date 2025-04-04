import { Request, Response, NextFunction } from 'express'

class SessionsController {
    async create(request: Request, response: Response, next: NextFunction) {
        try {
            return response.json({ message: 'ok' })
        } catch (error) {
            next(error)
        }
    }
}

export { SessionsController }
