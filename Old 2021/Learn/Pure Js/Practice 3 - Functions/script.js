/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start(){ 

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","10");
    }
}

function showMyDB(){
    if ( personalMovieDB.privat == false ){
      console.log(personalMovieDB);
    }
}
  
  const  personalMovieDB = {
        count : numberOfFilms,
        movies : {},
        actors : {},
        genres : [],
        privat : false
    };


function writeYourGenres(){
    for (let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt("Какой у вас любимы жанр");
    }
    for (let i = 0; i < 3; i++){
        console.log(`Ваш любимый жанр ${personalMovieDB.genres[i]}`);
    }
}


function AboutFilms(number){

    for (let i = 0; i < number; i++){

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
  }

start();
AboutFilms(2);
writeYourGenres();
showMyDB();


if (numberOfFilms <= 10){
    console.log( "Вы начинающий кинолюбитель" );
} else if ( numberOfFilms <= 30){
    console.log( "Вы кинолюбитель" );
} else {
    console.log( "Вы бог в кино" );
}







