// This property make sures that the absolute value of two numbers must lie in safe integer range

// Example 01
let a = 10;
let b = 20;
let c = Math.abs(a-b);
console.log(c < Number.EPSILON); // Outut is False

// Number.EPSILON is a predefined  number whose approx value is 2.22e-16

// Math.abs() is a math function, it is used to calculate the absolute value of the difference of two numbers


// Number.MAX_VALUE defines the value of maximum(largest) positive number in JavaScript

// The value of Number.MAX_VALUE is 1.798e+308

// If a number is greater than the Number.MAX_VALUE, then the output is infinity

// Example 01

let a = Number.MAX_VALUE;
let b = 2.798e+308;
console.log( b == a); // false
console.log( b > a); // true
console.log( b < a); // false
console.log(typeof a); // Output is number
console.log(b) // Output is Infinity


// Number.MIN_VALUE defines the value of minimum(smallest) positive number in JavaScript

// The value of Number.MIN_VALUE is 5e-324

// We can say it's value is almost zero but not equal to zero

// If a number is greater than the Number.MAX_VALUE, then the output is infinity

// Example 01

let a = Number.MIN_VALUE;
console.log( 0 == a); // false
console.log( 0 > a); // false
console.log( 0 < a); // true
console.log(typeof a); // Output is number