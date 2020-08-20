
// Tabs
"use strict";
let tabs = document.querySelectorAll(".tabcontent"),
      tabToggle = document.querySelector(".tabheader__items");


tabToggle.addEventListener("click",(event) => {

    if(event.target && event.target.classList.contains("tabheader__item")){

        let tab = event.target;
        let tabIndex = 0;
        tabToggle.querySelectorAll(".tabheader__item").forEach((elem,i) =>{

          if(elem.classList.contains("tabheader__item_active")){
             elem.classList.remove("tabheader__item_active");
        }

          if(elem == tab){
            tabIndex = i;
        }

          });

        tab.classList.add("tabheader__item_active");

        
        tabs.forEach((elem,i) => {
            if (elem.classList.contains("tabcontent-active")){
                elem.classList.remove("tabcontent-active");
            }
            if( i == tabIndex){
                elem.classList.add("tabcontent-active");
            }
        });
        
    }
});

//Timer

function untilTen(i){
    if (i < 10){
        i = "0" + i; 
        return i;
    } else{
    return i;
}
}

function getTimeRemain(date){

    let left = ((Date.parse(date) - new Date()) / 1000),
    seconds = Math.round(left % 86400 % 60 % 60),
    minutes = Math.floor(left % 86400 / 60 % 60),
    hours  =  Math.floor(left % 86400 / 60 / 60),
    days   =  Math.floor(left / 86400);


    if (left < 0){
        return false;
    }
    return {
        "day" : days,
        "hour" : hours,
        "minute" : minutes,
        "second" : seconds,
        "timeLeft" : left
    };

}


function setClock(deadline = new Date()){

    deadline.setMinutes(deadline.getMinutes()+30); // Если нет аргументов , то будет создаваться бесконечный таймер

    let seconds = document.querySelector("#seconds"),
    minutes = document.querySelector("#minutes"),
    hours   = document.querySelector("#hours"),
    days    = document.querySelector("#days"),

    clock = setInterval(updateClock,1000);

    updateClock();


    function updateClock() {

            let timeRemain = getTimeRemain(deadline);
    
            if (timeRemain == false){
                console.log("Введите дату больше текущей");
                clearInterval(clock);
            }
    
            seconds.textContent = untilTen(timeRemain.second);
            minutes.textContent = untilTen(timeRemain.minute);
            hours.textContent  =  untilTen(timeRemain.hour);
            days.textContent   =  untilTen(timeRemain.day);
    
            if (timeRemain.timeLeft == 0){
                clearInterval(clock);
                console.log("Time out");
            }

    }
}

let deadline = new Date("2020-8-30");
setClock(deadline);



//Modal Window


const modalBtn = document.querySelectorAll("[data-modal]"),
      modal    = document.querySelector(".modal"),
      modalClose = document.querySelector("[data-close]");


modalBtn.forEach(elem =>{
    elem.addEventListener("click",() =>{
        modal.style.display = "block";
        document.body.style.overflow = "hidden";

        localStorage.setItem("modal","true");
    });
});

modalClose.addEventListener("click",() =>{
        modal.style.display = "none";
        document.body.style.overflow = "visible";
    });

modal.addEventListener("click",()=>{
    if(event.target && event.target.classList.contains("modal")){
        modal.style.display = "none";
        document.body.style.overflow = "visible";
    }
});

if (localStorage.getItem("modal") != "true"){
    let TempModal = setTimeout(()=>{
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        localStorage.setItem("modal","true");
    },3000);
} else{
    console.log("Окон больше не будет!");
}

document.addEventListener("scroll",()=>{
    let scroll = document.documentElement.scrollTop;

    if (scroll > 2800 && localStorage.getItem("modal") == null){
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        localStorage.setItem("modal","true");
    }
});


