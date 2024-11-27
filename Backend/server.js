const http = require('http');
const server = require('./app');
const port = process.env.port || 3000

server.listen(port,() => {
    console.log(`server is running on the ${port}`)
});