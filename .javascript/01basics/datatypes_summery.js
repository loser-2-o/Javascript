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
//********************************************************************
let myYoutubename = "anamurrashid.com";

let anothername = myYoutubename; // A COPY of the value is created
anothername = "looser";    // Only the copy is changed

console.log(myYoutubename); 
console.log(anothername);    
let userOne = {
    email: "user@google.com", //object use

}

let userTwo = userOne; // Both variables now point to the SAME object in memory

userTwo.email = "anam@google.com"; // Changing one affects the other

console.log(userOne.email); //object chnage old also change
console.log(userTwo.email); 