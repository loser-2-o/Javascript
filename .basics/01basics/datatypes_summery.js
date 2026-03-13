//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 34565434n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shakib", "srk", "anam"];
let myObj = {
    name: "anam",
    age: 22,
}

const myFunction = function(){
    console.log("Hello");
}

console.log(typeof anotherId);