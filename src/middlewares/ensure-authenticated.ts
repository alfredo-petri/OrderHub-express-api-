import { AppError } from '@/utils/AppError'
import { invalidToken, requiredToken } from '@/utils/db-queries-errors'
import { env } from '@/utils/env'
import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface TokenPayload {
    role: string
    sub: string
}

export const ensureAuthenticated = async (
    request: Request,
    response: Response,
    next: NextFunction,
) => {
    try {
        const authHeader = request.headers.authorization

        if (!authHeader) throw new AppError(requiredToken, 401)

        const token = authHeader.split(' ')[1]

        const { role, sub: userId } = verify(
            token,
            env.JWT_SECRET,
        ) as TokenPayload

        request.user = {
            id: userId,
            role,
        }

        return next()
    } catch (error) {
        throw new AppError(invalidToken, 401)
    }
}
