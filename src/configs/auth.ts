import { env } from '@/utils/env'

export const authConfig = {
    jwt: {
        secret: env.JWT_SECRET,
        expiresIn: '1d',
    },
}
