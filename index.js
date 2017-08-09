const http = require('http');
const port = 4001;

const server = http.createServer((req, res) => {
	console.log('Hello');
	res.end('Hello');
});

server.listen(port);
console.log('Listen port on: ', port);