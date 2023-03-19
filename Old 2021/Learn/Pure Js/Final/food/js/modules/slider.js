//Slider
function slider() {
    function getZero(num) {
        if (+num >= 10) {
            return "" + num;
        } else {
            return "0" + num;
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
        sliderWrapper = document.querySelector(".offer__slider-wrapper"),
        sliderInner = document.querySelector(".offer__slider-inner");

    const indicatos = document.createElement("ul");
    indicatos.classList.add("container");


    sliderWrapper.style.overflow = "hidden";
    sliderInner.style.transition = "0.5s";
    sliderInner.style.width = 100 * slides.length + "%";

    slides.forEach(slide => {
        slide.style.width = width;

        document.querySelector(".offer__slider").append(indicatos);
        let dot = document.createElement("li");
        dot.classList.add("dot");
        indicatos.append(dot);

    });



    const dots = document.querySelectorAll(".dot");

    currentText.textContent = getZero(slideIndex);

    function changeSlide(index) {
        sliderInner.style.transform = `translateX(${index*-(+width.match(/\d/g).join(""))}px)`;
    }

    function checkTap() {
        dots.forEach((dot, index) => {
            if (slideIndex - 1 == index) {
                dot.style.opacity = "1";
            } else {
                dot.style.opacity = "0.2";
            }
        });
    }

    function setTap() {
        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                slideIndex = index + 1;
                showSlide(0);
            });
        });
    }



    function showSlide(n = 1) {

        slideIndex = slideIndex + n;

        if (slideIndex > total) {
            changeSlide(0);
            slideIndex = 1;
            currentText.textContent = getZero(+slideIndex);
        }

        if (slideIndex < 1) {
            changeSlide(total - 1);
            slideIndex = total;
            currentText.textContent = getZero(+slideIndex);
        }

        changeSlide(slideIndex - 1);
        currentText.textContent = getZero(+slideIndex);
        checkTap();

    }

    nextSlideButton.addEventListener("click", () => {
        showSlide(1);
    });
    prevSlideButton.addEventListener("click", () => {
        showSlide(-1);
    });

    checkTap();
    setTap();
    const slideInterval = setInterval(showSlide, 5000);
}
export default slider;