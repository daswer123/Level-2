/*
Методом prompt получите ответ пользователя на вопрос "Сколько будет 7 + или - 15?".
Если ответ верен а если он введёт "Я не робот", то тоже "Успех".
выведите в консоле "Успех", если нет - "Вы робом!",
*/

"use strict"
// Решение 1

let answer = prompt("Сколько будет 7 + или - 15?")
answer = isNaN(+answer) ? answer.toLocaleLowerCase() : +answer

if (answer == 22){
    console.log("Успех")
} else if ( answer == -8 ){
    console.log("Успех")
} else if (answer == "я не робот"){
    console.log("Успех")
} else {
    console.log("Вы робот")
}

// Решение 2

if ( ( answer == 22) || ( answer == -8 ) || ( answer == "я не робот")){
    console.log("Успех")
} else { console.log("Вы робот") }

// Решение 3 

switch(answer) {
    case 22:
    case -8:
    case "я не робот":
        console.log("Успех");
        break; // добавляем break
    default:
        console.log("Вы робот");
}


// Сделай анализ всех решений, скажи что сделанно хорошо, что плохо , что можно исправить, какое из решений лучшее, и сколько балов из 10 ты поставил бы каждому решению. /* Методом prompt получите ответ пользователя на вопрос "Сколько будет 7 + или - 15?". Если ответ верен а если он введёт "Я не робот", то тоже "Успех". выведите в консоле "Успех", если нет - "Вы робом!", */ "use strict" // Решение 1 let answer = prompt("Сколько будет 7 + или - 15?") answer = isNaN(+answer) ? answer : +answer if (answer == 22){ console.log("Успех") } else if ( answer == -8 ){ console.log("Успех") } else if (answer == "я не робот"){ console.log("Успех") } else { console.log("Вы робот") } // Решение 2 if ( ( answer == 22) || ( answer == -8 ) || ( answer == "я не робот")){ console.log("Успех") } else { console.log("Вы робот") } // Решение 3 switch(answer) { case 22: case -8: case "я не робот": console.log("Успех"); break; // добавляем break default: console.log("Вы робот"); }
