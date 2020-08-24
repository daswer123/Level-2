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

export default timer;

