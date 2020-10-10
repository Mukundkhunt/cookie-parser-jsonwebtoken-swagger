const { static } = require('express');
const nodemailer = require('nodemailer')
const route = require('express').Router(),
    awsSchema = require('./aws')
const randomNumber = Math.floor(Math.random() * (9 * Math.pow(10, 10 - 1))) + Math.pow(10, 10 - 1);
const transPorter = nodemailer.createTransport({
    service: 'gmail',
    auth: {

        user: "mukund.semicolon@gmail.com",
        pass: "whracceutxokdkdf"
    }
})
const mailOptions = {
    from: "mukund.semicolon@gmail.com",
    to: "khuntmukund123@gmail.com, khuntmukund@gmail.com, mukund.kumar@gmail.com",
    cc: "khuntmukund123@gmail.com",
    bcc: "mukund.semicolon@gmail.com",
    subject: "Testing otp message",
    text: randomNumber
}

transPorter.sendMail(mailOptions, sendemail)

function sendemail(err, data) {

    if (err) {
        console.log(err)
    } else {
        console.log('email sent !!!!')
    }
}

// route.post('/email', (req, res) => {
//     const mailOptions = {
//         form: req.body.from,
//         to: req.body.to,
//         subject: req.body.subject,
//         text: req.body.text
//     }
// })