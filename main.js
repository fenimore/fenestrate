var currentTab;


function doItsThing() {
    // requires the "tabs" or "activeTab" permission
    
    console.log("hello");

};


chrome.browserAction.onClicked.addListener(doItsThing);

