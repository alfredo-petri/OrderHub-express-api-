import { app } from '@/app'
import { prisma } from '@/prisma'
import request from 'supertest'

describe('UsersController', () => {
    let userId: string

    afterAll(async () => {
        await prisma.user.delete({ where: { id: userId } })
    })

    it('shoukd create a new user succesfully', async () => {
        const response = await request(app).post('/users').send({
            name: 'test user',
            email: 'testuser@email.com',
            password: '*Senhateste123',
        })

        expect(response.status).toBe(201)
        expect(response.body.newUser).toHaveProperty('id')
        expect(response.body.newUser.name).toBe('test user')

        userId = response.body.newUser.id
    })
})
