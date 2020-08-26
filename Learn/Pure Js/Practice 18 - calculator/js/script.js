
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


function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}


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


// Classes and Menu

const menuField = document.querySelector(".menu__field .container"),
      menuItems = document.querySelectorAll(".menu__item");




class menuItem{
    constructor(imgSrc,title,desk,price,parent){
        this.imgSrc = imgSrc;
        this.title = title;
        this.desk = desk;
        this.price = price;
        this.parent = document.querySelector(parent);
    }

    createItem(){
       let item = document.createElement("div");
       item.classList.add("menu__item");

       item.innerHTML = 
       `<img src="${this.imgSrc}" alt="${this.title}">
       <h3 class="menu__item-subtitle">Меню “${this.title}”</h3>
       <div class="menu__item-descr">${this.desk}</div>
       <div class="menu__item-divider"></div>
       <div class="menu__item-price">
           <div class="menu__item-cost">Цена:</div>
           <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
       </div>`;
       this.parent.append(item);
    }
}

// function renderMenu(first,second,thrid) {
//     menuItems.forEach(elem =>{
//         elem.remove();
//     });

//     first.createItem();
//     second.createItem();
//     thrid.createItem();
// }

const getContent = async (url) =>{ 

    let request = await fetch(url);
 
    if(request.ok == false){
        throw new Error("Не получилось зафетчить " + request.status);
    }
 
    return await request.json();
 };

getContent(" http://localhost:3000/menu").then(data => {

    data.forEach(elem =>{
        let  menu = new menuItem(elem.imgSrc,elem.title,elem.desk,elem.price,elem.parent = ".menu__field .container");
        menu.createItem();
    });
});

 
 

// const post = new menuItem("img/tabs/post.jpg","Постное",
//                     "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
//                     430,".menu__field .container"),
//       premium = new menuItem("img/tabs/elite.jpg","Премиум",
//                     "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
//                     550,".menu__field .container"),
//       fitnes = new menuItem("img/tabs/vegy.jpg","Фитнес",
//                     "Меню “Фитнес” - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
//                     230,".menu__field .container");

// renderMenu(fitnes,premium,post);

// REsponse on forms

const forms = document.querySelectorAll('form');
const message = {
    loading: 'img/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
};

forms.forEach(item => {
    bindPostData(item);
});

const postData = async (url, data) => {
    let res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

// async function getResource(url) {
//     let res = await fetch(url);

//     if (!res.ok) {
//         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//     }

//     return await res.json();
// }


function bindPostData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
        `;
        form.insertAdjacentElement('afterend', statusMessage);
    
        const formData = new FormData(form);

        const json = JSON.stringify(Object.fromEntries(formData.entries()));

        postData('http://localhost:3000/requests', json)
        .then(data => {
            showThanksModal(message.success);
            statusMessage.remove();
        }).catch(() => {
            showThanksModal(message.failure);
        }).finally(() => {
            form.reset();
        });
    });
}

function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>×</div>
            <div class="modal__title">${message}</div>
        </div>
    `;
    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
        thanksModal.remove();
        prevModalDialog.classList.add('show');
        prevModalDialog.classList.remove('hide');
        closeModal();
    }, 4000);
}

function getZero(num){
    if (+num >= 10){
        return ""+num;
    } else{
        return "0"+num;
    }
}


//Slider

let slides = document.querySelectorAll(".offer__slide"),
    currentText = document.querySelector("#current"),
    totalText = document.querySelector("#total"),
    total = slides.length,
    width = getComputedStyle(slides[0]).width,
    slideIndex = 1;

totalText.textContent = getZero(total);
    
const nextSlideButton = document.querySelector(".offer__slider-next"),
      prevSlideButton = document.querySelector(".offer__slider-prev"),
      sliderWrapper =   document.querySelector(".offer__slider-wrapper"),
      sliderInner   =   document.querySelector(".offer__slider-inner");

const indicatos = document.createElement("ul");
indicatos.classList.add("container");


sliderWrapper.style.overflow = "hidden";
sliderInner.style.transition = "0.5s";
sliderInner.style.width = 100 * slides.length + "%";

