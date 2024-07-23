//Activity 1: Arithmetic Operations

let firstNum=10;
let secondNum=7; 
//• Task 1: Write a program to add two numbers and log the result to the console.
 let sum=firstNum+secondNum;
 console.log(sum);
//• Task 2: Write a program to subtract two numbers and log the result to the console.
 let subtract=firstNum-secondNum;
 console.log(subtract);
//• Task 3: Write a program to multiply two numbers and log the result to the console.

 let multiply=firstNum*secondNum;
 console.log(multiply);
//• Task 4: Write a program to divide two numbers and log the result to the console.

 let divide=firstNum/secondNum;
 console.log(divide);
//• Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

 let remainder=firstNum%secondNum;
 console.log(remainder);

 //Activity 2: Assignment Operators
//• Task 6: Use the += operator to add a number to a variable and log the result to the console.
  let increment=1;
  increment+=1;
  console.log(increment);
//• Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
  let decrement=2;
  decrement-=1;
  console.log(decrement);

//Activity 3: Comparison Operators
 let value1=10;
 let value2=15;
//• Task 8: Write a program to compare two numbers using > and < and log the result to the console.

 console.log(value1>value2);
 console.log(value1<value2); 
//• Task 9: Write a program to compare two numbers using > and <= and log the result to the console.

 console.log(value1>value2);
 console.log(value1<=value2); 
//• Task 10: Write a program to compare two numbers using == and === and log the result to the console.
 let numbers=10;
 let str="10";
 console.log(numbers==str);
 console.log(numbers===str);

//Activity 4: Logical Operators
//• Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console. 
let condition1=10;
let condition2=10;
console.log(condition1 && (condition1+condition2==20));
//• Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console. 
let positive = 8;
let compareValue = 10;
console.log(positive > 0 || compareValue < 10);
//• Task 13: Write a program that uses the ! operator to combine two conditions and log the result to the console. 
let even=4;
console.log(even%2==0);

//Activity 5: Ternary Operator
//• Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let num = 17;
let res = num >= 1000 ? "Positive Number" : "Negative Number";
console.log(res); 