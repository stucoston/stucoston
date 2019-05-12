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
