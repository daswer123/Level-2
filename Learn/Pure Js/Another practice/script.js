
//Пример инкапсуляции
// class Car{
//     constructor(price,type,name){
//         this.name = name;
//         this._price = price;
//         this._type = type;

        
//     }
//     #windows = 4;

    
//     carInfo(){
//         console.log(`Машина ${this._type} под названием ${this.name} имеет ${this.#windows}, Она стоит ${this._price}`);

//     get windowInfo(){
//         console.log("В этой машине " +this.#windows + " окна");
//     }
//     set windowInfo(num){
//         if (num > 6){
//             console.log("Ты нормальный");
//         } else{
//             this.#windows = num;
//         }
//     }
// }

// const kia = new Car("300$","Легковая","Киа");
// kia.carInfo();



//Эксперементы с Fetch
// const form = document.querySelector("form");



// form.addEventListener("submit",(event) =>{
//     event.preventDefault();

//     console.log("Загрузка");

//     let postData = async (url,data) =>{
//         request = await fetch(url,{
//             method : "POST",
//             headers : {
//                 "Content-Type" : "application/json"
//             },
//             body : data
//         });

//         return await request.json();
//     };

//     const formData = new FormData(form);
//     const json =JSON.stringify(Object.fromEntries(formData.entries()));

//     postData("http://localhost:3000/requests",json)
//     .then(result => console.log(result))
//     .then(result => alert("Данные загруженны"));

// });



// Старый формат запросов
// //     let request = new XMLHttpRequest();
// //     request.open("POST","http://localhost:3000/requests");
// //     request.setRequestHeader = "Content-Type: application/json";
// //     request.send(json);

// //     request.addEventListener("load",()=>{
// //         if (request.status == 201 && request.readyState == 4){
// //             console.log(json);
// //             console.log("Запрос успешно послан");
// //         }
// //     });


// // });

// // let json = JSON.stringify(Object.fromEntries(formData.entries()));


//Принцип преобразования FormData в формат json
// // let obj = {
// //     name : "natasha",
// //     phone : "23232332",
// //     key : [1,2,3]
// // };

// //  let jsonObj = JSON.stringify(obj);
// //  let objEnt = Object.entries(obj);


// // console.log(obj);
// // console.log(objEnt);
// // console.log(Object.fromEntries(objEnt));