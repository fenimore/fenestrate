var info = document.createElement('code');




document.addEventListener('mousemove', function(e) {

    var elem = document.elementFromPoint(e.pageX, e.pageY);
    var txt = elem.outerHTML.replace(elem.innerHTML, '...');
    info.textContent = txt;
    info.style = "background-color:#fdf6e3;color:#657b83;position:fixed;";
    info.style.left = e.pageX + "px";
    info.style.top = e.pageY + "px";
    document.elementFromPoint(e.pageX, e.pageY).appendChild(info);
    //console.log(document.elementFromPoint(e.pageX, e.pageY));
});






