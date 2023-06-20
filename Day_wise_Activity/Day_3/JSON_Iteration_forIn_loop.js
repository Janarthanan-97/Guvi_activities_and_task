let myJson = {
    "Name": "Janarthanan",
    "Age": 25,
    "class": "FSD",
    "Institute": "Guvi"
}
myJson=JSON.stringify(myJson);
let obj = JSON.parse(myJson);

for(var ele in obj)
{
    console.log(`The key is ${ele} and value is ${obj[ele]}`);
}