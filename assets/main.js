//cursor
let cursor = document.getElementById("myCursor");
window.addEventListener("mousemove",function(e){
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x-25+"px"; 
  cursor.style.top = y-25+"px";
})

//button
let mybutton = document.getElementById("myBtn");

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
