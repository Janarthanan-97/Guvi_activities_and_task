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
for(var index=0; index<arr.length; index++)
{
    console.log(`The key is ${arr[index]} and value is ${obj[arr[index]]}`);
}