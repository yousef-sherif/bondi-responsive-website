// start header 
let bars = document.querySelector(".bars")
let nav = document.querySelector(".nav-ul")


    bars.addEventListener("click" , show_nav);
// show nav 
function show_nav() {
    document.querySelector(nav).classList.add(".nav")
}
// hide nav 
function hide_nav() {
    document.querySelector(nav).classList.remove(".nav")
}
// end header 
// start portfolio
let switcherList = document.querySelectorAll(".switcher li");
let projects = document.querySelectorAll(".pro")

switcherList.forEach((li) => {
    li.addEventListener("click" , removeActive);
    li.addEventListener("click" , manageprojects);
});

// remove active class form all list and a add to current
function removeActive() {
    switcherList.forEach((li) =>{
        li.classList.remove("active");
        this.classList.add("active");
    });
}
// mange imgs
function manageprojects() {
    projects.forEach((div) => {
        projects.style.display = "none";
    }) 
}
// end portfolio