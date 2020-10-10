const express = require('express'),
    cookierParser = require('cookie-parser')


const app = express()
app.use(cookierParser())

app.get('/', (req, res) => {
    console.log("Cookies", req.cookies)
    console.log("Singed Cookies", req.signedCookies)
    res.send(200)
})

app.listen(port = process.env.PORT || 5000, () => console.log(`Serever running on port : ${port}`))