// templates slide show
// =======================================================
var tsIndex = 1;
showTempSlides(psIndex);
function plusTempSlides(n) {
  hideTempSlides(tsIndex);
  setTimeout( function() { showTempSlides(tsIndex += n); }, 800);
  
}
function currentTempSlide(n) {
  showTempSlides(tsIndex = n);
  
}
function hideTempSlides(n) {
  var tempSlides = document.getElementsByClassName("template-slide");
  
  tempSlides[tsIndex-1].style.transition = "0.8s";
  tempSlides[tsIndex-1].style.opacity = "0";
  
}
function showTempSlides(n) {
  var ts;
  var tempSlides = document.getElementsByClassName("template-slide");
  
  if (n > tempSlides.length) {tsIndex = 1} 
  if (n < 1) {tsIndex = tempSlides.length}
  
  for (ts = 0; ts < tempSlides.length; ts++) {
  
    tempSlides[ts].style.display = "none";
    
  }
  
    tempSlides[tsIndex-1].style.transition = "1s";
    tempSlides[tsIndex-1].style.display = "block";
    tempSlides[tsIndex-1].style.opacity = "0";
    
    setTimeout(function(){
    
      tempSlides[tsIndex-1].style.opacity = "1";
    
    }, 50);
    
}
</script> -->
<script>
    // scroll mousewheel to change project slides
    // ====================================================
    $('#projects').on( 'DOMMouseScroll mousewheel', function ( event ) {
      
      var wrap = document.getElementById('proj-page-wrap');
      
      if(wrap.style.padding == "0px") {
        
        //prevent page fom scrolling
        return true;
        
        } else {
      
        if(event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) {
        
          //scroll down
          plusProjSlides(1);
        
        } else {
        
          //scroll up
          plusProjSlides(-1);
        }
        
      }
      
      //prevent page fom scrolling
      //return false;
    });
/*    
    // scroll mousewheel to change template slides
    // ====================================================
    $('#templates').on( 'DOMMouseScroll mousewheel', function ( event ) {
      
      var wrap = document.getElementById('temp-page-wrap');
      
      if(wrap.style.padding == "0px") {
        
        //prevent page fom scrolling
        return true;
        
        } else {
      
        if(event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) {
        
          //scroll down
          plusTempSlides(1);
        
        } else {
        
          //scroll up
          plusTempSlides(-1);
        }
        
      }
      
      //prevent page fom scrolling
      //return false;
    }); */
