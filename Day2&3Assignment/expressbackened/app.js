console.log('kashaf123')
import express from 'express'
import connectDB from './db/connectdb.js'
const app = express()
import web from './routes/web.js'
import cors from 'cors'
app.use(cors())
const port = process.env.PORT || '4000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";


//Databse connection
connectDB(DATABASE_URL);


//JSON
app.use(express.json())

//Load routes
app.use("/api", web)// http://localhost:4000/api/user

app.listen(port, () => {
    console.log(`Serever isn listening att http://localhost:${port}`)
})

