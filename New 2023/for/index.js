// The task is to output the string "I love JS !"
// from the array to the console, looping backward without using the reverse method.
// const arr = [!", "JS", "love", "I"];

"use strict";

const arr = ["!", "JS", "love", "I"];
let str = "";

for (let i = arr.length - 1; i >= 0; i--){
    str+= arr[i] + " ";
}

console.log(str)