function calculator(number1, number2, operator) {
  let blnvalidation = true;
  let sum = 0;
  let strMessage = "";
  if (isNaN(number1)) {
    blnvalidation = false;
    strMessage = "first argument must be a number";
  }

  if (isNaN(number2)) {
    blnvalidation = false;
    if (strMessage) {
      strMessage += ", ";
    }
    strMessage += "second argument must be a number";
  }

  switch (operator) {
    case "+":
    case "-":
    case "/":
    case "*":
    case "%":
      //do nothing
      break;
    default:
      blnvalidation = false;
      if (strMessage) {
        strMessage += ", ";
      }
      strMessage += "You must use a valid operator";
      break;
  }

  if (blnvalidation) {
    switch (operator) {
      case "+":
        sum = number1 + number2;
        break;
      case "-":
        sum = number1 - number2;
        break;
      case "/":
        sum = number1 / number2;
        break;
      case "*":
        sum = number1 * number2;
        break;
      case "%":
        sum = number1 % number2;
        break;
    }
    strMessage = number1 + " " + operator + " " + number2 + " = " + sum;
  }
  return strMessage;
}

console.log(calculator("abdi", "lop", "abdi"));
console.log(calculator(100, 10, "+"));
console.log(calculator(100, 10, "-"));
console.log(calculator(100, 10, "*"));
console.log(calculator(100, 10, "/"));
console.log(calculator(100, 10, "%"));
