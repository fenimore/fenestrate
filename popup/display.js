document.addEventListener('mousemove', function(e) {
    console.log(document.elementFromPoint(e.pageX, e.pageY)); 
})