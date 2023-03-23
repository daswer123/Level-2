/*
    Имеется массив изменения цен prices. Где внутри
    1й элемент массива является ценой в момент X,
    2й элемент массива является ценой в момент Y
    Нужно преобразовать данные в массив, где будут отображены
    только положительные изменения цен. [100, 150]
    */

"use strict"

const prices = [ [100,200], [120, 100], [200,300]];

const getPositivePrices = prices => prices.filter(price => price[1] - price[0] >= 0);

console.log(prices);
console.log(getPositivePrices(prices));
