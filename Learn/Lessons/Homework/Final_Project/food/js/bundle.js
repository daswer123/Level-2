/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./food/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./food/js/modules/calc.js":
/*!*********************************!*\
  !*** ./food/js/modules/calc.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//Calc

function calc(){
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
}

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./food/js/modules/forms.js":
/*!**********************************!*\
  !*** ./food/js/modules/forms.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./food/js/modules/modal.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "./food/js/services.js");
// REsponse on forms



function forms(){
    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });


    // async function getResource(url) {
    //     let res = await fetch(url);

    //     if (!res.ok) {
    //         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    //     }

    //     return await res.json();
    // }


    function bindPostData(form) {
        form.addEventListener('submit', (event) => {

            event.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);
        
            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            Object(_services__WEBPACK_IMPORTED_MODULE_1__["postData"])('http://localhost:3000/requests', json)
            .then(data => {
                showThanksModal(message.success);
                statusMessage.remove();
                console.log(data);
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
        Object(_modal__WEBPACK_IMPORTED_MODULE_0__["openModal"])(document.querySelector(".modal"));

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
            Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])(document.querySelector(".modal"));
        }, 4000);
    }
    }

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./food/js/modules/menu.js":
/*!*********************************!*\
  !*** ./food/js/modules/menu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./food/js/services.js");
// Classes and Menu


function menu(){
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


Object(_services__WEBPACK_IMPORTED_MODULE_0__["getContent"])(" http://localhost:3000/menu").then(data => {

    data.forEach(elem =>{
        let  menu = new menuItem(elem.imgSrc,elem.title,elem.desk,elem.price,elem.parent = ".menu__field .container");
        menu.createItem();
    });
});
}

/* harmony default export */ __webpack_exports__["default"] = (menu);
 

/***/ }),

/***/ "./food/js/modules/modal.js":
/*!**********************************!*\
  !*** ./food/js/modules/modal.js ***!
  \**********************************/
/*! exports provided: openModal, closeModal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
//Modal Window

function closeModal(modal) {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function openModal(modal) {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}



function modal(){

    


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
}

/* harmony default export */ __webpack_exports__["default"] = (modal);


/***/ }),

/***/ "./food/js/modules/slider.js":
/*!***********************************!*\
  !*** ./food/js/modules/slider.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//Slider
function slider(){
    function getZero(num){
    if (+num >= 10){
        return ""+num;
    } else{
        return "0"+num;
    }
    }



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
}
/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./food/js/modules/tabs.js":
/*!*********************************!*\
  !*** ./food/js/modules/tabs.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Tabs
function tabs(){

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

};

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./food/js/modules/timer.js":
/*!**********************************!*\
  !*** ./food/js/modules/timer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//Timer
function timer(){
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
}

/* harmony default export */ __webpack_exports__["default"] = (timer);



/***/ }),

/***/ "./food/js/script.js":
/*!***************************!*\
  !*** ./food/js/script.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./food/js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ "./food/js/modules/timer.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./food/js/modules/modal.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms */ "./food/js/modules/forms.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/menu */ "./food/js/modules/menu.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calc */ "./food/js/modules/calc.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ "./food/js/modules/slider.js");











window.addEventListener("DOMContentLoaded",()=>{

    Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])();
    Object(_modules_timer__WEBPACK_IMPORTED_MODULE_1__["default"])();
    Object(_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])();
    Object(_modules_menu__WEBPACK_IMPORTED_MODULE_4__["default"])();
    Object(_modules_forms__WEBPACK_IMPORTED_MODULE_3__["default"])();
    Object(_modules_slider__WEBPACK_IMPORTED_MODULE_6__["default"])();
    Object(_modules_calc__WEBPACK_IMPORTED_MODULE_5__["default"])();
    
});
























































/***/ }),

/***/ "./food/js/services.js":
/*!*****************************!*\
  !*** ./food/js/services.js ***!
  \*****************************/
/*! exports provided: postData, getContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContent", function() { return getContent; });
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

const getContent = async (url) =>{ 

    let request = await fetch(url);
 
    if(request.ok == false){
        throw new Error("Не получилось зафетчить " + request.status);
    }
 
    return await request.json();
 };




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map