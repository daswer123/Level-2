/*
    Дан произвольный url -
    "https://coursehunter.net/course/javascript"
    Нужно сделать функцию, которая выводит в консоль:
      - Протокол ( https )
      - Доменное имя ( coursehunter.net )
      - Путь внутри сайта ( course/javascript )
*/

"use strict"

const URL = "https://coursehunter.net/course/javascript"

const getUrlParts = url => {

    const protocol = url.split("//")[0].slice(0, -1);
    const newArr = url.split("/").slice(2);
    const [domain,...pathInside] = newArr;

    console.log(`
    Протокол сайта: ${protocol}
    Доменное имя: ${domain}
    Путь внутри сайта: ${pathInside.join("/")}
    `);
    
}

getUrlParts(URL)