slides.forEach(slide =>{
  slide.style.width = width;

  document.querySelector(".offer__slider").append(indicatos);
  let dot = document.createElement("li");
  dot.classList.add("dot");
  indicatos.append(dot);

});



const dots = document.querySelectorAll(".dot");

currentText.textContent = getZero(slideIndex);

function changeSlide(index){
    sliderInner.style.transform = `translateX(${index*-(+width.match(/\d/g).join(""))}px)`;
}

function checkTap(){
    dots.forEach((dot,index) =>{
        if (slideIndex-1 == index){
            dot.style.opacity = "1";
        } else{
            dot.style.opacity = "0.2";
        }
    });
}

function setTap(){
    dots.forEach((dot,index) =>{
        dot.addEventListener("click",()=>{
            slideIndex = index+1;
            showSlide(0);
        });
    });
}



function showSlide(n = 1){

    slideIndex = slideIndex + n;

    if (slideIndex > total){
        changeSlide(0);
        slideIndex = 1;
        currentText.textContent = getZero(+slideIndex);
    }

    if (slideIndex < 1){
        changeSlide(total-1);
        slideIndex = total;
        currentText.textContent = getZero(+slideIndex);
    }

    changeSlide(slideIndex-1);
    currentText.textContent = getZero(+slideIndex);
    checkTap();

}

nextSlideButton.addEventListener("click",()=>{
    showSlide(1);
});
prevSlideButton.addEventListener("click",()=>{
    showSlide(-1);
});

checkTap();
setTap();
const slideInterval = setInterval(showSlide,5000);

//Calc


const calcResult = document.querySelector(".calculating__result span"),
      calcForm = document.querySelector(".calculating__field"),
      calcStatic = document.querySelectorAll(".calculating__choose");


let sex = "female",
           height,
           weight,
           age,
    ratio = "1.375";



function calculating() {
    if (!sex || !height || !weight || !age || !ratio){
        calcResult.textContent = "....";
        return;
    }

    let result = 0;
    if (sex == "male"){
        result = 88.3 + (13.4 * weight) + (4.8*height) + (5.7*age) ;
    } else {
        result = 447.6 + (9.2 * weight) + (3.1*height) + (4.3*age) ;
        
    }
    calcResult.textContent = Math.round(result * ratio);
}

function getStaticInfo(parent){
    const elements = document.querySelectorAll(`${parent} div`);

    document.querySelector(parent).addEventListener("click",(e) =>{
        let target = e.target;
        if (target.getAttribute("data-ratio")){
            ratio = target.getAttribute("data-ratio");
            localStorage.setItem("ratio",ratio);
        } else{
            sex = target.getAttribute("id");
            localStorage.setItem("sex",sex);
        }
        calculating();

        elements.forEach( (elem) =>{
            if (target == elem){
                elem.classList.add("calculating__choose-item_active");
            } else{
                elem.classList.remove("calculating__choose-item_active");
            }
        });
    });

}

function getDynamicInfo(selector){
   const input = document.querySelector(selector);
   const reg  = /\D/gi;

   input.addEventListener("input",() =>{

      if (input.getAttribute("id") == "weight"){
          weight = input.value;
          weight = weight.replace(reg,"");
          input.value = weight ;
          localStorage.setItem("weight", weight);
      }

      if (input.getAttribute("id") == "height"){
        height = input.value;
        height = height.replace(reg,"");
        input.value = height ;
        localStorage.setItem("height", height);

      }
      if (input.getAttribute("id") == "age"){
          age = input.value;
          age = age.replace(reg,"");
          input.value = age ;
          localStorage.setItem("age", age);
      }

      calculating();
   });
}

if(localStorage.getItem("sex")){
    sex = localStorage.getItem("sex");
}
if(localStorage.getItem("weight")){
    weight = localStorage.getItem("weight");
}
if(localStorage.getItem("height")){
    height = localStorage.getItem("height");
}
if(localStorage.getItem("age")){
    age = localStorage.getItem("age");
}
if(localStorage.getItem("ratio")){
    ratio = localStorage.getItem("ratio");
}


getStaticInfo(".calculating__choose_sex");
getStaticInfo(".calculating__choose_big");
getDynamicInfo("#height");
getDynamicInfo("#weight");
getDynamicInfo("#age");


calculating();


























































