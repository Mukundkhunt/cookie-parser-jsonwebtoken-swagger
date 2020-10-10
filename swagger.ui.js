const swaggerUI = require('swagger-ui-express'),

    express = require('express'),
    // swaggerJsDoc = require('swagger-jsdoc'),
    app = express()
    // const options = {
    //     definition: {
    //         info: {
    //             title: 'Swagger UI demonstrate',
    //             version: '1.0.0',
    //             // description: '10/10/20 demo'
    //         }
    //     },
    //     apis: ['./swagger.ui.js']
    // }
    // const swaggerSpec = swaggerJsDoc(options)

app.use('/api/swag', swaggerUI.serve, swaggerUI.setup(require('./swagger.demo.json')))

// module.exports = app
app.createServer().listen(port = process.env.PORT || 5000, () => console.log(`Server running on port : ${port}`))