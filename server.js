const http = require('http'),
    port = process.env.PORT || 5000,
    app = require('./index');
console.clear()
console.log('\n*       *     * * *     * * * *     * * * * *\t\t* * * * *   * * * * *\n* *     *   *       *   *       *   *        \t\t      *     *        \n*   *   *   *       *   *        *  * * *    \t\t*     *     * * * * *\n*     * *   *       *   *       *   *        \t\t*     *             *\n*       *     * * *     * * * *     * * * * *\t\t  * * *     * * * * *\n')
http.createServer(app).listen(port, () => console.log(`Server running on port : ${port}`));