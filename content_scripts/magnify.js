/*
Fenimore Love | 2016 
magnify.js for WebExtension Fenestrate.
GPLv3
*/
var magnify;
var info;
var txt;

info = document.createElement("code");
info.className += "language-html";
info.id = "fenestrate";

magnify = !magnify;

//console.log("start", magnify);

var Prism = { highlightElement: function() {} };

window.addEventListener('load', () => { Prism = window.Prism });

if (magnify || magnify === undefined) {
    document.addEventListener('mousemove', function(e) {
	if (magnify) {
	    var cornerX = e.pageX + 10;
	    var cornerRight = e.pageX -10;
	    var cornerY = e.pageY + 10; // this is below the mouse

	    var childTxt; // this is what the child nodes are
	    
	    var elem = document.elementFromPoint(e.pageX, e.pageY);
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
	    
	    info.textContent = txt;//clone.textContent;
	    // STYLE
	    info.style = "position:fixed;background: #f5f7f9; padding: 1em; color: #000; font-family: monospace;white-space:pre-wrap;padding:2px 4px; vertical-align: text-bottom; color: #000;border-bottom: 1px solid #d8dee9;-webkit-font-smoothing: initial;";

	    // The fenestrate Box coordinates, don't want it to fall off the right edge.
	    // But apparently I don't care about falling off the bottom.
	    info.style.top = cornerY + "px";
	    //if((cornerY+200) > document.documentElement.clientHeight ) {
		/*this is not visible*/
	    //	info.style.left = (e.pageY+200) + "px";
	    //  } else {
	    
	    //    }
	    // This could be measured against window.innerWidth;
	    
	    
	    if((cornerX+200) > document.documentElement.clientWidth ) {
		/*this is not visible*/
		info.style.left = (e.pageX-200) + "px";//null;
	    } else {
		info.style.left = cornerX + "px";		
	    }

	    // Attach the info div, fenestrate (id) to the document body
	    document.body.appendChild(info);
	    Prism.highlightElement(info);
	}
    });
} else {
    var toRemove = document.getElementById("fenestrate");
    document.body.removeChild(toRemove);    
}

