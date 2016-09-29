var magnify = true;
var info = document.createElement('div');
var txt;


if (magnify) {  
    document.addEventListener('mousemove', function(e) {
	if (magnify) {
	    var cornerX = e.pageX + 10;
	    var cornerY = e.pageY + 10;
	    
	    var elem = document.elementFromPoint(e.pageX, e.pageY);
	    var clone = elem.cloneNode(true);
	    var child = clone.childNodes[0];
	    //var childTxt = "";
	    //children[0].textContent = "...";
	    if (child.nodeType === 1){
		var childTxt = child.outerHTML;
	    }
	    console.log('childtxt', childTxt);
	    if (!childTxt) {
		var childTxt = "";
	    }

	    clone.innerHTML = childTxt;
	    //var child = clone.innerHTML;
	    var txt = clone.outerHTML;
	    
	    info.textContent = txt;//clone.textContent;
	    // STYLE
	    info.style = "position:fixed;background: #eee; padding: 1em; color: #000; font-family: monospace;white-space:pre-wrap;";
	    // Failed STYLE
	    //info.style = "background-color:#fdf6e3;color:#657b83;position:fixed;border-radius:50%;border:1px solid #657b83;";
	    // more Failed STYLE
	    // height: 200px;width: 200px;vertical-align: middle;padding:20px;
	    info.style.left = "0px";//cornerX + "px";
	    info.style.top = cornerY + "px";
	    //info.style.visibility = "visible";

	    document.body.appendChild(info);
	    
	    //magnify = false;
	}
    });
    //magnify == false;
} else {
    info.style.visibility = "hidden";
    magnify = true;
}

