const express = require('express')
const cookierParser = require('cookie-parser')
const Routes = require('./jwt.token')
const app = express()

//const morgan = require('morgan')
//const swagger = require('./swagger.ui')

var user = {
    name: "Mukund"
}

app.use(cookierParser())
    // app.use(morgan('dev'))
app.use(Routes)

app.get('/', (req, res) => {
    console.log("Cookies", req.cookies)
    console.log("Singed Cookies", req.signedCookies)
    res.send(200)
})

app.get('/setcookie', function(req, res) {

    res.cookie('name', JSON.stringify({ "name": "Mukund", "password": "mukund123@" }), ).send('cookie set'); //Sets name = express
    console.log(req.cookies)
})

app.use('/getCookie', (req, res) => {
    res.send(req.cookies.name);
})

module.exports = app