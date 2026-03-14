// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice
// --- STEP A: Original State ---
console.log("A ", myArr); 
// Output: [0, 1, 2, 3, 4, 5]


// --- STEP B: The slice method ---
// .slice(start, end)
// 1. It starts from index 1 and goes up to (but does NOT include) index 3.
// 2. Crucially, it does NOT change the original array.
const myn1 = myArr.slice(1, 3);

console.log(myn1);       // Output: [1, 2] (Elements at index 1 and 2)
console.log("B ", myArr); // Output: [0, 1, 2, 3, 4, 5] (Original array is untouched)


// --- STEP C: The splice method ---
// .splice(start, count)
// 1. It starts from index 1 and takes '3' elements out.
// 2. Crucially, it MUTATES (changes) the original array by removing those items.
const myn2 = myArr.splice(1, 3);

console.log("C ", myArr); // Output: [0, 4, 5] (The elements [1, 2, 3] were cut out!)
console.log(myn2);       // Output: [1, 2, 3] (The elements that were removed)