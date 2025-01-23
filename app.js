// toggling the front-cover
let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("front-cover");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}

// this toggles the navigation menu
function navMenu() {
  var x = document.getElementById("navSmall");
  if (x.className.indexOf("my-show") == -1) {
    x.className += " my-show";
  } 
  else { 
    x.className = x.className.replace(" my-show", "");
  }
}

