function parent() {
	let x = 1
	let y = 2

	function child() {
		console.log(x+y);
	}
	return child;
}
var childFn = parent();
childFn();