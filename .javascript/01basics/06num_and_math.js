const score = 400
console.log(score);

const balance = new Number(100) // object
console.log(balance);

console.log(balance.toString().length);//Converts that number into a String. (e.g., 100 becomes "100").
console.log(balance.toFixed(2)); //how many digits should appear after the decimal point.

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); //// Output: "123.9" 
// (It takes 1, 2, 3, and rounds the 8 up to 9 to make 4 digits total)
//input 1123.8966 and precision will 3
// Output: "1.12e+3" 
// (Because it can't show 1123 with only 3 digits without scientific notation)

const hundreds = 1000000
console.log(hundreds.toLocaleString);
//make large numbers readable by adding commas based on specific regional standards (locales) us usually.
//const hundreds = 1000000;

// Formatting for Bangladesh (Bengali)
//console.log(hundreds.toLocaleString('bn-BD')); 
// Output: ১০,০০,০০০ (Outputs in Bengali numerals)

// Formatting for Bangladesh (English numbers, but BD comma style)
//console.log(hundreds.toLocaleString('en-BD')); 
// Output: 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));//absoulte value
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));//top value
console.log(Math.floor(4.9));//lower value
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());//0 to 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

// The formula to get a random integer between min and max (inclusive)
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

/* WHY THIS WORKS:
  1. Math.random()       -> Gets a random decimal (0 to 0.9).
  2. (max - min + 1)     -> Defines the 'gap' or total count of numbers (11).
  3. Math.floor          -> Rounds down to the nearest whole number.
  4. + min               -> Shifts the starting point from 0 to your 'min' value.
*/