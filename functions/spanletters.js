( function( $ ) {
    /*
     * span-letters.js
     * 
     * Example usage: jQuery('.selector').spanLetters();
     */
     
    $.fn.spanLetters = function() {
        // Loop through each element on which this function has been called
        this.each( function() {   
            
            // Scope the variables
            var words, i, text;
          
            // Make an array with each letter of the string as a value
            words = $( this ).text().split( '' );
            // Loop through the letters and wrap each one in a span
            for ( i = 0; i in words; i++ ) {
                words[i] = '<span class="sl' + ( i + 1 ) + ' span-letter">' + words[i] + '</span>'
            };
            // Join our array of span-wrapped letters back into a string
            text = words.join( '' );
            // Replace the original string with the new string
            $( this ).html( text );
        })
    }
}( jQuery ));
// Span nav-item Letters
$( ".flex-container" ).spanLetters();
// Span item-title Letters
$( ".item-title" ).spanLetters();
// Call spanLetters on our target
$( ".me1" ).spanLetters();
targetMe1 = $( ".me1 span" ); // Select our spans
$( ".me2" ).spanLetters();
targetMe2 = $( ".me2 span" ); // Select our spans
$( ".me3" ).spanLetters();
targetMe3 = $( ".me3 span" ); // Select our spans
$( ".me4" ).spanLetters();
targetMe4 = $( ".me4 span" ); // Select our spans
duration = 5000; // Set duration of the effect here
speed = 40; // Set animation speed through the letters here
// Add the animation class to the letter, then remove it later
function animateLetter( value ) {
  if ( turnedOn ) {
    
    setTimeout( function() {
      $( value ).addClass( "active" );
    }, 0 );
    setTimeout( function() {
      stopAnimateLetter( value );  
    }, duration );
      
  }
  
};
// Remove the animation class from the letter
function stopAnimateLetter( value ) {
  $( value ).removeClass( "active" );
};
// Trigger function
function startEverything() {
  
  // Loop through our collection of spans
  targetMe1.each( function( index, value ) {
    // Sequentially delay the firing of the animation through the letters
    timer = setTimeout( function() {
      animateLetter( value );
    }, speed*index );
  }); 
  
  // Loop through our collection of spans
  targetMe2.each( function( index, value ) {
    // Sequentially delay the firing of the animation through the letters
    timer = setTimeout( function() {
      animateLetter( value );
    }, speed*index );
  });
  
  // Loop through our collection of spans
  targetMe3.each( function( index, value ) {
    // Sequentially delay the firing of the animation through the letters
    timer = setTimeout( function() {
      animateLetter( value );
    }, speed*index );
  });
  
  // Loop through our collection of spans
  targetMe4.each( function( index, value ) {
    // Sequentially delay the firing of the animation through the letters
    timer = setTimeout( function() {
      animateLetter( value );
    }, speed*index );
  });
      
}
// growing-things slide show
// =======================================================
var gtIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("slide-text");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      setTimeout(animateMe, 500);
    }
    gtIndex++;
    if (gtIndex > x.length) {gtIndex = 1} 
    x[gtIndex-1].style.display = "inline-block";
    setTimeout(carousel, 7000); // Change image every 6 seconds
};
   
function animateMe() { 
        
  turnedOn = true;
  startEverything();
        
};
