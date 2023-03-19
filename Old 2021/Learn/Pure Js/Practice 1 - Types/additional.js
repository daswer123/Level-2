let obj = {
  
  ann : "persone",
  dann : "persone",
  cat : "animal",
  dog : "animal"
};

let newObj = Object.entries(obj);

let result = newObj.filter((elem) =>{
  if (elem[1] == "persone"){
    return true;
  }
});
 
console.log(result);

