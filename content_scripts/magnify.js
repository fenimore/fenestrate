var magnify = true;
var info = document.createElement('code');
var txt;


document.addEventListener('mousemove', function(e) {
    if (magnify) {
	var cornerX = e.pageX + 10;
	var cornerY = e.pageY + 10;
	
	var elem = document.elementFromPoint(e.pageX, e.pageY);
	if (elem){
	    var txt = elem.outerHTML.replace(elem.innerHTML, '...');
	    console.log("true!");
	} else {
	    var txt = "<>...<>";
	    console.log("false!");	    
	}
	info.textContent = txt;
	info.style="position:fixed;";
	//info.style = "background-color:#fdf6e3;color:#657b83;position:fixed;border-radius:50%;border:1px solid #657b83;";
	// failed styles:
	// height: 200px;width: 200px;vertical-align: middle;padding:20px;
	info.style.left = "0px";//cornerX + "px";
	info.style.top = cornerY + "px";
	info.style.visibility = "visible";
	
	document.body.appendChild(info);
	
	magnify = false;
    } else {
	info.style.visibility = "hidden";
	magnify = true;
    }
});

