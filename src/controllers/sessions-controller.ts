import { User } from '@/class/user'
import { createSessionSchema } from '@/schemas/sessions/create-session-schema'
import { AppError } from '@/utils/AppError'
import { credentialsError } from '@/utils/db-queries-errors'
import { compare } from 'bcrypt'
import { Request, Response, NextFunction } from 'express'
import { authConfig } from '@/configs/auth'
import { sign } from 'jsonwebtoken'

class SessionsController {
    async create(request: Request, response: Response, next: NextFunction) {
        try {
            const { email, password } = createSessionSchema.parse(request.body)

            const user = await User.getUserByEmail(email)

            if (!user) throw new AppError(credentialsError, 404)

            const passwordMatched = await compare(password, user.password)

            if (!passwordMatched) throw new AppError(credentialsError)

            const { password: _password, ...userWithoutPassword } = user

            const { expiresIn, secret } = authConfig.jwt

            const token = sign({ role: user.role ?? 'customer' }, secret, {
                subject: user.id,
                expiresIn,
            })

            return response.json({ token, userWithoutPassword })
        } catch (error) {
            next(error)
        }
    }
}

export { SessionsController }
