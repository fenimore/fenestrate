/*
Fenimore Love | 2016 
magnify.js for WebExtension Fenestrate.
GPLv3
*/
var magnify;
var info;
var txt;

info = document.createElement("pre");
info.id = "fenestrate";

magnify = !magnify;


if (magnify || magnify === undefined) {
    document.addEventListener('mousemove', function(e) {
	if (magnify) {
	    var cornerX = (e.pageX + 10) - window.pageXOffset;
	    //var cornerRight = e.pageX -10;
	    var cornerY = (e.pageY + 10) - window.pageYOffset;
	    // this is below the mouse so that the mouse doesn't
	    // Read the element lol

	    var childTxt; // this is what the child nodes are
	    
	    var elem = document.elementFromPoint((e.pageX - window.pageXOffset), (e.pageY - window.pageYOffset));
	    var clone = elem.cloneNode(true);
	    var child = clone.childNodes[0];

	    // Proper indent for children
	    if (child.childNodes) {
		for(var c=child.firstChild; c!==null; c=c.nextSibling) {
		    c.textContent = "\n  ";
    		    c.insertAdjacentHTML('beforebegin', '\n    ');
		    c.insertAdjacentHTML('beforeend', '\n    ');
		}
	    }
	    // If child node is not Text Object
	    if (child.nodeType === 1){
		child.insertAdjacentHTML('beforeend', '\n  ');		
		//child.lastChild.insertAdjacentHTML('afterend', '\n  ');
		childTxt = "\n  " + child.outerHTML + "\n";

	    } else if (!childTxt) {
		childTxt = "";
	    }

	    // Fill the clone with the child
	    clone.innerHTML = childTxt;
	    
	    var txt = clone.outerHTML;

	    var code = document.createElement("code");
	    code.textContent = txt;
	    // Mozilla originally rejects code because below
	    // had info.innerHTML as opposed to textContent.
	    // Once I change to textContent, the extension stops doing its job.
	    info.innerHTML = code.outerHTML;//txt;//clone.textContent;
	    // STYLE
	    info.style = "position:fixed;white-space:pre-wrap;border-bottom: 1px solid #d8dee9;";

	    // Don't want it to fall off right edge
	    info.style.top = cornerY + "px";
	    if((cornerX+200) > document.documentElement.clientWidth ) {
		/*this is not visible*/
		info.style.left = (e.pageX-200) + "px";//null;
	    } else {
		info.style.left = cornerX + "px";		
	    }
	    
	    // Attach the info div, fenestrate (id) to the document body
	    document.body.appendChild(info);
	    hljs.highlightBlock(info);


	}
    });
} else {
    var toRemove = document.getElementById("fenestrate");
    document.body.removeChild(toRemove);    
}

