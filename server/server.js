import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
const app = express();// creates the server named app

await connectDB()
//middlewares

app.use(cors())// allows data communication between frontend and backend
app.use(express.json()) // converts req.body from json to js object

//routes
app.get('/', (req,res)=>{
    res.send('api is working well')
})
app.use('/api/admin', adminRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log('Server is running on PORT: ', PORT)
})

export default app;