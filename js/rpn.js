// rpn.js
// RPN stuff.

var rpn_stack = [];

function print_stack() {
	$("#log > ul").html("");

	for (var i = 0; i < rpn_stack.length; i++) {
		$("#log > ul").append("<li>" + rpn_stack[i] + "</li>");
	}

	styling.list_item();
}

function operate(symbol) {
	if ($("#input").val() !== "") {
		r(Number($("#input").val()));
		$("#input").val("");
	}

	if ((symbol !== "Enter") && (symbol !== "Drop") && (symbol !== "Clear")) {
		r(symbol);
	}

	print_stack();
}

function r(input) {
	if (typeof input === "number") {
		console.log("Number");
		push(input);
		$("#log > ul.numbers").append("<li>" + input + "</li>");
	} else if ((input === "\u221A") || (input === "ln") || (input === "<sup>1</sup>\u2215<sub>x</sub>")) {
		var n = pop();
		var result;

		if (input === "\u221A") {
			// Square root.
			result = Math.sqrt(n);
		} else if (input === "<sup>1</sup>\u2215<sub>x</sub>") {
			// 1/x
			result = 1 / n;
		} else if (input === "ln") {
			// ln
			result = Math.log(n);
		}

		push(result);
		return result;
	} else {
		var n = [ 0, 0 ];
		n[1] = pop();
		n[0] = pop();

		var result;
		if (input === "+") {
			// +
			result = n[0] + n[1];
		} else if (input === "-") {
			// -
			result = n[0] - n[1];
		} else if (input === "\u00D7") {
			// *
			result = n[0] * n[1];
		} else if (input === "\u00F7") {
			// /
			result = n[0] / n[1];
		} else if (input === "y<sup>x</sup>") {
			// ^
			result = Math.pow(n[0], n[1]);
		} else if (input === "log") {
			// log
			result = Math.log(n[1]) / Math.log(n[0]);
		}

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