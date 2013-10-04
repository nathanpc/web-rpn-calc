// rpn.js
// RPN stuff.

var rpn_stack = [];

function print_result(value) {
	$("#log > ul.symbols").append("<li>=</li>");
	$("#log > ul.numbers").append("<li>" + value + "</li>");
}

function operate(symbol) {
	r(Number($("#input").val()));
	$("#input").val("");

	if (symbol === "Enter") {
		$("#log > ul.symbols").append("<li></li>");
	} else if (symbol === "+") {
		$("#log > ul.symbols").append("<li>+</li>");
		print_result(r("+"));
	}
}

function r(input) {
	if (typeof input === "number") {
		console.log("Number");
		push(input);
		$("#log > ul.numbers").append("<li>" + input + "</li>");
	} else if (input === "+") {
		var n = [ 0, 0 ];
		n[1] = pop();
		n[0] = pop();

		var result = n[0] + n[1];
		push(result);

		return result;
	}
}

function push(value) {
	rpn_stack.push(value);
}

function pop() {
	var n = rpn_stack.pop();

	if (n === undefined) {
		console.error("Sorry, not enough numbers in the stack");
	}

	return n;
}