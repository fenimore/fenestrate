var info = document.createElement('div');

document.addEventListener('mousemove', function(e) {
    //var test = document.elementFromPoint(e.pageX, e.pageY);
    //var test2 = test.textContent + ;
    //test.textContent = "...";
    var elem = document.elementFromPoint(e.pageX, e.pageY);
    var txt = elem.outerHTML.replace(elem.innerHTML, '...');
    info.textContent = txt;
    //console.log(txt);
    //info.textContent = document.elementFromPoint(e.pageX, e.pageY);
    document.elementFromPoint(e.pageX, e.pageY).appendChild(info);
    //console.log(document.elementFromPoint(e.pageX, e.pageY));
});






