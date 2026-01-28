// Strict the whole content's width to the vw :   
vw = document.documentElement.clientWidth; 
// document.body.style.width = `${vw}px`;
// document.body.style.overflowX = "hidden";

// secondary cta(call to action)
// let sb = document.querySelectorAll(".button.secondary");
// sb.forEach((button)=>{
//     button.addEventListener('touchstart', ()=>{
//         button.classList.remove("secondary");
//         button.classList.add("primary");
//     })
// });

// //  primary cta(call to action)
// let pb = document.querySelectorAll(".button.primary");
// pb.forEach((button)=>{
//     button.addEventListener('touchstart', ()=>{
//         button.classList.remove("primary");
//         button.classList.add("secondary");
//     })
// });
// 

// toggle bw primary and secondary button : 
let btn = document.querySelectorAll(".primary, .secondary");
btn.forEach((button)=>{
    button.addEventListener('touchstart',()=>{
        if(button.classList.contains('primary')){
            button.classList.remove('primary');
            button.classList.add('secondary');
        }else if(button.classList.contains('secondary')){
            button.classList.remove('secondary');
            button.classList.add('primary');
        }
    });
});

// Hamburger button CTA: 
let ham = document.querySelector(".icon.hamburger-menu");
ham.addEventListener('touchstart',()=>{
    // icons to hide
    let apple = document.querySelector(".icon.apple");
    let search = document.querySelector(".icon.search");
    let store = document.querySelector(".icon.store");

    let iconsToHide = [apple, search, store, ham];
    iconsToHide.forEach((icon)=>{
        icon.classList.add("hidden");
    });

    // icon to unhine : cross icon
    let cross = document.querySelector(".icon.cross");
    cross.classList.remove("hidden");
    
    // nav dropdown list 
    let list = document.querySelector(".nav-list");
    list.classList.remove("hidden");
    
    // disable scroll on body : 
    document.body.classList.add("noscroll");
    
});

// Cross Button CTA: 
let cross = document.querySelector(".icon.cross");
cross.addEventListener('touchstart',()=>{
    // hide list 
    let list = document.querySelector(".nav-list");
    list.classList.add("hidden");
    
    // hide cross icon 
    let cross = document.querySelector(".icon.cross");
    cross.classList.add("hidden");

    // un-hide multiple icons 
    let apple = document.querySelector(".icon.apple");
    let search = document.querySelector(".icon.search");
    let store = document.querySelector(".icon.store");
    let ham = document.querySelector(".icon.hamburger-menu");

    let iconsToUnHide = [apple, search, store, ham];
    iconsToUnHide.forEach((icon)=>{
        icon.classList.remove("hidden");
    });

    //  remove scroll lock : 
    document.body.classList.remove("noscroll");
});

// Slider function 
// make it slide
let left = document.querySelector(".left.slider-nav-btn");
let right = document.querySelector(".right.slider-nav-btn");
let sliderTrack = document.querySelector(".slider-track-inner"); 
vw = document.documentElement.clientWidth; 
let locX = 0; 

left.addEventListener('touchstart', ()=>{
    if(!(locX > 0)){
        if(locX == 0){
            console.log("can't load any more posters to right ");
        }else{
            sliderTrack.style.transform = `translateX(${locX - -vw}px)`;
            // locX = locX+ -vw; 
            locX-= -vw; 
        }
    }
})

right.addEventListener('touchstart', ()=>{
    // to check if we are on the first or last poster 
    if(!(locX <= -(vw*9))){
        if(locX == 0){
            sliderTrack.style.transform = `translateX(-${vw}px)`;
            locX = -vw; 
        }else{
            sliderTrack.style.transform = `translateX(${locX + -vw}px)`;
            // locX = locX+ -vw; 
            locX+= -vw; 
        }
    }
})

/* pagination buttons cta  */
let pag01 = document.querySelector(".pagination-dot.one");
let pag02 = document.querySelector(".pagination-dot.two");
let pag03 = document.querySelector(".pagination-dot.three");
let pag04 = document.querySelector(".pagination-dot.four");
let pag05 = document.querySelector(".pagination-dot.five");
let pag06 = document.querySelector(".pagination-dot.six");
let pag07 = document.querySelector(".pagination-dot.seven");
let pag08 = document.querySelector(".pagination-dot.eight");
let pag09 = document.querySelector(".pagination-dot.nine");
let pag10 = document.querySelector(".pagination-dot.ten");

let pagButtons = [pag01,pag02,pag03,pag04,pag05,pag06,pag07,pag08,pag09,pag10];

pagButtons.forEach((button, index)=>{
    button.addEventListener('touchstart',()=>{
        if(index == 0){
            sliderTrack.style.transform = `translateX(${0}px)`;
            locX = 0; 
        }else{
            sliderTrack.style.transform = `translateX(${- index * vw}px)`;
            locX = - index * vw ; 
        }
            button.classList.add("clicked");

        // change color of page numbered-block
        for(var x=0; x<pagButtons.length; x++){
            pagButtons[x].classList.remove("clicked");
            if(x === index){
                pagButtons[x].classList.add("clicked");
            }
        }
    })
});

// Drop Down List toggle cta 
// let ddButton = document.querySelectorAll(".main-list-item") ; 
// ddButton.forEach((btn)=>{
//     btn.addEventListener('touchstart', ()=>{    
//         let subList = btn.nextElementSibling;
//         if(subList.classList.contains('hidden')){
//             subList.classList.remove("hidden");
//         }else if(! subList.classList.contains('hidden')){
//             subList.classList.add("hidden");
//         }
//     });
// });
// finesse
document.addEventListener("touchstart", (e) => {
    const btn = e.target.closest(".main-list-item");
    if (!btn) return;

    const subList = btn.nextElementSibling;
    if (!subList) return;

    subList.classList.toggle("hidden");
});
