//[New Code]
var connect = require('connect');
var app = connect();

var logger = function(req, res, next) {
	console.log(req.method, req.url);

	next();
};

var helloWorld = function(req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World');
};

var goodbyeWorld = function(req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Goodbye World');
};

app.use(logger);

app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);

app.listen(3000);
console.log('Server running at http://localhost:3000');

//----------------

/*
var connect = require('connect');
var app = connect();

app.use(function(req, res, next) {
	// middleware
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World');
});


app.listen(3000);
console.log('Server running at http://localhost:3000');
*/



//-----------------------------
/*var http = require('http')
http.createServer(function(req, res){
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	res.write('Amart\n');
	res.end('Hello World');
}).listen(3000);
console.log('Server running at http://localhost:3000');
*/

