console.log('hello');

// alert('hello this is Harry');

// How to write a comnent inline

// Variables
var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);

//var name = prompt('What is your name?');

//document.getElementById('someText').innerHTML = name;

// Numbers in JavaScript
var num1 = 10;

// Increment num1 by 1
num1++;
console.log(num1);

// Decrement num1 by 1
num1--;
console.log(num1);

// Divide, multiply *, remainder %
console.log(num1 % 6);

// Increment/Decrement by any number you want
num1 += 10;
console.log(num1);

/* Functions
1. Create  async full
2. Call the function
*/

// Create
function fun() {
  alert('this is a function');
}

// Call
fun();

/* Let's create a function that take in a name and says hello followed by your name

For Example

Name: "Qazi"
Return: "Hello Qazi"
*/

function greeting(yourName) {
  var result = 'Hello' + ' ' + yourName;
  console.log(result);
}

// var name = prompt('What is your name?');
// greeting(name);

// How do arguments work in fumctions?
// How do we add 2 numbers together in a function?

function sumNumbers(num1, num2){
  var result = num1 + num2;
  console.log(num1 + num2);
}

sumNumbers(10, 10)

/* While loops

var num = 0;

while (num < 100) {
  num += 1;
  console.log(num);
}

*/

/* for loop 
// for (let num = 0; <= 100; num++) {
  console.log(num);
}

*/

// Data types
let yourAge = 18; // number
let yourName = 'Bob'; // string
let name = {first: 'Jane', last: 'Doe'}; // object
let truth = false; // boolean
let groceries = ['apple', 'banana', 'oranges']; // array
let random; // undefined
let nothing = null; // value null

// Strings in JavaScript (common methods)
let fruit = 'banana';
let moreFruits = 'banana/apple'; // new line

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit(2));
console.log(fruit.split(",")); // split by a comma
console.log(fruit.split('')); // split by characters
