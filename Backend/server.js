const express = require('express')
const cors = require('cors')
const app = express()

// middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routers
const router = require('./src/routes/UserRoute')
app.use('/user', router)

//port
const PORT = process.env.PORT || 5000

//server
app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`)
})