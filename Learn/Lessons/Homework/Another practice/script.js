const form = document.querySelector("form");



form.addEventListener("submit",(event) =>{
    event.preventDefault();

    console.log("Загрузка");

    let postData = async (url,data) =>{
        request = await fetch(url,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : data
        });

        return await request.json();
    };

    const formData = new FormData(form);
    const json =JSON.stringify(Object.fromEntries(formData.entries()));

    postData("http://localhost:3000/requests",json)
    .then(result => console.log(result))
    .then(result => alert("Данные загруженны"));

});




//     let request = new XMLHttpRequest();
//     request.open("POST","http://localhost:3000/requests");
//     request.setRequestHeader = "Content-Type: application/json";
//     request.send(json);

//     request.addEventListener("load",()=>{
//         if (request.status == 201 && request.readyState == 4){
//             console.log(json);
//             console.log("Запрос успешно послан");
//         }
//     });


// });

// let json = JSON.stringify(Object.fromEntries(formData.entries()));

// let obj = {
//     name : "natasha",
//     phone : "23232332",
//     key : [1,2,3]
// };

//  let jsonObj = JSON.stringify(obj);
//  let objEnt = Object.entries(obj);


// console.log(obj);
// console.log(objEnt);
// console.log(Object.fromEntries(objEnt));