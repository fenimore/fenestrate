var info = document.createElement('code');




document.addEventListener('mousemove', function(e) {
    var cornerX = e.pageX + 10;
    var cornerY = e.pageY + 10;
    
    var elem = document.elementFromPoint(e.pageX, e.pageY);
    var txt = elem.outerHTML.replace(elem.innerHTML, '...');
    info.textContent = txt;
    info.style = "background-color:#fdf6e3;color:#657b83;position:fixed;";
    info.style.left = cornerX + "px";//e.pageX + "px";
    info.style.top = cornerY + "px";//e.pageY + "px";
    document.elementFromPoint(e.pageX, e.pageY).appendChild(info);
});






