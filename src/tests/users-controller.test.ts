import { app } from '@/app'
import request from 'supertest'

describe('UsersController', () => {
    it('shoukd create a new user succesfully', async () => {
        const response = await request(app).post('/users').send({
            name: 'test user',
            email: 'testuser@email.com',
            password: '*Senhateste123',
        })

        expect(response.status).toBe(201)
        expect(response.body.newUser).toHaveProperty('id')
        expect(response.body.newUser.name).toBe('test user')
    })
})
