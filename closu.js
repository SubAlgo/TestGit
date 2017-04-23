function prefix(pre) {
	return function showStr(err, data) {
		console.log(pre + " " + data);
	};
}

let fileHandler = prefix("Say");

let fs = require('fs');
fs.readFile('hello.txt', fileHandler);