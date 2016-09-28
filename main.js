var info = document.createElement('div');

// Plug prism css into page:
var file = location.pathname.split( "/" ).pop();

var link = document.createElement( "link" );
link.href = file.substr(0, file.lastIndexOf( "." ) ) + ".css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";

document.getElementsByTagName( "head" )[0].appendChild( link );



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






