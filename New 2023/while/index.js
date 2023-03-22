/*
  There is an unloading of user operations
  const operations = [1000,-700,300,-500,10000];
  as well as an initial balance of 100
  It is necessary to make calculation functions:
  - total balance
  - presence of negative balance (if after the next operation balance is < 0, then print false)
   - Calculation of average expense and average income
*/

"use strict";

const operations = [1000, -700, 300, -500, 10000];
const balance = 100;

const getAverageValue = arr => {

    let sum = 0;
    for (let value of arr){
        sum += value
    }

    return Math.round(sum / arr.length);
}


const getBalance = (operations, balance = 0) => {
    let fullBalance = balance;
    
    for ( let operation of operations ) {
        fullBalance += +operation;
    }

    return fullBalance
}

const isNegativeBalance = (operation, balance) => balance + operation ? true : false ;


const averageExpence = operations => {
    
    const negativeExpence = [];
    const positiveExpence = [];

    for (let operation of operations){
        operation < 0 ? negativeExpence.push(operation) : positiveExpence.push(operation);
    }

    // get Average of each type operations

    

    console.log(`
      Positive operation: ${getBalance(positiveExpence)}
      Negative operation: ${getBalance(negativeExpence)}

      Average Negative operation: ${getAverageValue(negativeExpence)}
      Average Positive operation: ${getAverageValue(positiveExpence)}
    `)
}

console.log(getBalance(operations,balance)); // get Balanc e
console.log(isNegativeBalance(-200, balance)); // Check func

averageExpence(operations); // get Summ of two Expence and get their average value