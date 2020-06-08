// function myFunction() {
//   document.getElementById("demo").innerHTML = Math.ceil(3.6);
// }

// function myFunction() {
//   document.getElementById("demo").innerHTML = Math.floor(3.4);
// }

function myFunction(str)
{
 var w = document.getElementById("demo").innerHTML = Math.floor((0.6)*5);
 var x = document.getElementById("demo1").innerHTML = Math.ceil((2.7)*5);
  var y = document.getElementById("demo2").innerHTML = Math.floor(Math.random()*10000)+1;
  
//  var w = document.getElementById(".demo");    
// w.value = parseInt(w.value) + parseInt(tot);
  
// var x = document.getElementById(".demo1");    
// x.value = parseInt(x.value) + parseInt(tot);  
  
// var y = document.getElementById(".demo2");    
// y.value = parseInt(y.value) + parseInt(tot);  
 
  var z = w+x+y;
 document.querySelector(".numbery").innerHTML = + z;
}