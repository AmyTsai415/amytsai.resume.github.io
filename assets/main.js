//cursor
let cursor = document.getElementById("myCursor");
window.addEventListener("mousemove",function(e){
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x-25+"px"; 
  cursor.style.top = y-25+"px";
})

var cursorOffset = {
  left : -30
, top  : -20
}

document.getElementById('container').addEventListener("mousemove", function (e) {
 var $cursor = document.getElementById('cursor')

 $cursor.style.left = (e.pageX - cursorOffset.left) + 'px';
 $cursor.style.top = (e.pageY - cursorOffset.top) + 'px';

}, false);
