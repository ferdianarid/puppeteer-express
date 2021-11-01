const express = require('express')
const router = express.Router()
const tests = require('../capture')

// Post Request
router.post('/data', async(req, res) => {
    var username = req.body.username
    var domain = req.body.domain
    var password = req.body.password

    // store result result function into a variable
    let results = await tests.takeScreenshot(username, domain, password)

    res.send({
        data: results
    })
})

module.exports = router