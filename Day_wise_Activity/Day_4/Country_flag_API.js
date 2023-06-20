let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all', true);
xhr.onload = function(){
    let responseObject = JSON.parse(this.responseText);
    console.log(responseObject);
    for(country of responseObject)
    {
        console.log(`The flag of ${country.name.common} is ${country.flag}`);
        
    }
    
}
xhr.send();