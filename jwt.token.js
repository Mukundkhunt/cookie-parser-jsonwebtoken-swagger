const { JsonWebTokenError } = require('jsonwebtoken')

const jwt = require('jsonwebtoken'),
    express = require('express'),
    route = express.Router(),
    morgan = require('morgan')
var token = jwt.sign({ foo: 'bar' }, 'shhhhh')
route.use(morgan())
route.get('/api', (req, res) => {
    res.json({
        message: "Json web token is running"
    })
})

route.post('/api/post', verifyToken, (req, res) => {
    jwt.verify(req.token, 'Mukundkey', (err, authData) => {
            if (err) {
                res.sendStatus(403)
            } else {
                res.json({
                    message: "Post is runinng",
                    authData
                })
            }
        })
        // res.json({
        //     message: "Post is runinng"
        // })
})

route.post('/api/login', (req, res) => {
    const User = {
        id: 20203100810040,
        name: "Mukund",
        email: "mukund.semicolon@gmail.com",
        password: "mukund123"
    }
    jwt.sign({ user: User }, 'Mukundkey', (err, token) => {
        res.json({
            token
        })
    })
})

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== "undefined") {
        // const bearer = bearerHeader.split(' '),
        //     bearerToken = bearer[1]
        req.token = bearerHeader
        next()
    } else {
        res.sendStatus(403)
    }
}

module.exports = route