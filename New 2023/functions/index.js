/*
	Пользователь:
	- Возраст
	- Наличие работы
	- Деньги
	Нужно проверить может ли он купить новый MacBook за 2000$?
	Он может брать не только свои деньги, но и взять кредит.
	Ему дадут 500$, только если ему больше 24-х лет и он
	имеет работу, 100$ если ему просто больше 24-х лет и 0 в
	ином случае.
	Напишите функцию, которая принимает данные пользователя
	и товара и возвращает true или false;
*/

"use strict"

const age = 25;
const isJobLess = false;
const money = 1900;
const macbook = 2000;


// Решение 1, через обьявление функции

function howManyYouGetDebit(age,isJobLess){
    // Решение 1.1 
    // if ( age >= 24 && !isJobLess ){
    //     return 500
    // } else if ( age >= 24 && isJobLess ) {
    //     return 100
    // } else { return 0 }

    // Решение 1.2
    switch(true){
        case age >= 24 && !isJobLess: 
          return 500;
        case age >= 24 && isJobLess:
          return 100;
        default:
          return 0;
    }
}

function canBuyMacbook(age,isJobLess,money){
    const debitAmount = howManyYouGetDebit(age,isJobLess);
    return money + debitAmount >= macbook ? true : false;
}

console.log(`Посчитав ваши доходы мы решили что вы ${canBuyMacbook(age,isJobLess,money) ? "сможете купить макбук" : "не сможете купить макбук простите"}`)

// Решение 2 через стрелочные функции

const howManyYouGetDebit2 = (age,isJobLess) => {
    switch(true){
        case age >= 24 && !isJobLess: 
          return 500;
        case age >= 24 && isJobLess:
          return 100;
        default:
          return 0;
    }
}
const canBuyMacbook2 = (age,isJobLess,money) => money + howManyYouGetDebit2(age,isJobLess) >= macbook ? true : false;

console.log(`Посчитав ваши доходы мы решили что вы ${canBuyMacbook2(age,isJobLess,money) ? "сможете купить макбук" : "не сможете купить макбук простите"}`)