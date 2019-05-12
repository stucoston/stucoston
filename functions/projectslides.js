// projects slide show
// =======================================================
var psIndex = 1;
showProjSlides(psIndex);
function plusProjSlides(n) {
  hideProjSlides(psIndex);
  setTimeout( function() { showProjSlides(psIndex += n); }, 800);
  
}
function currentProjSlide(n) {
  showProjSlides(psIndex = n);
  
}
function hideProjSlides(n) {
  var projSlides = document.getElementsByClassName("project-slide");
  var projSlidesContent = document.getElementsByClassName("project-slide-content");
  
  projSlides[psIndex-1].style.transition = "0.8s";
  projSlidesContent[psIndex-1].style.transition = "0.8s";
  projSlides[psIndex-1].style.opacity = "0";
  projSlidesContent[psIndex-1].style.opacity = "0";
  
}
function showProjSlides(n) {
  var ps;
  var projSlides = document.getElementsByClassName("project-slide");
  var projSlidesContent = document.getElementsByClassName("project-slide-content");
  
  if (n > projSlides.length) {psIndex = 1} 
  if (n < 1) {psIndex =projSlides.length}
  
  for (ps = 0; ps < projSlides.length; ps++) {
  
    projSlides[ps].style.display = "none";
    projSlidesContent[ps].style.display = "none";
    
  }
  
    projSlides[psIndex-1].style.transition = "1s";
    projSlidesContent[psIndex-1].style.transition = "1s";
    projSlides[psIndex-1].style.display = "block";
    projSlidesContent[psIndex-1].style.display = "block";
    projSlides[psIndex-1].style.opacity = "0";
    projSlidesContent[psIndex-1].style.opacity = "0";
    
    setTimeout(function(){
    
      projSlides[psIndex-1].style.opacity = "1";
      projSlidesContent[psIndex-1].style.opacity = "1";
    
    }, 50);
    
}
// scroll functions for project details
// ===========================================================
$('#p1d, #p2d, #p3d').scroll(function(event){
 
   var h = $(window).height(); 
   var st1 = $('#p1d').scrollTop();
   var st2 = $('#p2d').scrollTop();
   var st3 = $('#p3d').scrollTop();
   var it1 = document.getElementById('it1');
   var it2 = document.getElementById('it2');
   var it3 = document.getElementById('it3');
   didScroll = true; 
   
   if(st1 > 0) { 
     
     it1.style.transition = "0.5s";
     it1.style.opacity = "0";
     stu.addClass('#proj1','bg-dark');
     
   } else {
   
     it1.style.opacity = "1";
     stu.removeClass('#proj1','bg-dark');
     
   }
   
   if(st2 > 0) {
   
     it2.style.transition = "0.5s";
     it2.style.opacity = "0";
     stu.addClass('#proj2','bg-dark');
   
   } else {
   
     it2.style.opacity = "1";
     stu.removeClass('#proj2','bg-dark');
     
   }
   
   if (st3 > 0) {
   
     it3.style.transition = "0.5s";
     it3.style.opacity = "0";
     stu.addClass('#proj3','bg-dark');
     
   } else {
   
     it3.style.opacity = "1";
     stu.removeClass('#proj3','bg-dark');
     
   }
 });
