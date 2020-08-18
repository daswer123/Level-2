/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
        
    ],

    updateMovie : () => {

        list.innerHTML = "";

         movieDB.movies.sort();
         movieDB.movies.forEach ((elem,i) =>{
         list.innerHTML += `
         <li class= 'promo__interactive-item'> ${i+1} --  ${elem}
         <div class= "delete"></div>
         </li>
          `;

        

        
});

     bins = list.querySelectorAll(".delete");
     bins.forEach ((bin) =>{
     bin.addEventListener("click", () =>{
     // Присваеваем стиль, который уберет трансформацию текста и мы сможем достать название в первоначальном виде
     bin.parentElement.style.textTransform = "none";
     // Получаем текст элемента и режим его от начала и до максимальной длины
     let binText = bin.parentElement.innerText.slice(5,bin.parentElement.innerText.length);
     bin.parentElement.style.textTransform = "uppercase";

     console.log(binText);
     console.log(movieDB.movies.indexOf(binText));
     movieDB.movies.splice(movieDB.movies.indexOf(binText),1); 
     bin.parentElement.remove();

 });
});
}

};

const add = document.querySelector(".promo__adv"),
      geners = document.querySelector(".promo__genre"),
      bg  = document.querySelector(".promo__bg"),
      list = document.querySelector(".promo__interactive-list"),
      elems = list.querySelectorAll("li"),
      addForm = document.querySelector(".add"),
      addInput = addForm.querySelector("input"),
      addFilm = addForm.lastElementChild;


let   bins = list.querySelectorAll(".delete");


addFilm.addEventListener("click",(event) =>{
    event.preventDefault();

    if (addInput.value == ""){
        alert("Пожалуйста введите фильм");
    } 
    else if (addInput.value.length >= 21){
        addInput.value = addInput.value.slice(0, 21);
        addInput.value += "...";
        movieDB.movies.push(addInput.value);
        movieDB.movies.sort();
        movieDB.updateMovie();
  
        addInput.value = "";
    }

    else{
      movieDB.movies.push(addInput.value);
      movieDB.movies.sort();
      movieDB.updateMovie(); 

      addInput.value = "";
    }

});



movieDB.updateMovie();


      







add.remove(); // 1 Task

console.log(geners);
geners.textContent = "Драмма";  // 2 Task

bg.style.backgroundImage = `url('img/bg.jpg')`; // 3 Task

// list.remove("li");
console.log(elems);


// Решения из 6-й практики

// Самый крутое решение
// list.innerHTML = "";
// movieDB.movies.sort();

// movieDB.movies.forEach ((elem,i) =>{
//     list.innerHTML += `

//     <li class= 'promo__interactive-item'> ${i+1} --  ${elem}
//     <div class= "delete"></div>
//     </li>
//     `;
// });

// 2 Часть задания


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


