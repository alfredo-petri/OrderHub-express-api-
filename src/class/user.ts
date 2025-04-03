import { prisma } from '@/prisma'
import { AppError } from '@/utils/AppError'
import { userNotFound } from '@/utils/db-queries-errors'
import { Delivery, Prisma, UserRole } from '@prisma/client'

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
}
