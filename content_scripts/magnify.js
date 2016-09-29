/*
Fenimore Love | 2016 
magnify.js for WebExtension Fenestrate.
GPLv3
*/
var magnify;
var info;
var txt;

info = document.createElement("div");
info.id = "fenestrate";

magnify = !magnify;

console.log("start", magnify);

if (magnify || magnify === undefined) {
    document.addEventListener('mousemove', function(e) {
	if (magnify) {

	    //var cornerX = e.pageX + 10;
	    var cornerY = e.pageY + 10; // this is below the mouse

	    var childTxt; // this is what the child nodes are
	    
	    var elem = document.elementFromPoint(e.pageX, e.pageY);
	    var clone = elem.cloneNode(true);
	    var child = clone.childNodes[0];
	    //console.log(child.childNodes);
	    if (child.childNodes) {
		for(var c=child.firstChild; c!==null; c=c.nextSibling) {
		    //console.log("child", c);
		    c.textContent = "";
		}
	    }
	    // if child node is not Text Object
	    if (child.nodeType === 1){
		childTxt = "\n  " + child.outerHTML + "\n";
	    } else if (!childTxt) {
		childTxt = "";
	    }

	    // Fill the clone with the child
	    clone.innerHTML = childTxt;
	    
	    var txt = clone.outerHTML;
	    
	    info.textContent = txt;//clone.textContent;
	    // STYLE
	    info.style = "position:fixed;background: #f5f7f9; padding: 1em; color: #000; font-family: monospace;white-space:pre-wrap;padding:2px 4px; vertical-align: text-bottom; color: #000;border-bottom: 1px solid #d8dee9;-webkit-font-smoothing: initial;";
	    // Failed STYLE
	    //info.style = "background-color:#fdf6e3;color:#657b83;position:fixed;border-radius:50%;border:1px solid #657b83;";
	    // more Failed STYLE
	    // height: 200px;width: 200px;vertical-align: middle;padding:20px;
	    info.style.left = "0px";//cornerX + "px";
	    info.style.top = cornerY + "px";
	    //info.style.visibility = "visible";
	    
	    document.body.appendChild(info);
	}
    });
} else {
    var toRemove = document.getElementById("fenestrate");
    document.body.removeChild(toRemove);    
}

