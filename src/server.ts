import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import userRouter from './handlers/userRouter'
import productRouter from './handlers/productRouter'
import orderRouter from './handlers/orderRouter'
import cors from "cors"



const app: express.Application = express()
const address: string = "0.0.0.0:3000"


app.use(cors())

// app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

userRouter(app)
productRouter(app)
orderRouter(app)

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
