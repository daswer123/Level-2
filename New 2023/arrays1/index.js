/*
    Дан список задач
    const tasks = ["Задача 1"];
    Сделать функции:
      - Добавление задачи в конец
      - Удаление задачи по названию
      - Перенос задачи в начало списка по названию
    Всегда меняем исходный массив.
*/

"use strict"

const tasks = ["Приготовить рис", "Сделать зарядку", "Купить Айфон"];

const addNewTask = (task, arr) => arr.push(task);

const removeTaskByName = (task,arr) => {
    const index = arr.indexOf(task);
    return index >= 0 ? arr.splice(index,1) : 0;
}

const replaceTaskByName = (task,arr) => {
    const elem = removeTaskByName(task, arr).toString();
    arr.unshift(elem)
}

console.log(tasks)
removeTaskByName("Сделать зарядку", tasks);
console.log(tasks)
replaceTaskByName("Купить Айфон", tasks)
console.log(tasks)