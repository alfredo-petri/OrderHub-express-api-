import { User } from '@/class/user'
import { createUserSchema } from '@/schemas/users/create-user-schema'
import { Request, Response, NextFunction } from 'express'

class UsersController {
    async create(request: Request, response: Response, next: NextFunction) {
        try {
            const data = createUserSchema.parse(request.body)

            const newUser = await User.new(data)

            return response.status(201).json({ newUser })
        } catch (error) {
            next(error)
        }
    }
}

export { UsersController }
