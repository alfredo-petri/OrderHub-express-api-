import { prisma } from '@/prisma'
import { AppError } from '@/utils/AppError'
import { notFound } from '@/utils/db-queries-errors'
import { DeliveryStatus, Prisma } from '@prisma/client'

export const deliveryInclude = Prisma.validator<Prisma.DeliveryInclude>()({
    logs: true,
    user: true,
})

export type DeliveryPrisma = Prisma.DeliveryGetPayload<object>

export class Delivery {
    id: string
    userId: string
    description: string
    status: DeliveryStatus
    createdAt: Date
    updatedAt: Date | null

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
    }

    async init() {
        const data = await prisma.delivery.findUnique({
            where: { id: this.id },
            include: deliveryInclude,
        })

        if (!data) throw new AppError(notFound('delivery'), 404)

        this.load(data)
    }
}
