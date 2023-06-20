let array = [];
let myJson = {
    "Name": "Janarthanan",
    "Age": 25,
    "class": "FSD",
    "Institute": "Guvi"
}
myJson=JSON.stringify(myJson);
let obj = JSON.parse(myJson);
arr = Object.keys(obj);
arr.forEach(element => console.log(`The key is ${element} and value is ${obj[element]}`));
