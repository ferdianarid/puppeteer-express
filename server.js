const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

// const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const router = require('./routes')

require('dotenv/config')
const PORT = process.env.PORT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"]
}))

app.set('view engine', 'pug')
app.set("views", path.join(__dirname, "views"));



app.use(router)

// mongoose.connect(process.env.DB_CONNECTION, () =>
//     console.log("Database Connected")
// )

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))