var x = 0;
var array = Array();

function addedNumber()
{
 array[x] = document.getElementById("text1").value;
 alert("You added value " + array[x] + " in to arrayIndex " + x);
 x++;
 document.getElementById("text1").value = "";
}



function maximum() {
 var a = document.getElementById("max").innerHTML = Math.max(...array);
   alert("Maximum value is " + a);
}

function minimum() {
 var b = document.getElementById("min").innerHTML = Math.min(...array);
   alert("Minimum value is " + b);
}

function average(){
	var total=0;
    for(var i=0;i<array.length;i++) { 
        total += parseInt(array[i]);
        var c = total/array.length;

    }
    	 document.getElementById("avg").innerHTML=c;
		alert("Average value is " + c);
	}
	
function range(){
	var a=Math.max(...array);
	var b=Math.min(...array);
	var sum = a+b;
	var range = sum / 2;
 	document.getElementById("range").innerHTML=range;
	alert("range is " + range);
}

function coefficient()
{
 var a = document.getElementById("text1").value;
 var b = document.getElementById("text2").value;
 
 var coefficient = 1;
 for( var i = (a-b)+1;i<=a;i++)
 	coefficient=coefficient*i;
 for(i=1;i<=b;i++)
 	coefficient=coefficient/i;
 document.getElementById("cof").innerHTML=coefficient;
 document.getElementById("text1").value = "";
 document.getElementById("text2").value = "";
alert("The coefficient of "+a+" and "+b+" is " + coefficient);
}
