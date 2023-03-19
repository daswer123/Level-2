"use strict";

import tabs from "./modules/tabs";
import timer from "./modules/timer";
import modal from "./modules/modal";
import forms from "./modules/forms";
import menu from "./modules/menu";
import calc from "./modules/calc";
import slider from "./modules/slider";

window.addEventListener("DOMContentLoaded", () => {

    tabs();
    timer();
    modal();
    menu();
    forms();
    slider();
    calc();

});