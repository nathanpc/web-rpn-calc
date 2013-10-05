// main.js
// The mains.

$(document).ready(function () {
	// Style stuff.
	styling.setup(false);
	$("#log").css("height", ($(window).height() - $(".rest-container").height() - 12) + "px");
	$(window).resize(function () {
		styling.setup(true);
	});

	// Actions.
	action.setup();

	// Check for Cache updates.
	/*window.applicationCache.addEventListener("updateready", function (e) {
		console.log("Update available");

		if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
			window.applicationCache.swapCache();
			console.log("Updated");

			if (confirm("A new version of this WebApp is available. Load it?")) {
				location.reload();
			}
		}
	}, false);*/

	// Firefox OS (nuclear) stuff.
	if (navigator.mozApps) {
		// TODO: Ask the user to add the app to the home screen. Don't be annoying.
	}
});

var action = {};
action.setup = function () {
	$(".number").click(function () {
		// Number.
		var number = this.innerHTML;

		if (number !== ".") {
			$("#input").val($("#input").val() + number);
		} else if ($("#input").val().match(/\./) === null) {
			$("#input").val($("#input").val() + number);
		}
	});

	$(".operator").click(function () {
		// Operator.
		operate(this.innerHTML);
	});

	$(".enter").click(function () {
		// Enter.
		operate("Enter");
	});

	$(".chs").click(function () {
		// Change signal.
		if ($("#input").val() !== "") {
			if ($("#input").val()[0] === "-") {
				$("#input").val($("#input").val().substring(1));
			} else {
				$("#input").val("-" + $("#input").val());
			}
		}
	});

	$(".clear").click(function () {
		// Clear.
		rpn_stack = [];
		$("#input").val("");
		print_stack();
	});

	$(".drop").click(function () {
		// Drop.
		if ($("#input").val() === "") {
			pop();
			print_stack();
		} else {
			$("#input").val("");
		}
	});
}

var styling = {};
styling.setup = function (resize_logs) {
	// Keypad.
	var main_btn_size = $(window).width() / 5;
	$(".keypad > .top-pad button").css("width", main_btn_size + "px");
	$(".keypad > .top-pad button").css("height", main_btn_size / 1.5 + "px");
	$(".keypad > .main-pad button").css("width", main_btn_size + "px");
	$(".keypad > .main-pad button").css("height", main_btn_size + "px");
	$(".keypad .enter").css("height", (main_btn_size * 2) + "px ");

	// Logs.
	if (resize_logs) {
		styling.list_item();
		$("#log").css("height", ($(window).height() - $(".rest-container").height() - 1) + "px");
	}
}

styling.list_item = function () {
	$("#log > ul > li").css("width", ($(window).width() - 5) + "px");
	document.getElementById("log").scrollTop = document.getElementById("log").scrollHeight;
}