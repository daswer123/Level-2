/*
    Rewrite the function using the arrow function syntax
*/

"use strict"

// regular function 
function power(num) {
    return function (pow) {
        return num ** pow
    }
}

// arrow function 
const powerArrow = num => pow => num ** pow

console.log(powerArrow(2)(3)) // 8