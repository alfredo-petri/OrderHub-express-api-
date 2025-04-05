import { prisma } from '@/prisma'
import { AppError } from '@/utils/AppError'
import { emailInUse, userNotFound } from '@/utils/db-queries-errors'
import { Delivery, Prisma, UserRole } from '@prisma/client'
import { hash } from 'bcrypt'

export const userInclude = Prisma.validator<Prisma.UserInclude>()({
    deliveries: true,
})

export type UserPrisma = Prisma.UserGetPayload<{
    include: typeof userInclude
}>

export type UserForm = {
    name: string
    email: string
    password: string
    role?: 'sale' | 'customer'
}

export class User {
    id: string
    name: string
    email: string
    password: string
    role: UserRole
    createdAt: Date
    updateAt: Date | null
    deliveries: Delivery[]

    constructor(id: string, data?: UserPrisma) {
        if (data) {
            this.load(data)
        } else {
            this.id = id
        }
    }

    load(data: UserPrisma) {
        this.id = data.id
        this.name = data.name
        this.email = data.email
        this.password = data.password
        this.role = data.role
        this.createdAt = data.createdAt
        this.updateAt = data.updatedAt
        this.deliveries = [] // data.deliveries.map((delivery) => new Delivery(delivery))
    }

    async init() {
        const data = await prisma.user.findUnique({
            where: { id: this.id },
            include: userInclude,
        })
        if (!data) throw new AppError(userNotFound)
        this.load(data)
    }

    static async new(form: UserForm) {
        const emailExists = await this.isEmailTaken(form.email)

        if (emailExists) throw new AppError(emailInUse, 409)

        const hashedPassword = await hash(form.password, 8)

        const user = await prisma.user.create({
            data: {
                name: form.name,
                email: form.email,
                password: hashedPassword,
                role: form.role,
            },
            omit: { password: true },
        })

        return user
    }

    static async isEmailTaken(email: string): Promise<boolean> {
        const emailExists = await prisma.user.findFirst({
            where: { email },
            select: { email: true },
        })

        return !!emailExists
    }

    static async getUserByEmail(email: string): Promise<User | null> {
        const user = await prisma.user.findFirst({
            where: {
                email,
            },
            include: userInclude,
        })

        if (!user) return null

        return new User(user.id, user)
    }
}
