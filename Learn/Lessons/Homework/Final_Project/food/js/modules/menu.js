// Classes and Menu
import {
    getContent
} from "../services";

function menu() {
    const menuField = document.querySelector(".menu__field .container"),
        menuItems = document.querySelectorAll(".menu__item");




    class menuItem {
        constructor(imgSrc, title, desk, price, parent) {
            this.imgSrc = imgSrc;
            this.title = title;
            this.desk = desk;
            this.price = price;
            this.parent = document.querySelector(parent);
        }

        createItem() {
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


    getContent(" http://localhost:3000/menu").then(data => {

        data.forEach(elem => {
            let menu = new menuItem(elem.imgSrc, elem.title, elem.desk, elem.price, elem.parent = ".menu__field .container");
            menu.createItem();
        });
    });
}

export default menu;