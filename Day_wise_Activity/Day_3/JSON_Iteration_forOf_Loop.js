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
for(var key of arr)
{
    console.log(`The key is ${key} and value is ${obj[key]}`);
}