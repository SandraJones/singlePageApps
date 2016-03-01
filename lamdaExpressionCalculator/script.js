// Create an HTML file that has two input fields 
//to accept the two numbers to perform operations on.
// Create 4 buttons to perform each of the basic 
//mathematical functions (add, subtract, multiply, 
//divide).
// Copy the code below and implement a basic calculator.
// When the user performs one of the operations, 
//output the result to another DOM element of your choice.
 var userInput1 = document.getElementById("input-field1");
 var userInput2 = document.getElementById("input-field2");
 var resultArea = document.getElementById("answer-appear");
   console.log(userInput1, userInput2);

  function eraser() {
  userInput1.value = "";
  userInput2.value = "";
}
 var getValues = function getValues() {
   var numberInput1 = userInput1.value;
   var numberInput2 = userInput2.value;
   checkInput(numberInput1, numberInput2);
 }
 var checkInput = function checkInput(numberInput1, numberInput2) {
   if(!numberInput1 || !numberInput2) {
     alert("All fields must be filled out."); 
     console.log("check input is running");
   } else {
  // here I need to say if the listener was the add listener 
  //then do the add function, etc.
     (numberInput1, numberInput2);
   console.log("check input is running");
   }
  }
/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
 var mul = function mutiplying(num1, num2) {
   var answer = num1*num2;
   return answer;
 }
/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
 var ad = function adding(num1, num2) {
   var answer = num1+num2
   return answer;
 }
/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
 var sub = function subtracting(num1, num2) {
   var answer = num1-num2;
   return answer;
 }
/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
 var div = function dividing(num1, num2) {
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
 var twoOper = function operation(num1, num2, dividing) {
   var answer = dividing(num1,num2);
   return answer;
 }
 resultArea = resultArea.innerHTML;
 eraser();
// In your JavaScript, put an event listener on 
//each of the buttons.
 document.getElementById("add").addEventListener("click", ad(userInput1, userInput2));
 document.getElementById("subtract").addEventListener("click", sub(userInput1, userInput2));
 document.getElementById("multiply").addEventListener("click", mul(userInput1, userInput2));
 document.getElementById("divide").addEventListener("click", div(userInput1, userInput2));




// var character = document.getElementById("character");
// var height = document.getElementById("height");
// var button = document.getElementById("btn");

// function eraser() {
//   height.value = "";
//   character.value = "";
// }
// //capturing the input
// function getValues() {
//   var x = character.value;//character element
//   var y = height.value;
//   checkInput(x, y);
// }
// function checkInput(x, y) {
//   tree();
//   if(!x || !y) {
//     alert("All fields must be filled out."); 
//     console.log("check input is running");
//   } else {
//     buildObj(x, y);
//     console.log("check input is running");
//   }
// }


// //function to console log user input
// function tree() {
//   console.log(character);
//   console.log(height);
//   console.log(btn);
// } 
// //this is where we console log the spaces and characters
// function growTree(Obj) {    
//     var h = Obj.height;
//     var c = Obj.character;
//     for (var i=0; i<h; i++) {
//         var spaces  = h-1-i;
//         var numChar = (2 * i) + 1;
//         console.log(" ".repeat(spaces) + c.repeat(numChar));
//     }
//     eraser();   
//   }
// //building an object with two key value pairs
// function buildObj(x, y) {
//     var treeObj= {
//     character: x,
//     height: y
//     }
//     growTree(treeObj);
//   }  
// //checking the input by user     
// function checkInput(x, y) {
//   tree();
//   if(!x || !y) {
//     alert("All fields must be filled out."); 
//     console.log("check input is running");
//   } else {
//     buildObj(x, y);
//     console.log("check input is running");
//   }
// }
// //event listeners that capture a button press,
// //and the up movement of the enter key when in
// //the height or character field 

          
// button.addEventListener("click", getValues);



// character.addEventListener("keyup", function (event) {
//   if (event.keyCode === 13) {
//     getValues();
//   }
// });

// height.addEventListener("keyup", function (event) {
//   if (event.keyCode === 13) {
//     getValues();
//   }
// });

