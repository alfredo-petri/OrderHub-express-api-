import { prisma } from '@/prisma'
import { AppError } from '@/utils/AppError'
import { notFound } from '@/utils/db-queries-errors'
import { DeliveryLog, DeliveryStatus, Prisma } from '@prisma/client'
import { User } from './user'

export const deliveryInclude = Prisma.validator<Prisma.DeliveryInclude>()({
    logs: {
        select: {
            description: true,
            updatedAt: true,
        },
    },
    user: { select: { name: true, email: true } },
})

export type DeliveryPrisma = Prisma.DeliveryGetPayload<{
    include: typeof deliveryInclude
}>

export type DeliveryForm = {
    userId: string
    description: string
    status?: DeliveryStatus
}

export class Delivery {
    id: string
    userId: string
    description: string
    status: DeliveryStatus
    createdAt: Date
    updatedAt: Date | null
    user: Partial<User>
    logs: Partial<DeliveryLog>[]

    constructor(data: DeliveryPrisma | string) {
        if (typeof data === 'string') {
            this.id = data
        } else {
            this.load(data)
        }
    }

    load(data: DeliveryPrisma) {
        this.id = data.id
        this.userId = data.userId
        this.description = data.description
        this.status = data.status
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
        this.user = data.user
        this.logs = data.logs
    }

    async init() {
        const data = await prisma.delivery.findUnique({
            where: { id: this.id },
            include: deliveryInclude,
        })

        if (!data) throw new AppError(notFound('delivery'), 404)

        this.load(data)
    }

    async update(data: Partial<DeliveryForm>) {
        try {
            const updatedDelivery = await prisma.delivery.update({
                where: { id: this.id },
                data: {
                    description: data.description,
                    userId: data.userId,
                    status: data.status,
                },
                include: deliveryInclude,
            })

            return updatedDelivery
        } catch (error) {
            console.log(error)
        }
    }

    static async new(form: DeliveryForm) {
        const delivery = await prisma.delivery.create({
            data: {
                userId: form.userId,
                description: form.description,
            },
        })
        return delivery
    }

    static async list() {
        const data = await prisma.delivery.findMany({
            include: deliveryInclude,
        })
        const deliveries = data.map((item) => new Delivery(item))
        return deliveries
    }
}
