document.getElementById("generate").onclick = function () {
   let digit = document.getElementById("digit").value;
   digit = Number(digit);
   
   random = Math.random();
   
   if (digit == 1) {
       let result;
       result = random * 10;
       result = Math.floor(result); document.getElementById("getDigit").innerHTML = result;
       
   }
   
   else if (digit == 2){
       let result;
       result = random * 100;
       result = Math.floor(result); document.getElementById("getDigit").innerHTML = result;
   } 
   
   else if (digit == 3){
       let result;
       result = random * 1000;
       result = Math.floor(result); document.getElementById("getDigit").iinnerHTML = result;
   } 

    else if (digit == 4){
       let result;
       result = random * 10000;
       result = Math.floor(result); document.getElementById("getDigit").innerHTML = result;
   }     
   
   else if (digit == 5){
       let result;
       result = random * 10000;
       result = Math.floor(result); document.getElementById("getDigit").innerHTML = result;
   } 

    else if (digit == 6){
       let result;
       result = random * 1000000;
       result = Math.floor(result); document.getElementById("getDigit").innerHTML = result;
   } 

    else if (digit == 7){
       let result;
       result = random * 10000000;
       result = Math.floor(result); document.getElementById("getDigit").innerHTML = result;
   } 
   
   else if (digit == 8){
       let result;
       result = random * 100000000;
       result = Math.floor(result); document.getElementById("getDigit").innerHTML = result;
   } 

    else if (digit == 9){
       let result;
       result = random * 1000000000;
       result = Math.floor(result); document.getElementById("getDigit").innerHTML = result;
   } 

    else if (digit == 10){
       let result;
       result = random * 10000000000;
       result = Math.floor(result); document.getElementById("getDigit").innerHTML = result;
   } 

    else if (digit == 11){
       let result;
       result = random * 100000000000;
       result = Math.floor(result); document.getElementById("getDigit").innerHTML = result;
   } 
   
   else if (digit == 12){
       let result;
       result = random * 1000000000000;
       result = Math.floor(result); document.getElementById("getDigit").innerHTML = result;
   } 
   
   else if (digit == 13){
       let result;
       result = random * 10000000000000;
       result = Math.floor(result); document.getElementById("getDigit").innerHTML = result;
   }
   
    else if (digit == 14){
       let result;
       result = random * 100000000000000;
       result = Math.floor(result); document.getElementById("getDigit").innerHTML = result;
   } 
   
   else if (digit == 15){
       let result;
       result = random * 1000000000000000;
       result = Math.floor(result); document.getElementById("getDigit").innerHTML = result;
   } 
   
   else if (digit == 16){
       let result;
       result = random * 100000000000000000;
       result = Math.floor(result); document.getElementById("getDigit").innerHTML = result;
   } 
   
   else {
       document.getElementById("getDigit").innerHTML = "You can't print more than 16 digit";
   }
}
