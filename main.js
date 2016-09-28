document.addEventListener('mousemove', function(e) {
    //console.log(document.elementFromPoint(e.pageX, e.pageY));
});

function test() {
    console.log("hello");    
}

chrome.browserAction.onClicked.addListener(test);
