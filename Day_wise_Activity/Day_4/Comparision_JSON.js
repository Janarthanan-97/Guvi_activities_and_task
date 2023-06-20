let json1 = {
    "name": "Person 1",
    "age":5
}
let json2 = {
    "age":5,
    "name": "Person 1"
    
}
let jsn1 = JSON.stringify(json1);
let obj1 = JSON.parse(jsn1);
let jsn2 = JSON.stringify(json2);
let obj2 = JSON.parse(jsn2);
let arr1 = Object.entries(obj1).sort();
let arr2 = Object.entries(obj2).sort();
let count=0;
for(var index=0; index<arr1.length; index++)
{
    for(var jindex=0; jindex<arr1[index].length; jindex++)
    {
        arr1[index][jindex]==arr2[index][jindex] ? 0 : count++
    }
}
count==0 ? console.log("Both object has same properties") : console.log("Both object has different properties");