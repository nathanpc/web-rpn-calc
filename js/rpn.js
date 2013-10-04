// rpn.js
// RPN stuff.

var rpn_stack = [];

function print_stack() {
	$("#log > ul").html("");

	for (var i = 0; i < rpn_stack.length; i++) {
		$("#log > ul").append("<li>" + rpn_stack[i] + "</li>");
	}
}

function operate(symbol) {
	r(Number($("#input").val()));
	$("#input").val("");

	if (symbol === "+") {
		r("+");
	}

	print_stack();
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