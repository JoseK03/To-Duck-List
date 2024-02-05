import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'

dotenv.config()
const app = express();

app.use(morgan('combined'))//para seguimiento detallado de solicitudes HTTP


export default app;