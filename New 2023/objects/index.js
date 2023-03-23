// Реализовать методы увеличения и уменьшения баланса,
// при котором каждая операция записывается в массив,
// opretaions в виде { reason: "Оплата товара", sum: -100}
// Возвращается true, если операция прошла успешно, и false, если не хватает баланса
// Так же реализовать метод вывода числа операций в массиве


"use strict"

const wallet = {
    balance: 0,
    operations: [],

    newOperaton: function(reason, sum){

        if (sum + this.balance < 0){
            return false
        }

        this.balance += sum;
        this.operations.push({
            reason,
            sum
        })

        return true
    },

    operationNum: function(){
        return this.operations.length
    }
}