const name = "anamur"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('anamur-rashid-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)// not accept neg value
console.log(newString);

const anotherString = gameName.slice(-8, 4)//accept neg value 
console.log(anotherString);

const newStringOne = "   anam    "
console.log(newStringOne);
console.log(newStringOne.trim());// start and end space delet

const url = "https://anam.com/anamur%20rashid"

console.log(url.replace('%20', '-'))

console.log(url.includes('galib')) // i can check this word include or not

console.log(gameName.split('-'));//seperator 