import { AppError } from '@/utils/AppError'
import { unauthorized } from '@/utils/db-queries-errors'
import { Request, Response, NextFunction } from 'express'

export const verifyUserAuthorization = (role: string[]) => {
    return (request: Request, response: Response, next: NextFunction) => {
        try {
            const user = request.user
            console.log(' ')
            if (!user) throw new AppError(unauthorized, 401)
            if (!role.includes(user.role)) throw new AppError(unauthorized, 401)
            return next()
        } catch (error) {
            next(error)
        }
    }
}
