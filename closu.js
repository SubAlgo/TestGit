function prefix(pre) {
	return function showStr(err, data) {
		console.log(pre + " " + data);
	};
}

let say = prefix("Say:");
let shout = prefix("Shout:");


let fs = require('fs');
fs.readFile('hello.txt', say);
fs.readFile('hello.txt' , shout);

