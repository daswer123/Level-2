//Calc

function calc() {
    const calcResult = document.querySelector(".calculating__result span"),
        calcForm = document.querySelector(".calculating__field"),
        calcStatic = document.querySelectorAll(".calculating__choose");


    let sex = "female",
        height,
        weight,
        age,
        ratio = "1.375";



    function calculating() {
        if (!sex || !height || !weight || !age || !ratio) {
            calcResult.textContent = "....";
            return;
        }

        let result = 0;
        if (sex == "male") {
            result = 88.3 + (13.4 * weight) + (4.8 * height) + (5.7 * age);
        } else {
            result = 447.6 + (9.2 * weight) + (3.1 * height) + (4.3 * age);

        }
        calcResult.textContent = Math.round(result * ratio);
    }

    function getStaticInfo(parent) {
        const elements = document.querySelectorAll(`${parent} div`);

        document.querySelector(parent).addEventListener("click", (e) => {
            let target = e.target;
            if (target.getAttribute("data-ratio")) {
                ratio = target.getAttribute("data-ratio");
                localStorage.setItem("ratio", ratio);
            } else {
                sex = target.getAttribute("id");
                localStorage.setItem("sex", sex);
            }
            calculating();

            elements.forEach((elem) => {
                if (target == elem) {
                    elem.classList.add("calculating__choose-item_active");
                } else {
                    elem.classList.remove("calculating__choose-item_active");
                }
            });
        });

    }

    function getDynamicInfo(selector) {
        const input = document.querySelector(selector);
        const reg = /\D/gi;

        input.addEventListener("input", () => {

            if (input.getAttribute("id") == "weight") {
                weight = input.value;
                weight = weight.replace(reg, "");
                input.value = weight;
                localStorage.setItem("weight", weight);
            }

            if (input.getAttribute("id") == "height") {
                height = input.value;
                height = height.replace(reg, "");
                input.value = height;
                localStorage.setItem("height", height);

            }
            if (input.getAttribute("id") == "age") {
                age = input.value;
                age = age.replace(reg, "");
                input.value = age;
                localStorage.setItem("age", age);
            }

            calculating();
        });
    }

    if (localStorage.getItem("sex")) {
        sex = localStorage.getItem("sex");
    }
    if (localStorage.getItem("weight")) {
        weight = localStorage.getItem("weight");
    }
    if (localStorage.getItem("height")) {
        height = localStorage.getItem("height");
    }
    if (localStorage.getItem("age")) {
        age = localStorage.getItem("age");
    }
    if (localStorage.getItem("ratio")) {
        ratio = localStorage.getItem("ratio");
    }


    getStaticInfo(".calculating__choose_sex");
    getStaticInfo(".calculating__choose_big");
    getDynamicInfo("#height");
    getDynamicInfo("#weight");
    getDynamicInfo("#age");


    calculating();
}

export default calc;