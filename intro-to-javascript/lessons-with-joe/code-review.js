const arr1 = [13, 43, 55, 67, 43]
const arr2 = [5, 56, 23, 74, 12, 64]

// We want to return the sums of the arrays
// Declare function --> addArrays
// Function should take Arrays an an arguement --> Static vs Dynamic
// -- Test --> console.log the arguments --> Passed
// Variable to hold to answer
// Iterate throug the arrays --> forEach can only be used on Arrays
// -- Test --> iterate and console.log the numbers from the arrays
// Add the numbers from the array to variable "sum"
// Return sum

const addArrays = (a1, a2) => {
    let sum = 0;

    a1.forEach(num => {
        // sum = sum + num
        sum += num
    })

    a2.forEach(num => {
        sum += num
    })

    console.log(sum)
}

addArrays(arr1, arr2) // --> arr1 = a1 && arr2 = a2