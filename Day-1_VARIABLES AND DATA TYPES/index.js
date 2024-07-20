//DAY 1: VARIABLES AND DATA TYPES

//Activity 1: Variable Declaration
//• Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var a=10;
console.log(a);

//• Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let fruit="Apple";
console.log(fruit);

//Activity 2: Constant Declaration
//• Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const b=false;
console.log(b);

//Activity 3: Data Types
//• Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator. Activity 4: Reassigning Variables
var num=1;
console.log(typeof num);

var str="two";
console.log(typeof str);

const bool=true;
console.log(typeof bool);

let person={
    name:"Aziza",
    age:24
}
console.log(typeof person);

let arr=[7,17,77,"20"];
console.log(typeof arr); 

//• Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let num1=10;
num1=17;   
console.log(num1);
//Activity 5: Understanding const

//• Task 6: Try reassigning a variable declared with const and observe the error.
const text=" I'm good today ";
text=" I'm not good today ";
console.log(text);