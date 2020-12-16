// window.onload=function(){
//     // document.getElementById("para").innerHTML="<h1>through js this para </h1>";
   
// };
// window.onload=check1;
// function check1(){
//     var a = document.getElementById("para");
//     a.innerHTML="<h1>through js this para </h1>";
// }

// function check1(){
// document.getElementById("para").innerText="thrugh js";
// h.innerHTML="thrugh js";
// document.getElementById("para").style.color="green";
// document.getElementById("para").style.fontSize="50px";
// document.getElementsByTagName

// }
// document.write(eval(5+9));
function calculate() {
    var x = parseInt(document.getElementById("1st-num").value);
    var y = parseInt(document.getElementById("2nd-num").value);
    var o = document.getElementById("op").value;
    //var sum = x+y;
    if (o == "+") {
        document.getElementById("result").value= x+y ;
    }
    else if (o == "-") {
        document.getElementById("result").value= x-y ;
    }
    else if (o == "*") {
        document.getElementById("result").value= x*y ;
    }
    else if (o == "/") {
        document.getElementById("result").value= x/y ;
    }
    alert(x);
   
    
    
    
    
    
    
    
    }