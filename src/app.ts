import express from 'express'
import 'express-async-errors'
import { errorHandler } from './middlewares/error-handler'

const app = express()

app.use(express.json())

app.use(errorHandler)

export { app }
