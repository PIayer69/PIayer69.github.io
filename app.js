const mainStr = document.querySelector(".cen-str")
const topStr = document.querySelector(".top-str")
const botStr = document.querySelector(".bot-str")
const center = document.querySelector(".center")
const nav = document.querySelector("nav")
const bottom = document.querySelector(".bottom")
const projects = document.querySelector(".projects")
const next_page = document.querySelector(".next_page")
const slide1 = document.querySelector(".about_me")

var firstColor

var visited 

if (document.cookie == "visited=1"){
    visited = 1
}

function cookies(){
    
    setCookie("visited", 1, 31)

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }
}

function launchAnimation(site){
    if(!visited){
        if (site == "index"){
            var tl = gsap.timeline()
    
            tl.fromTo(center, {opacity:0, height:0}, {opacity: 1, height:'20vh', duration:1})
            .from(mainStr, {opacity: 0, duration: .5, ease:Power2.easeOut}, "-=.5")
            .from(topStr, {opacity:0, duration:1, x:-50, ease:Power2.easeOut, delay: .3})
            .from(botStr, {opacity:0, duration:1, x:50, ease:Power2.easeOut})
            .to(center, {height: '75vh', duration: 1, delay: .8, ease:Power2.easeOut})
            .from(nav, {opacity:0, duration:1, y:-10, ease:Power2.easeOut})
            .from(bottom, {opacity:0, duration:1, y:10, ease:Power2.easeOut}, "-=1")
            .from(projects, {opacity:0, duration:.5, ease:Power2.easeOut}, "-=.4")
        }
        else if (site == "about" || site == "contact"){
            var tl = gsap.timeline()
    
            tl.from(nav, {opacity:0, duration:1, y:-10, delay:1})
            .from(bottom, {opacity:0, duration:1, y:10}, "-=1")
        }
    }
    else{
        if (site == "index"){
            var tl = gsap.timeline()
    
            tl.from(center, {opacity:0, ease:Power2.easeOut})
        }
        else if (site == "about" || site == "contact"){
            var tl = gsap.timeline()
    
            tl.from(slide1, {opacity:0, duration:1})
        }
    }
    
}

/* SITE MAIN COLOR INTO "firstColor" */
function fColor(){
    const root = document.querySelector(":root")
    firstColor = getComputedStyle(root).getPropertyValue("--red")

}

/* MAIN COLOR CHANGE */

function colorChange(color){
    const root = document.querySelector(":root")
    root.style.setProperty("--red", color)
}



/* ON CLICK COPY TO CLIPBOARD */

function copy(text) {
    var area = document.querySelector(".inputArea")
    /* Select the text field */
    area.value = text
    area.select();
    // copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    messagePopUp("Copied Discord tag!")
  }


/* MESSAGE POP UP */

function messagePopUp(message){
    var popUp = document.createElement("div")
    popUp.classList.toggle("message")
    popUp.innerText = message
    document.body.appendChild(popUp)

    var tl = gsap.timeline()

    tl.from(popUp, {opacity: 0, y:-20, duration:1})
    .to(popUp, {opacity: 0, y:20, duration:1, delay:3})

    setTimeout(function(){
        document.body.removeChild(popUp)
    }, 5000)
}

/* ON HOVER NAV LINKS COLOR CHANGE */

const home = document.querySelector(".home-btn")
const about = document.querySelector(".about-btn")
const contact = document.querySelector(".contact-btn")


home.addEventListener("mouseover", function(){
    colorChange("#f96060")
})
about.addEventListener("mouseover", function(){
    colorChange("#00c72c")
})
contact.addEventListener("mouseover", function(){
    colorChange("#395aff")
})

const list = document.querySelector(".nav-links")

list.addEventListener("mouseleave", function(){
    colorChange(firstColor)
})


// SLIDER WITH ANIMATIONS

var slider_page = 0

function nextPage(number){
    var slides = document.getElementsByClassName("slide")
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  
    slides[slider_page + number].style.display = "flex";
    slider_page += number

    var tl = gsap.timeline()

    tl.from(slides[slider_page], {opacity:0, duration: 1})
    
}
