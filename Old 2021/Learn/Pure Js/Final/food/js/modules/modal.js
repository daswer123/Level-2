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

export {
    openModal,
    closeModal
};

function modal() {




    const modalBtn = document.querySelectorAll("[data-modal]"),
        modal = document.querySelector(".modal"),
        modalClose = document.querySelector("[data-close]");


    modalBtn.forEach(elem => {
        elem.addEventListener("click", () => {
            modal.style.display = "block";
            document.body.style.overflow = "hidden";

            localStorage.setItem("modal", "true");
        });
    });

    modalClose.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "visible";
    });

    modal.addEventListener("click", () => {
        if (event.target && event.target.classList.contains("modal")) {
            modal.style.display = "none";
            document.body.style.overflow = "visible";
        }
    });

    if (localStorage.getItem("modal") != "true") {
        let TempModal = setTimeout(() => {
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
            localStorage.setItem("modal", "true");
        }, 3000);
    } else {
        console.log("Окон больше не будет!");
    }

    document.addEventListener("scroll", () => {
        let scroll = document.documentElement.scrollTop;

        if (scroll > 2800 && localStorage.getItem("modal") == null) {
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
            localStorage.setItem("modal", "true");
        }
    });
}

export default modal;