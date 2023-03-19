/*
Ваша часовая ставка 80$ и вы готовы работать не
более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40
часов работы.
Сейчас понедельник.
Вы должны уехать через 11 дней.
Выведете в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/

"use strict"

const projectHours = 40;

const moneyPerHour = 80;
const howManyHoursOnDay = 5;
const howManyDaysOnWeek = 5;

const weekend = 2;
const daysRemain = 11;
const workDays = daysRemain - weekend ;

const moneyPerDay = moneyPerHour * howManyHoursOnDay
const moneyPerWeek = moneyPerDay * howManyDaysOnWeek

// first task
const canBeApply = howManyHoursOnDay * workDays >= 40
console.log("Сможет ли проект быть выполненным: " + canBeApply )

// second task
console.log("С вас: " + projectHours * moneyPerHour + "$ ," + " Работа будет сделана за "+ projectHours / howManyHoursOnDay + " дней")