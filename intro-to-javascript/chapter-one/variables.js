// Lesson One!
// Vairable Declaration
// Console Logs --> Output a message to the terminal
// Basic Math Operators

console.log('Hello, World!')

// Types of Variable Declarations
// const --> not changable
// let --> changable

// Variable Types
// string --> 'Hello, World'
// num --> 5 (number)
// boolean --> true/false
// Arrays
// Objects

// Printing a Variable
const helloWorld = 'Hello, World!'
console.log(helloWorld)

// Math Operators
console.log(2 + 2)
console.log(2 - 2)
console.log(2 * 2)
console.log(2 / 2)

// The % operator will only return a 0 (even) or a 1 (odd)
console.log(4 % 2) // --> Returns 0 (even)
console.log(5 % 2) // --> Returns 1 (odd)

// Math with Variables
const seven = 7
const five = 5
const two = 2

console.log(seven + five)
console.log(`The answer to 5 + 7 is ${five + seven}`)

// Arrays --> Has Indexes That Start At 0
const animals = ["Dog", "Cat", "Horse", "Dolphin", "Pig"]
console.log(animals[0])
console.log(animals[2])

const doubleArray = [
  [1, 2, 3],
  [10, 20, 30]
]

console.log(doubleArray[0][0]) // --> Returns 1
console.log(doubleArray[1][0]) // --> Returns 10
console.log(doubleArray) // --> Returns All Arrays

// Object --> Have Key/Value Pairs
const user = {
  username: 'BDEman',
  password: 'password',
  firstname: 'Dylan',
  lastname: "Drechsel",
  age: 29,
  married: false
}

console.log(`The users name is ${user.username}`)

const crazyObject = {
  id: 547,
  car: ["honda", "toyota", "ford"],
  name: "Crazy Object",
  address: "123 fake street",
  anotherObject: {
    isItReal: true,
    message: "Hello from another object"
  }
}

console.log(crazyObject.car[1])
console.log(crazyObject.anotherObject.message)