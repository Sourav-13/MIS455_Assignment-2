function process(){
  var person = document.getElementById("nameBox").value ; 
  var check = parseInt(document.getElementById("checkBox").value) ; 
  
  if (check > 5 ) {
  
    document.getElementById("content").innerHTML= `
    
    <h4>Wow ${person},  Hope you continue to be a swiftie:)</h4>`;
  }
  else {
  
     document.getElementById("content").innerHTML= `
    <h4> A Little Advice for you, ${person}. “Players Gonna Play.” - Taylor Swift </h4>`;
  }

}


