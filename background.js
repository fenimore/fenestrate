
function toggleBookmark() {
    // code below is supposed to be inside your button trigge
    console.log("toggle");
    chrome.tabs.executeScript(null, {
	file: "/content_scripts/magnify.js"
    });
}


chrome.browserAction.onClicked.addListener(toggleBookmark);
