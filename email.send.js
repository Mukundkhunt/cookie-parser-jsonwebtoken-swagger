const nodemailer = require('nodemailer')

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
    text: "123454346"
}

transPorter.sendMail(mailOptions, sendemail)

function sendemail(err, data) {

    if (err) {
        console.log("Error occured")
    } else {
        console.log('email sent !!!!')
    }
}