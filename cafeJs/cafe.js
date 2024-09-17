// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})
// header scroller
let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if (document.documentElement.scrollTop > 40){
        nav.classList.add("scroll-on");

    }
    else{
        nav.classList.remove("scroll-on");
    }
}