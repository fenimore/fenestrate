var currentTab;


function doItsThing() {
    // requires the "tabs" or "activeTab" permission
    chrome.tabs.executeScript(null, {
	file: "/content_scripts/log.js"
    }    
    console.log("hello");

};


chrome.browserAction.onClicked.addListener(doItsThing);

