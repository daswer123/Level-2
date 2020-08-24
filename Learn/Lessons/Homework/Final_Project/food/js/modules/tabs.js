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

export default tabs;