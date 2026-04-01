const user = {
    username: "anamur",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "anam"
// user.welcomeMessage()

// console.log(this);

// function sports(){
//     let username = "anamur"
//     console.log(this.username);
// }

// sports()

// const sports = function () {
//     let username = "anamur"
//     console.log(this.username);
// }

const sports =  () => {
    let username = "anamur"
    console.log(this);
}


// sports()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "anamur"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()