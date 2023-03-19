/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
        
    ]
};

const add = document.querySelector(".promo__adv");
const geners = document.querySelector(".promo__genre");
const bg  = document.querySelector(".promo__bg");
const list = document.querySelector(".promo__interactive-list");
const elems = list.querySelectorAll("li");

add.remove(); // 1 Task

console.log(geners);
geners.textContent = "Драмма";  // 2 Task

bg.style.backgroundImage = `url('img/bg.jpg')`; // 3 Task

// list.remove("li");
console.log(elems);


// Самый крутое решение
list.innerHTML = "";
movieDB.movies.sort();

movieDB.movies.forEach ((elem,i) =>{
    list.innerHTML += `

    <li class= 'promo__interactive-item'> ${i+1} --  ${elem}
    <div class= "delete"></div>
    </li>
    `;
});

//Через метод forEach изменить кажый элеммент

// movieDB.movies.sort();
// elems.forEach((elem,i) => { // 4 Task 1/2 
//   elem.innerText = `${i+1} -- ${movieDB.movies[i]}`;
// });


// console.log(elems);


// Удалить элементы и создать совершенно новые

// elems.forEach(elem => { 
//   elem.remove();
// });

// movieDB.movies.sort();
// for (let i = 0; i < movieDB.movies.length; i++){

//     let elem = document.createElement("li");
//     elem.classList.add("promo__interactive-item");
//     elem.innerText = `${i+1} -- ${movieDB.movies[i]}`;
//     list.append(elem);
//     console.log(i);
// }


