const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
//Spread Operator (...)
// It "spreads" the elements out. It's preferred because you can add more items easily.

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//// .flat() removes nesting. 'Infinity' tells it to go through every single level deep.
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("anam"))
console.log(Array.from("anam"))//// .flat() removes nesting. 'Infinity' tells it to go through every single level deep.
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300
//// .of: Takes a set of elements and turns them into a new array.
console.log(Array.of(score1, score2, score3));