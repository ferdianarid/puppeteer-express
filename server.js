const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

// const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const router = require('./routes')

// Dotenv Config
require('dotenv/config')
const PORT = process.env.PORT

// Parsing Data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

// CORS Setting || Allowed Origin
app.use(cors({
    origin: "http://119.8.175.1:5050/",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    preflightContinue: true,
    allowedHeaders: true
}))

// Template Engine
app.set('view engine', 'pug')
app.set("views", path.join(__dirname, "views"));

app.use(router)

// mongoose.connect(process.env.DB_CONNECTION, () =>
//     console.log("Database Connected")
// )

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))