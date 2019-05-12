// navigation functions
// ========================================================
var win = window,
    doc = document,
    el = doc.documentElement,
    bod = doc.getElementsByTagName('body')[0],
    ww = win.innerWidth,
    wh = win.innerHeight,
    maxWidth = win.innerWidth || el.clientWidth || bod.clientWidth,
    maxHeight = win.innerHeight || el.clientHeight || bod.clientHeight;
    
var c = document.getElementById('nav-contact'),
    cCont = document.getElementById('nav-contact-cont'),
    cw = document.getElementById('con-nav-wrap'),
    o = document.getElementById('nav-opensource'),
    oCont = document.getElementById('nav-opensource-cont'),
    ow = document.getElementById('os-nav-wrap'),
    p = document.getElementById('nav-projects'),
    pCont = document.getElementById('nav-projects-cont'),
    pw = document.getElementById('proj-nav-wrap'),
    t = document.getElementById('nav-templates'),
    tCont = document.getElementById('nav-templates-cont'),
    tw = document.getElementById('temp-nav-wrap'),
    home = document.getElementById('home'),
    navLogo = document.getElementById('nav-logo');
    
function pageContact() {
  
  if(c.className.indexOf('nav-contact') >= 0) {
    c.className = c.className.replace(' nav-contact','');
    cCont.style.width = "85vw";
    cCont.onmouseleave = function(){cCont.style.width = "85vw"};
    home.style.top = wh + "px";
    stu.toggleShow(o);
    stu.toggleShow(t);
    stu.toggleShow(p);
    
    setTimeout(function(){
      setTimeout(function(){
        cCont.onmouseenter = function(){cCont.style.width = "85vw"};
        cCont.onmouseleave = function(){cCont.style.width = "110px"};
        cCont.style.width = "110px";
        contactPage();
        
        navLogo.style.transition = "0s";
        arrow.style.transition = "0s";
        navLogo.style.bottom = "auto";
        navLogo.style.right = "auto";
        navLogo.style.top = wh-60 + "px";
        navLogo.style.left = "-100px";
        arrow.style.bottom = "auto";
        arrow.style.top = wh-60 + "px";
        arrow.style.left = "auto";
        arrow.style.right = "-100px";
        arrow.style.transform = "rotate(180deg)";
        setTimeout(function(){
          navLogo.style.transition = "0.8s";
          arrow.style.transition = "0.8s";
          arrow.style.right = "0px";
          navLogo.style.left = "0px";
        }, 50);
        
      }, 1000);
    
      c.style.top = wh-60 + "px";
      
    }, 500);
    
  } else {
    c.className += ' nav-contact';
    cCont.style.width = "85vw";
    cCont.onmouseleave = function(){cCont.style.width = "85vw"};
    contactPage();
    navLogo.style.left = "-100px";
    arrow.style.right = "-100px";
    
    setTimeout(function(){
      setTimeout(function(){
        cCont.onmouseenter = function(){cCont.style.width = "85vw"};
        cCont.onmouseleave = function(){cCont.style.width = "110px"};
        cCont.style.width = "110px";
        stu.toggleShow(o);
        stu.toggleShow(t);
        stu.toggleShow(p);
      }, 1000);
    
      c.style.top = "-12px";
      setTimeout(function(){home.style.top = "0px";}, 500);
      
    }, 500);
    
  }; 
  
}
function pageOpensource() {
  if(o.className.indexOf('nav-opensource') >= 0) {
    o.className = o.className.replace(' nav-opensource','');
    oCont.style.width = "85vh";
    oCont.onmouseleave = function(){oCont.style.width = "85vh"};
    home.style.left = -ww + "px";
    stu.toggleShow(c);
    stu.toggleShow(t);
    stu.toggleShow(p);
    
    setTimeout(function(){
      setTimeout(function(){
        oCont.onmouseenter = function(){oCont.style.width = "85vh"};
        oCont.onmouseleave = function(){oCont.style.width = "250px"};
        oCont.style.width = "250px";
        opensourcePage();
        
        navLogo.style.transition = "0s";
        arrow.style.transition = "0s";
        navLogo.style.bottom = "auto";
        navLogo.style.left = "auto";
        navLogo.style.top = "-100px";
        navLogo.style.right = ww-60 + "px";
        arrow.style.transform = "rotate(-90deg)";
        arrow.style.top = "auto";
        arrow.style.bottom = "-100px";
        arrow.style.left = "auto";
        arrow.style.right = ww-64 + "px";
        setTimeout(function(){
          navLogo.style.transition = "0.8s";
          arrow.style.transition = "0.8s";
          arrow.style.bottom = "0px";
          navLogo.style.top = "0px";
        }, 50);
        
      }, 1000);
    
      o.style.right = ww-60 + "px";
      
    }, 500);
    
  } else {
    o.className += ' nav-opensource';
    oCont.style.width = "85vh";
    oCont.onmouseleave = function(){oCont.style.width = "85vh"};
    opensourcePage();
    arrow.style.bottom = "-100px";
    navLogo.style.top = "-100px";
    
    setTimeout(function(){
      setTimeout(function(){
        oCont.onmouseenter = function(){oCont.style.width = "85vh"};
        oCont.onmouseleave = function(){oCont.style.width = "250px"};
        oCont.style.width = "250px";
        stu.toggleShow(c);
        stu.toggleShow(t);
        stu.toggleShow(p);
      }, 1000);
    
      o.style.right = "-12px";
      setTimeout(function(){home.style.left = "0px";}, 500);
      
    }, 500);
    
  }; 
  
}
function pageProjects() {
  if(p.className.indexOf('nav-projects') >= 0) {
    p.className = p.className.replace(' nav-projects','');
    pCont.style.width = "85vw";
    pCont.onmouseleave = function(){pCont.style.width = "85vw"};
    home.style.top = -wh + "px";
    stu.toggleShow(c);
    stu.toggleShow(t);
    stu.toggleShow(o);
    
    setTimeout(function(){
      setTimeout(function(){
        pCont.onmouseenter = function(){pCont.style.width = "85vw"};
        pCont.onmouseleave = function(){pCont.style.width = "115px"};
        pCont.style.width = "115px";
        projectPage();
        
        navLogo.style.transition = "0s";
        arrow.style.transition = "0s";
        navLogo.style.bottom = "auto";
        navLogo.style.left = "auto";
        navLogo.style.top = "-14px";
        navLogo.style.right = "-100px";
        arrow.style.bottom = "auto";
        arrow.style.top = "-14px";
        arrow.style.right = "auto";
        arrow.style.left = "-100px";
        arrow.style.transform = "rotate(0deg)";
        setTimeout(function(){
          navLogo.style.transition = "0.8s";
          arrow.style.transition = "0.8s";
          arrow.style.left = "0px";
          navLogo.style.right = "0px";
        }, 50);
        
      }, 1000);
    
      p.style.bottom = wh-60 + "px";
      
    }, 500);
    
  } else {
    p.className += ' nav-projects';
    pCont.style.width = "85vw";
    pCont.onmouseleave = function(){pCont.style.width = "85vw"};
    projectPage();
    arrow.style.left = "-100px";
    navLogo.style.right = "-100px";
    
    setTimeout(function(){
      setTimeout(function(){
        pCont.onmouseenter = function(){pCont.style.width = "85vw"};
        pCont.onmouseleave = function(){pCont.style.width = "115px"};
        pCont.style.width = "115px";
        stu.toggleShow(c);
        stu.toggleShow(t);
        stu.toggleShow(o);
      }, 1000);
    
      p.style.bottom = "-12px";
      setTimeout(function(){home.style.top = "0px";}, 500);
      
    }, 500);
    
  }; 
  
}
function pageTemplates() {
  if(t.className.indexOf('nav-templates') >= 0) {
    t.className = t.className.replace(' nav-templates','');
    tCont.style.width = "85vh";
    tCont.onmouseleave = function(){tCont.style.width = "85vh"};
    home.style.left = ww + "px";
    stu.toggleShow(c);
    stu.toggleShow(o);
    stu.toggleShow(p);
    
    setTimeout(function(){
      setTimeout(function(){
        tCont.onmouseenter = function(){tCont.style.width = "85vh"};
        tCont.onmouseleave = function(){tCont.style.width = "140px"};
        tCont.style.width = "140px";
        templatesPage();
        
        navLogo.style.transition = "0s";
        arrow.style.transition = "0s";
        navLogo.style.top = "auto";
        navLogo.style.right = "auto";
        navLogo.style.bottom = "-100px";
        navLogo.style.left = ww-68 + "px";
        arrow.style.transform = "rotate(90deg)";
        arrow.style.bottom = "auto";
        arrow.style.top = "-100px";
        arrow.style.right = "auto";
        arrow.style.left = ww-64 + "px";
        setTimeout(function(){
          navLogo.style.transition = "0.8s";
          arrow.style.transition = "0.8s";
          arrow.style.top = "0px";
          navLogo.style.bottom = "0px";
        }, 50);
        
      }, 1000);
    
      t.style.left = ww-60 + "px";
      
    }, 500);
    
  } else {
    t.className += ' nav-templates';
    tCont.style.width = "85vh";
    tCont.onmouseleave = function(){tCont.style.width = "85vh"};
    templatesPage();
    arrow.style.top = "-100px";
    navLogo.style.bottom = "-100px";
    
    setTimeout(function(){
      setTimeout(function(){
        tCont.onmouseenter = function(){tCont.style.width = "85vh"};
        tCont.onmouseleave = function(){tCont.style.width = "140px"};
        tCont.style.width = "140px";
        stu.toggleShow(c);
        stu.toggleShow(o);
        stu.toggleShow(p);
      }, 1000);
    
      t.style.left = "-12px";
      setTimeout(function(){home.style.left = "0px";}, 500);
      
    }, 500);
    
  };
  
}
function contactPage() {
  if(document.getElementById('contact').className.indexOf('hide') >= 0) {
    document.getElementById('contact').className = document.getElementById('contact').className.replace('hide','');
    document.getElementById('con-page-wrap').className += ' animate-fromtop';
    
  } else {
    
    document.getElementById('con-page-wrap').className = document.getElementById('con-page-wrap').className.replace(' animate-fromtop',' animate-totop');
    
    setTimeout( function(){
      document.getElementById('contact').className += 'hide';
      document.getElementById('con-page-wrap').className = document.getElementById('con-page-wrap').className.replace(' animate-totop','');
      
    }, 2000);
    
  };
  
}
function opensourcePage() {
  if(document.getElementById('opensource').className.indexOf('hide') >= 0) {
    document.getElementById('opensource').className = document.getElementById('opensource').className.replace('hide','');
    document.getElementById('os-page-wrap').className += ' animate-fromright';
    
  } else {
    
    document.getElementById('os-page-wrap').className = document.getElementById('os-page-wrap').className.replace(' animate-fromright',' animate-toright');
    
    setTimeout( function(){
      document.getElementById('opensource').className += 'hide';
      document.getElementById('os-page-wrap').className = document.getElementById('os-page-wrap').className.replace(' animate-toright','');
      
    }, 2000);
    
  };
  
}
function projectPage() {
  if(document.getElementById('projects').className.indexOf('hide') >= 0) {
    document.getElementById('projects').className = document.getElementById('projects').className.replace('hide','');
    document.getElementById('proj-page-wrap').className += ' animate-frombottom';
    
  } else {
    
    document.getElementById('proj-page-wrap').className = document.getElementById('proj-page-wrap').className.replace(' animate-frombottom',' animate-tobottom');
    
    setTimeout( function(){
      document.getElementById('projects').className += 'hide';
      document.getElementById('proj-page-wrap').className = document.getElementById('proj-page-wrap').className.replace(' animate-tobottom','');
      
    }, 2000);
    
  };
  
}
function templatesPage() {
  if(document.getElementById('templates').className.indexOf('hide') >= 0) {
    document.getElementById('templates').className = document.getElementById('templates').className.replace('hide','');
    document.getElementById('temp-page-wrap').className += ' animate-fromleft';
    
  } else {
    
    document.getElementById('temp-page-wrap').className = document.getElementById('temp-page-wrap').className.replace(' animate-fromleft',' animate-toleft');
    
    setTimeout( function(){
      document.getElementById('templates').className += 'hide';
      document.getElementById('temp-page-wrap').className = document.getElementById('temp-page-wrap').className.replace(' animate-toleft','');
      
    }, 2000);
    
  };
  
}
// open project slides
// =====================================
function openProject() {
  var wrap = document.getElementById('proj-page-wrap'),
      sa = document.getElementById('slide-arrow'),
      sa2 = document.getElementById('slide-arrow2'),
      nav = document.getElementById('nav'),
      rp = document.getElementById('rp');
      
  wrap.style.transition = "0.5s";
  stu.togglePaddingProj(wrap);
  stu.toggleShow(sa);
  stu.toggleClass('#sa2','show','hide');
  stu.toggleShow(nav);
  stu.toggleShow(rp);
  stu.toggleClass('.proj-details','show','hide');
  stu.toggleClass('.page-content','open');
  setTimeout( function(){
    stu.toggleClass('#slide-navbar','show','hide');
  }, 400);
}

</script>







<script>
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
</script>
<!--<script>
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
</script>
<script>
	
  function isTouchSupported() {
		
    var msTouchEnabled = window.navigator.msMaxTouchPoints;
    var generalTouchEnabled = "ontouchstart" in document.createElement("div");
 
    if (msTouchEnabled || generalTouchEnabled) {
      return true;
			 
    }
		
    return false;
  }
	
	if(isTouchSupported()){
		 
	  document.getElementById('touch-proj-instruction').style.display = 'block';
    document.getElementById('mouse-proj-instruction').style.display = 'none'; 
    var x = document.getElementsByTagName("HR");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
	
	} else {
		
		document.getElementById('touch-proj-instruction').style.display = 'none';
    document.getElementById('mouse-proj-instruction').style.display = 'block';
    var x = document.getElementsByTagName("HR");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "block";
    }
		
	}
		 
    
</script>
  
