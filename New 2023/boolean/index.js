/*
    Пользователь хочет приобрести игру в магазине
    Он может это сделать только если:
        - Его баланс больше 1000
    или число бонусов больше 100
        - Он не забанен
        - Игра куплена
        - Игра в продаже
    Напишите условие для покупки и выведите в консоль результат
*/

"use strict"

const balance = 1000;
const bonus = 90;

const isBaned = false;
const isBuy = false;
const isOnSale = true;

const canBuy = (( balance >= 1000 ) || ( bonus >= 100 )) && !isBaned && !isBuy && isOnSale
console.log("Ответ на вопрос сможет ли пользователь купить игру: " + canBuy)