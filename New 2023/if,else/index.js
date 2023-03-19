"use strict"

const deposit = 12000;
const percent = 7;
const housePrice = 13500;
const monthsInYear = 12;

// Рассчитываем полученную сумму через два года с капитализацией процентов
const moneyRecive = deposit * (1 + percent / monthsInYear / 100) ** (2 * monthsInYear);

// Проверяем хватает ли полученной суммы для покупки дома
if (moneyRecive > housePrice) {
    // Если хватает, то выводим сообщение об успехе и остаток после покупки
    console.log(`Вася смог купить дом за ${housePrice}$`);
    console.log(`Осталось ${moneyRecive - housePrice}$`);
} else {
    // Если не хватает, то выводим сообщение о неудаче и недостающую сумму
    console.log(`Вася не смог купить дом за ${housePrice}$`);
    console.log(`Ему не хватило ${housePrice - moneyRecive}$`);
}
