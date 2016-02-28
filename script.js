// Create an HTML file that has two input fields 
//to accept the two numbers to perform operations on.
// Create 4 buttons to perform each of the basic 
//mathematical functions (add, subtract, multiply, 
//divide).
// Copy the code below and implement a basic calculator.
// When the user performs one of the operations, 
//output the result to another DOM element of your choice.
 var userInput1 = document.getElementById("input-field1").value;
 var userInput2 = document.getElementById("input-field2").value;
 var resultArea = document.getElementById("answer-appear").value;
/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function mutiplying(num1, num2) {
  var answer = num1*num2;
  return answer;
}
/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function adding(num1, num2) {
  var answer = num1+num2
  return answer;
}
/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtracting(num1, num2) {
  var answer = num1-num2;
  return answer;
}
/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function dividing(num1, num2) {
  var answer = num1/num2;
  return answer;
}
/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
function operation(num1, num2, dividing) {
  var answer = dividing(num1,num2);
  return answer;
}
resultArea = answer-appear.innerHTML;
// In your JavaScript, put an event listener on 
//each of the buttons.
document.getElementById("add").addEventListener("click", adding(input-field1, input-field2));
document.getElementById("subtract").addEventListener("click", subtracting(input-field1, input-field2));
document.getElementById("multiply").addEventListener("click", multiplying(input-field1, input-field2));
document.getElementById("divide").addEventListener("click", dividing(input-field1, input-field2));
