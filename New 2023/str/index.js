// Проверить явялется ли это номером телефона России

// Верные
const num1 = "89167153344"
const num2 = "+79167153344"
const num3 = " +7(916)7153344"
const num4 = "+7(916) 715-33-44 "

// Неверные
const num1Error = "8916153";
const num2Error = "89d167153344";
const num3Error = "8+9167153";
const num4Error = "891g67153";
const num5Error = "asd891g67153";

"use strict"

const isPhoneNumber = number => {
    number = number.trim();

    // check number lenght
    if (number.length < 11){
        return false
    }

    // Check is it Ru number
    if ( !number.startsWith("+7") && !number.startsWith("89") ){
        return false;
    } 

    // Check Allowed symbols
    const allowedSymbols = ["+", "(", ")", "-"];
    for (let symbol of number){
        if ( !allowedSymbols.includes(symbol) && isNaN(symbol) ){
            return false;
        }
    }
    
    return true;
}

console.log(isPhoneNumber( num1 ))
console.log(isPhoneNumber( num2 ))
console.log(isPhoneNumber( num3 ))
console.log(isPhoneNumber( num4 ))

console.log(isPhoneNumber( num1Error ))
console.log(isPhoneNumber( num2Error ))
console.log(isPhoneNumber( num3Error ))
console.log(isPhoneNumber( num4Error ))
console.log(isPhoneNumber( num5Error ))