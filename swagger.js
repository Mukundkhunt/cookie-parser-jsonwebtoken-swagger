const swaggerUI = require('swagger-ui-express')
const express = require('express')
const app = express()
const http = require('http')

app.use('/api/swag', swaggerUI.serve, swaggerUI.setup(require('./swagger.json')))


console.clear()
console.log('*       *\t  * * *  \t* * * *  \t* * * * *\t* * * * *\t* * * * *\n* *     *\t*       *\t*       *\t*        \t      *  \t*        \n*   *   *\t*       *\t*        *\t* * *    \t*     *  \t* * * * *\n*     * *\t*       *\t*       * \t*        \t*     *  \t        *\n*       *\t  * * *  \t* * * *  \t* * * * *\t  * * *  \t* * * * *')
http.createServer(app).listen(port = process.env.PORT || 5000, () => console.log(`Server running on port : ${port}`));