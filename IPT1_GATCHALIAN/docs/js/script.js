function typeWriter(elementId, text, speed) {
    let i = 0;
    let element = document.getElementById(elementId);
    function typing() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i); 
        i++;
        setTimeout(typing, speed); 
      }
    }
    typing(); 
  }

  
  window.onload = function() {
    const headingText = "Interest"; 
    typeWriter("aboutHeading", headingText, 100);  
  };