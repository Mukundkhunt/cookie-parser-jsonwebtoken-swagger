const swaggerUI = require('swagger-ui-express'),
    express = require('express'),
    app = express()
app.use('/api/swag', swaggerUI.serve, swaggerUI.setup(require('./swagger.json')))
app.listen(port = process.env.PORT || 5000, () => console.log(`Server running on port : ${port}`))