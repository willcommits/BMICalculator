 function calculate(){
   const height=parseFloat(document.getElementById("height").value);
   const weight=parseFloat(document.getElementById("weight").value);
  // alert(height*weight);
  var total=(weight/height/height)*10000;
    document.getElementById("answer").innerHTML= "Your BMI is "+total;
}