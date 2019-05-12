//enable touch events to change Project slides
      // ==================================================
      window.addEventListener('load', function(){
          var el = document.getElementById('proj-page-wrap')
          var hidetimer = null
          
          swipedetect(el, function(swipedir){
            if (swipedir != 'none'){
                  clearTimeout(hidetimer)
                  plusProjSlides(swipedir)
              }
          })
          
      }, false)
                              
          function swipedetect(el, callback){
            
            var touchsurface = el,
              swipedir,
              startX,
              startY,
              distX,
              distY,
              threshold = 60, //required min distance traveled to be considered swipe
              restraint = 30, // maximum distance allowed at the same time in perpendicular direction
              allowedTime = 700, // maximum time allowed to travel that distance
              elapsedTime,
              startTime,
              handleswipe = callback || function(swipedir){}
        
            touchsurface.addEventListener('touchstart', function(e){
              var touchobj = e.changedTouches[0]
              swipedir = 'none'
              dist = 0
              startX = touchobj.pageX
              startY = touchobj.pageY
              startTime = new Date().getTime() // record time when finger first makes contact with surface
             
	      if(touchsurface.style.padding != "0px") {
//                e.preventDefault() // prevent scrolling when inside DIV
              }
          }, false)
        
          touchsurface.addEventListener('touchmove', function(e){
            if (touchsurface.style.padding != "0px") {
//              e.preventDefault() // prevent scrolling when inside DIV
            }
          }, false)
        
          touchsurface.addEventListener('touchend', function(e){
              var touchobj = e.changedTouches[0]
              distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
              distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
              elapsedTime = new Date().getTime() - startTime // get time elapsed
              if (elapsedTime <= allowedTime){ // first condition for awipe met
                  if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                      swipedir = (distX < 0)? 1 : -1 // if dist traveled is negative, it indicates left swipe
                  }
                  else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                     if(touchsurface.style.padding != "0px" && distY < 0){ openProject() }// if dist traveled is negative, it indicates up swipe
                  }
              }
	      if (touchsurface.style.padding != "0px") {
                handleswipe(swipedir)
 //               e.preventDefault()
	      }
          }, false)
      	//continue to trigger click event from the target of any touch event at the document level
      	window.on('touchend', function(e){
      		$(e.target).trigger('click');
      	});
      
          }
