var info = document.createElement('code');

document.addEventListener('mousemove', function(e) {
    var cornerX = e.pageX + 10;
    var cornerY = e.pageY + 10;
    
    var elem = document.elementFromPoint(e.pageX, e.pageY);
    var txt = elem.outerHTML.replace(elem.innerHTML, '...');
    info.textContent = txt;
    info.style = "background-color:#fdf6e3;color:#657b83;position:fixed;border-radius:50%;border:1px solid #657b83;";
    // failed styles:
    // height: 200px;width: 200px;vertical-align: middle;padding:20px;
    info.style.left = cornerX + "px";
    info.style.top = cornerY + "px";
    

    document.elementFromPoint(e.pageX, e.pageY).appendChild(info);
});






