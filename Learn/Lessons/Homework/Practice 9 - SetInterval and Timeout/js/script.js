
const box = document.querySelector(".box"),
      wrapper = document.querySelector(".wrapper"),
      button = document.querySelector(".start");



button.addEventListener("click",function(event){
    let pos = 0;
    let frame = setInterval(()=>{
        if (pos == 500){
            clearTimeout(frame);
        }
        box.style.top = pos + "px";
        box.style.left = pos + "px";
        pos++;
    },10);


});