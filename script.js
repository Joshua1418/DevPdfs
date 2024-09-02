let showUp = false;
function openNav() {
    document.getElementById("navBox").style.width = showUp?
     "0vh" : "80%"
     document.getElementById("menuBar").src = showUp?
      "menu.png" : "close.png"
    showUp = !showUp;
}




