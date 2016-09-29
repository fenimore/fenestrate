
function toggleMag() {
    // code below is supposed to be inside your button trigge
    console.log("toggle magnifier");
    chrome.tabs.executeScript(null, {
	file: "/content_scripts/magnify.js"
    });

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
	    console.log(response.farewell);
	});
    });
}





chrome.browserAction.onClicked.addListener(toggleMag);
