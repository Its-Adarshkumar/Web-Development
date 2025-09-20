var tl=gsap.timeline();

tl.from(".nav h1",{
    y:-20,
    opacity:0,
    duration:1,
    delay:1
})
tl.from(".nav h3",{
    y:-20,
    opacity:0,
    duration:1,
    stagger:1
})
tl.from(".nav h2",{
    y:-20,
    opacity:0,
    duration:1,
    stagger:1
})
 let darkMode= document.getElementById("dark-mode");
 
 darkMode.addEventListener("click",function(){
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
 })