/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","10"),
    personalMovieDB = {
        count : numberOfFilms,
        movies : {},
        actors : {},
        genres : [],
        privat : false
    };

// 2 step

// 1 вариант
for (let i = 1; i <= 2; i++){

    const film = prompt("Один из просмотрелных фильмов","Титаник"),
    rate = prompt("Какой вы поставили рейтинг?","22");

    if (  (film.length <= 50 && film.length != 0) && (film != false && rate != false) ){

        personalMovieDB.movies[film] = rate;

    } else{

        console.log("Ошибка");
        alert("Прозошла ошибка, введите название фильма ещё раз");

        i--;
        continue;
    }

    console.log(i);

}

if (numberOfFilms <= 10){
    console.log( "Вы начинающий кинолюбитель" );
} else if ( numberOfFilms <= 30){
    console.log( "Вы кинолюбитель" );
} else {
    console.log( "Вы бог в кино" );
}

console.log(personalMovieDB);






