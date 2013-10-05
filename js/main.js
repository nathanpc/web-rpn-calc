// main.js
// The mains.

// Prepare the onLoad event.
window.addEventListener("load", onload, false);

/**
 * Just a simple onLoad event handler.
 */
function onload() {
	// Style stuff.
	styling.setup();
	$(window).resize(function () {
		styling.setup();
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
}

var action = {};
action.setup = function () {
	$(".number").click(function () {
		var number = this.innerHTML;

		if (number !== ".") {
			$("#input").val($("#input").val() + number);
		} else if ($("#input").val().match(/\./) === null) {
			$("#input").val($("#input").val() + number);
		}
	});

	$(".operator").click(function () {
		operate(this.innerHTML);
	});

	$(".enter").click(function () {
		operate("Enter");
	});
}

var styling = {};
styling.setup = function () {
	// Keypad.
	var main_btn_size = $(window).width() / 5;
	$(".keypad > .top-pad button").css("width", main_btn_size + "px");
	$(".keypad > .top-pad button").css("height", main_btn_size / 1.5 + "px");
	$(".keypad > .main-pad button").css("width", main_btn_size + "px");
	$(".keypad > .main-pad button").css("height", main_btn_size + "px");
	$(".keypad .enter").css("height", (main_btn_size * 2) + "px ");

	// Logs.
	$("#log").css("height", ($(window).height() - $(".rest-container").height() - 12) + "px");
	styling.list_item();
}

styling.list_item = function () {
	$("#log > ul > li").css("width", ($(window).width() - 5) + "px");
}