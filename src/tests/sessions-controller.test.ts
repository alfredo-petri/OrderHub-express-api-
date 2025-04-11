import { app } from '@/app'
import { prisma } from '@/prisma'
import supertest from 'supertest'

describe('SessionsController', () => {
    let userId: string

    afterAll(async () => {
        await prisma.user.delete({ where: { id: userId } })
    })

    it('should authenticate and get acess token', async () => {
        const createUserResponse = await supertest(app).post('/users').send({
            name: 'auth test user',
            email: 'authtestuser@email.com',
            password: '*Senhateste123',
        })

        userId = createUserResponse.body.newUser.id

        const authenticateUserResponse = await supertest(app)
            .post('/sessions')
            .send({
                email: 'authtestuser@email.com',
                password: '*Senhateste123',
            })

        expect(authenticateUserResponse.status).toBe(200)
        expect(authenticateUserResponse.body).toHaveProperty('token')
        expect(authenticateUserResponse.body.token).toEqual(expect.any(String))
    })
})
