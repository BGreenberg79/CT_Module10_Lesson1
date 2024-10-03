// Task 1 Declare variables to store two numeric values for arithmetic operations
let number1;
let number2;
// Defined variables number1 and number2 to later be assigned values 

// Task 2 assign numeric values to variables declared in task 1

number1 = 3;
number2 = 21;

// Task 3 Perform arithemtic operations on the variables
console.log("Sum: ", number1+number2);
console.log("Difference: ", number2-number1);
console.log("Product: ", number1*number2);
console.log("Quotient: ", number2/number1);

// Task 4 explore assignment operators
console.log("new number1: ", number1+= 5);
console.log("new number2: ", number2-= 1);
console.log("new number1: ", number1*= 3);
console.log("new number2: ", number2/= 5);

// Task 5 explore comparison operators
console.log("Is number1 strictly equal to number2: ", number1 === number2); //compares type and value
console.log("Is number2 greater than or equal to number1: ", number2 >= number1); //only compare value
console.log("Is number1 strictly not equal to the string '24': ", number1!== "24"); //comparing type and value

// Task 6 Apply logical operators to combine conditions and display results
let isPositive = (number1 > 0 && number2 > 0);
console.log("Are both number1 and number2 positive?", isPositive); //true result
let isEven = (number1 % 2 == 0 || number2 % 2 == 0);
console.log("Is at least one of number1 or number2 even?", isEven); //true result
let isNotSameNumber = !(number1 == number2);
console.log("Is it true that number1 and number 2 are not the same number?", isNotSameNumber); //true result