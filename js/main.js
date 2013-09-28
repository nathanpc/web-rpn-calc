// main.js
// The mains.

// Prepare the onLoad event.
window.addEventListener("load", onload, false);

/**
 * Just a simple onLoad event handler.
 */
function onload() {
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