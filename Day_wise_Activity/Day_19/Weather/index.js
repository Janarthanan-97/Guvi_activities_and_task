
city = document.getElementById("cityName");
city.addEventListener("keypress", ()=>{if(event.key=="Enter")searchWeather()})

function searchWeather(){
    let place = city.value;
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=9b3abd72af5e8ee4c215adb53b59b0e5`)
.then((data)=> data.json())
.then((report)=>{
   if(report.message==undefined){
    let displayDiv = document.getElementById("display")
    displayDiv.innerHTML="";
    console.log(report.main);
    let weatherDiv = document.createElement("div")
    weatherDiv.innerHTML = `Weather: ${report.weather[0].main}`;
    displayDiv.appendChild(weatherDiv);
    
    let tempDiv = document.createElement("div")
    tempDiv.innerHTML = `Temp: ${report.main.temp} °`;
    displayDiv.appendChild(tempDiv);
    let humidityDiv = document.createElement("div")
    humidityDiv.innerHTML = `Humidity: ${report.main.humidity}%`;
    displayDiv.appendChild(humidityDiv);
   }
   else{
    let displayDiv = document.getElementById("display")
    displayDiv.innerHTML="";
    let errorDiv = document.createElement("div")
    errorDiv.innerHTML = report.message;
    displayDiv.appendChild(errorDiv);
   }
})
}




