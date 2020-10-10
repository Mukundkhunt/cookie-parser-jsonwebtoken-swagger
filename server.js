const http = require('http'),
    port = process.env.PORT || 5000,
    app = require('./index');
console.clear()
console.log('*       *\t  * * *  \t* * * *  \t* * * * *\t* * * * *\t* * * * *\n* *     *\t*       *\t*       *\t*        \t      *  \t*        \n*   *   *\t*       *\t*        *\t* * *    \t*     *  \t* * * * *\n*     * *\t*       *\t*       * \t*        \t*     *  \t        *\n*       *\t  * * *  \t* * * *  \t* * * * *\t  * * *  \t* * * * *')
http.createServer(app).listen(port, () => console.log(`Server running on port : ${port}`));