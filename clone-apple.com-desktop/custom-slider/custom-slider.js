let images = document.querySelectorAll("img") ; 
let index = 0 ; 

images.forEach((image,index)=>{
   image.style.left = `${index * 100}%` ; 
}); 

let previousButton = document.querySelector(".previous") ; 
let nextButton = document.querySelector(".next") ; 

function slideImageToLeft(){
   images.forEach((img)=>{
      img.style.transform = `translateX(-${index * 100}%)`
   }); 
}
function slideImageToRight(){
   images.forEach((img)=>{
      img.style.transform = `translateX(${index * 100}%)`
   }); 
}

function slidePrevious(){
   if(index > 0 ){
      index = index - 1 ; 
      slideImageToRight() ; 
   }
}

function slideNext(){
   if(index < images.length -1 ){
      index = index + 1 ; 
      slideImageToLeft() ; 
   }
}


previousButton.addEventListener("click", slidePrevious) ; 
nextButton.addEventListener("click", slideNext) ; 