---
layout: layouts/home.njk
title: Functions and Control Flow
templateClass: tmpl-post
eleventyNavigation:
  key: Functions & Control Flow
  order: 6
---

<div class="container mt-4">
  <h2>Basic JavaScript Tasks</h2>
  <p>Open console to view results.</p>
</div>
<script>
//function from task1
function outputMessage() {
  console.log("This is a message");
}
//function from task2
function fullNameGenerator(firstName, lastName) {
  var fullName = firstName + ' ' + lastName;
  console.log(fullName);
}
//function from task3
function fullNameGeneratorReturn(firstName, lastName) {
  return firstName + ' ' + lastName;
}
//function from task4
function wearACoat(temperature) {
  var strMessage = "You do not need to wear a coat";
  if (temperature < 10) {
    strMessage = "You need to wear a coat";
  }
  return strMessage;
}
//function from task5 and 6
function wearACoatExtra(temperature) {
  var strMessage = "";
  if (temperature < 0) {
    strMessage = "Don't go outside";
  } else if (temperature < 10) {
    strMessage = "You need a coat and hat";
  } else if (temperature < 15) {
     strMessage = "You need to wear a coat";
  }
  if (!strMessage) {
    strMessage = "You don't need to wear a coat";
  }
  return strMessage;
}
/*
* Task 1
*/
console.log("Task 1 Below");
console.log("--------------");
//Calls the outputMessage function
outputMessage();
console.log("--------------");
console.log("Task 1 Above");
/*
* Task 2
*/
console.log("Task 2 Below");
console.log("--------------");
var fName = "Abdi";
var lName = "Arr";
//calls the fullNameGenerator function using two global variables as arguments
fullNameGenerator(fName, lName);
console.log("--------------");
console.log("Task 2 Above");
console.log(fullName);
/*
* Task 3
*/
console.log("Task 3 Below");
console.log("--------------");
//calls the fullNameGeneratorReturn function using two global variables as arguments, console logs return value of function bond by global variable
var fullName = fullNameGeneratorReturn(fName, lName);
console.log(fullName);
console.log("--------------");
console.log("Task 3 Above");
/*
* Task 4
*/
console.log("Task 4 Below");
console.log("--------------");
//Calls function wearACoat and logs result
var temp1 = wearACoat(15);
var temp2 = wearACoat(9);
var temp3 = wearACoat(10);
console.log(temp1);
console.log(temp3);
console.log(temp2);
console.log("--------------");
console.log("Task 4 Above");
/*
* Task 5& 6
*/
console.log("Task 5 & 6 Below");
console.log("--------------");
//Calls function wearACoatExtra which is implemented using control statements with different constant values and logs result
console.log(wearACoatExtra(-4));
console.log(wearACoatExtra(9));
console.log(wearACoatExtra(14));
console.log(wearACoatExtra(18));
</script>
