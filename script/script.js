
//function for slider

function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
}


// script for menu
let menu = document.getElementById("menuOpen");
let menuClose = document.getElementById("menuClose");
let navBar = document.getElementById("navBar");
let menuIsOpen = false;

menu.addEventListener("click", () =>{
    navBar.classList.add("openCloseMenu");
    menuIsOpen = true;
});

menuClose.addEventListener("click", () =>{
  if(menuIsOpen){
    navBar.classList.remove("openCloseMenu");
    menuIsOpen = false;
}
});