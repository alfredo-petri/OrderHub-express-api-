import { Prisma } from '@prisma/client'
import { prisma } from '@/prisma'
import { notFound } from '@/utils/db-queries-errors'
import { AppError } from '@/utils/AppError'
import { Delivery } from './delivery'

export const deliveryLogsInclude =
    Prisma.validator<Prisma.DeliveryLogInclude>()({
        delivery: {
            select: { description: true, status: true, updatedAt: true },
        },
    })

export type DeliveryLogsPrisma = Prisma.DeliveryLogGetPayload<{
    include: typeof deliveryLogsInclude
}>

// eslint-disable-next-line
export type DeliveryLogsForm = Pick<Deliverylogs, 'deliveryId' | 'description'  >

export class Deliverylogs {
    id: string
    description: string
    deliveryId: string
    createdAt: Date
    updatedAt: Date | null
    delivery: Partial<Delivery>

    constructor(data: DeliveryLogsPrisma | string) {
        if (typeof data === 'string') {
            this.id = data
        } else {
            this.load(data)
        }
    }

    load(data: DeliveryLogsPrisma) {
        this.id = data.id
        this.description = data.description
        this.deliveryId = data.deliveryId
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
        this.delivery = data.delivery
    }

    async init() {
        const data = await prisma.deliveryLog.findUnique({
            where: { id: this.id },
            include: { delivery: true },
        })
        if (!data) throw new AppError(notFound('delivery-logs'), 404)
        this.load(data)
    }

    static async new(data: DeliveryLogsForm) {
        try {
            const deliveryLogs = await prisma.deliveryLog.create({
                data: {
                    description: data.description,
                    deliveryId: data.deliveryId,
                },
            })
            return deliveryLogs
        } catch (error) {
            console.log(error)
        }
    }
}
