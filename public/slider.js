
if(document.readyState){
for(i=1;i<=3;i++){
CENmbr=(document.getElementById("slider").childElementCount)/2;
document.getElementById("s1").addEventListener("click", function(){document.getElementsByClassName("radios").checked=false;document.getElementById("s1").checked=true});
document.getElementById("s2").addEventListener("click", function(){document.getElementsByClassName("radios").checked=false;document.getElementById("s2").checked=true});
document.getElementById("s3").addEventListener("click", function(){document.getElementsByClassName("radios").checked=false;document.getElementById("s3").checked=true});
document.getElementById("s4").addEventListener("click", function(){document.getElementsByClassName("radios").checked=false;document.getElementById("s4").checked=true});
document.getElementById("s5").addEventListener("click", function(){document.getElementsByClassName("radios").checked=false;document.getElementById("s5").checked=true});

function slide() { 
  if(document.getElementById("s3").checked==true){
    document.getElementById("s4").click();
    document.getElementById("slide4").click();
  }
  else if (document.getElementById("s4").checked==true){
    document.getElementById("s5").click();
    document.getElementById("slide5").click();

  }
  else if (document.getElementById("s5").checked==true){
    document.getElementById("s1").click();
    document.getElementById("slide1").click();

  }        

  else if (document.getElementById("s1").checked==true){
    document.getElementById("s2").click();
    document.getElementById("slide2").click();

  }
  else if (document.getElementById("s2").checked==true){
    document.getElementById("s3").click();
    document.getElementById("slide3").click();

  }
}
document.getElementById("s3").click();
var intervalId = window.setInterval(function(){
  slide()
}, 4000);
}
}
 function next(){
  document.getElementById("RA").click(); }
 

var Homeslide = window.setInterval(function(){
  next()
}, 5000);
