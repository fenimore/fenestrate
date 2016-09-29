
function toggleMag() {
    // code below is supposed to be inside your button trigge
    chrome.tabs.executeScript(null, {
	file: "/content_scripts/magnify.js"
    });
}





chrome.browserAction.onClicked.addListener(toggleMag);
