var nav = document.getElementById("nav")

window.addEventListener("scroll" , function(){
    var scr = window.scrollY;
    if(scr > 70){
        nav.classList.add("navbar-scroll")
    }
    else{
        nav.classList.remove("navbar-scroll")
    }
})
// toggloing Side Bar ///
var sideBar = document.getElementById("sideBar");
var openSideBar = document.getElementById("openSideBar");
var closeSideBar = document.getElementById("closeSideBar");
var solutions = document.getElementById("solutions");

var sideBarWidth = sideBar.clientWidth;
console.log(sideBarWidth)

openSideBar.addEventListener("click" , ()=>{
    sideBar.style.transform = `translateX(-99%)`
    solutions.style.transform = `translateX(-${sideBarWidth/2}px)`
})
closeSideBar.addEventListener("click" , ()=>{
    sideBar.style.transform = "translateX(0)"
    solutions.style.transform = "translateX(0)"

})