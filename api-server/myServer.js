const http = require('http')

http.createServer((req, res) => {
    let body = [];
    req.on('data', chunk => {
        body.push(chunk)
    }).on('end', () => {
        console.log(body)
        body = Buffer.concat(body).toString();
        console.log(body)
    })

})
.listen(5002)