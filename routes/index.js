const express = require('express')
const router = express.Router()
const tests = require('../capture')

router.post('/data', async(req, res) => {
    var username = req.body.username
    var domain = req.body.domain
    var password = req.body.password

    let results = await tests.takeScreenshot(username, domain, password)

    res.send({
        data: results
    })
})

router.get('/product', (req, res) => {
    res.send("<h1>Post in Product</h1>")
})

router.get('/product', (req, res) => {
    res.send("<h1>Post in Product</h1>")
})

module.exports = router