var info = document.createElement('div');

document.addEventListener('mousemove', function(e) {
    info.textContent = document.elementFromPoint(e.pageX, e.pageY);
    document.elementFromPoint(e.pageX, e.pageY).appendChild(info);
    //console.log(document.elementFromPoint(e.pageX, e.pageY));
});






