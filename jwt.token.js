const { JsonWebTokenError } = require('jsonwebtoken')

const jwt = require('jsonwebtoken'),
    express = require('express')
const { model } = require('mongoose')
route = express.Router()
var token = jwt.sign({ foo: 'bar' }, 'shhhhh')

route.get('/api', (req, res) => {
    res.json({
        message: "Json web token is running"
    })
})

route.post('/api/post', (req, res) => {
    res.json({
        message: "Post is runing"
    })
})

module.exports = route