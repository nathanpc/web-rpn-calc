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
	$("#log").css("height", ($(window).height() - $(".rest-container").height() - 10) + "px");
	$("#log > ul > li").css("width", ($(window).width() - 5) + "px");
}