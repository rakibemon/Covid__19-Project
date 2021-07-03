window.addEventListener("scroll", function()
{
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0 );
})


// to-top button
let to__top = document.querySelector(".to-top")
window.addEventListener("scroll", ()=>{
    if (window.pageYOffset > 100)
    {
        to__top.classList.add("to__top__active")
    }
    else
    {
        to__top.classList.remove("to__top__active")
    }
})