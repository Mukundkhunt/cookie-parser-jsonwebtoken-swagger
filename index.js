const express = require('express'),
    cookierParser = require('cookie-parser'),
    morgan = require('morgan'),
    Routes = require('./jwt.token'),
    app = express()
var user = {
    name: "Janvi"
}

app.use(cookierParser())
app.use(morgan('dev'))
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
app.listen(port = process.env.PORT || 5000, () => console.log(`Server running on port : ${port}`))