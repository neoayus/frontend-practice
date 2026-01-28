//  toggling video control button on bottom-right corner. 
var video = document.querySelector(".hero__background") ;
var play = document.querySelectorAll(".hero__media-control i")[0] ;
var pause = document.querySelectorAll(".hero__media-control i")[1] ; 
var toggleMediaButton = document.querySelector(".hero__media-control") ;

function togglePlay(event){
   if(video.paused){
      video.play() ; 
      play.classList.remove("hidden"); 
      play.style.display = 'none' ; 
      pause.style.display = 'block' ; 
   }else{
      video.pause() ; 
      play.classList.remove("hidden"); 
      pause.style.display = 'none' ; 
      play.style.display = 'block' ; 
   }   
}

toggleMediaButton.addEventListener("click", togglePlay) ; 

//===========================================================
// Function to handle elements on resize : width < 830px 
   var navbar = document.querySelector(".navbar__icons") ; 
   var lastNavBarChild = navbar.lastElementChild ;  

 // creating hamburger button 
   // document.createElement(<i class="fa-solid fa-bars"> </i>) ;  
   let hamburgerButton = document.createElement("i") ;
   hamburgerButton.setAttribute("class","fa-solid fa-bars") ;
   hamburgerButton.classList.add("iicons") ; 

function handleNavbarOnResize(event){
   if(window.innerWidth < 830){
      lastNavBarChild.append(hamburgerButton) ; 
   }
}
window.addEventListener("resize", handleNavbarOnResize) ; 
window.addEventListener("load", handleNavbarOnResize) ; 

//===========================================================
// adding event listener on hamburger button: 
var navbar = document.querySelector(".navbar") ;
function expandNavbar(event){
   navbar.classList.add("transit") ; 
   navbar.style.height = '100vh' ; 

 // adding list . 
   let listItems = document.querySelectorAll(".navbar__icons li") ;
   let list = document.createElement('ul') ;
   navbar.appendChild(list) ;
   list.classList.add("transit") ;

 //styling list : 
   list.classList.add("js-list");
   // list.style.display = 'block' 
   // list.style.width = '100%' ;
   // list.style.height = '100%' ;
   // list.style.listStyleType = 'none' ;
   // list.style.position = 'absolute' ;
   // list.style.color = 'white' ;

   for(listItem of listItems){
      var li = document.createElement('li'); 
      list.appendChild(li) ;
      // li.textContent = listItem.textContent ; 
      li.textContent = listItem.textContent ; 
   } 

 // hiding icons 
   let icons = document.querySelectorAll(".icon") ; 
   for( let icon of icons){
      icon.classList.add("hidden") ;  
   }
   hamburgerButton.classList.add("hidden") ;

 // creating 'X' icon:
   let xMark = document.createElement("i") ;
   xMark.setAttribute("class","fa-solid fa-xmark") ;
   xMark.classList.add("iicons") ; 

 // adding 'X' icon:
   document.querySelector(".navbar").appendChild(xMark) ;
   xMark.style.position = 'absolute' ;
   xMark.style.top = '10px' ;
   xMark.style.right = '-3px' ;

 // feat: making X functional    
   function collapseNavbar(){
      navbar.style.height = '44px' ; 
      for( let icon of icons){
         icon.classList.remove("hidden") ;  
      }
      hamburgerButton.classList.remove("hidden") ;
      xMark.classList.add("hidden");
      list.classList.add("hidden") ;
   }

   xMark.addEventListener("click",collapseNavbar) ;

}

hamburgerButton.addEventListener("click", expandNavbar) ; 

//===========================================================
// HOVER EFFECT FOR NAV_BAR ITEMS '
// adding a list bar : 
// var listbar = document.createElement('div') ; 
// listbar.classList.add("js-listbar") ;
// navbar.append(listbar) ;

// // store 
// var store = document.querySelectorAll(".navbar__icons li")[1] ;
// function hoverOnStore(){
//    console.log("slatt") ;
//    listbar.style.height = '70vh'; 
//    listbar.classList.add("transit"); 
// }
// store.addEventListener("mouseenter", hoverOnStore) ;

