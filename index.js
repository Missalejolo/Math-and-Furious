console.log("Esto es una prueba");
//Variables
var number1=Math.random()*10;
number1=Math.floor(number1);

var number2=Math.random()*10;
number2=Math.floor(number2);

var correctAnswer= number1+number2;
var answersLength=document.querySelectorAll(".number").length;
console.log(answersLength);

//for (i=0; i<answer)

//Setting each button for random number
document.querySelectorAll(".number")[0].textContent = number1;
document.querySelectorAll(".number")[1].textContent = number2;
document.querySelectorAll("#correctAnswer")[0].textContent = correctAnswer;