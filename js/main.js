
var slides=document.querySelector('.slider-items').children;
var nextSlide=document.querySelector("#nextBtn");
var prevSlide=document.querySelector("#prevBtn");
var totalSlides=slides.length;
var counter=0;

nextSlide.onclick=function () {
     next("next");
}
prevSlide.onclick=function () {
     next("prev");
}

function next(direction){

   if(direction=="next"){
      counter++;
       if(counter==totalSlides){
        counter=0;
       }
   } 
   else{
           if(counter==0){
            counter=totalSlides-1;
           }
           else{
            counter--;
           }
    }

  for(i=0;i<slides.length;i++){
          slides[i].classList.remove("active");
  }
  slides[counter].classList.add("active");     

}
