const apiKey = "999b411b6f229fd001002eb0831c8e16";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".input-group input");
const searchBtn = document.querySelector(".input-group .input-group-append button");

async function checkWeather(name) {
    const response = await fetch(apiUrl + name +`&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".temp1").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".temp_max").innerHTML=Math.round(data.main.temp_max) + "°C";
    document.querySelector(".temp_min").innerHTML=Math.round(data.main.temp_min) + "°C";
    document.querySelector(".feels_like").innerHTML=data.main.feels_like;
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".humidity1").innerHTML=data.main.humidity + "%";
    document.querySelector(".pressure").innerHTML=data.main.pressure +"km/h";
    document.querySelector(".sunrise").innerHTML=data.sys.sunrise;
    document.querySelector(".sunrise1").innerHTML=data.sys.sunrise;
    document.querySelector(".sunset").innerHTML=data.sys.sunset;
    document.querySelector(".speed").innerHTML=data.wind.speed +"km/h";
    document.querySelector(".name").innerHTML=data.name;
    
}

function search(){
    checkWeather(searchBox.value);
}

//enter pressing
let inputFromPlaceholder=document.getElementById("press-placeholder")
inputFromPlaceholder.addEventListener("keyup",function(event){
    event.preventDefault();
    if(event.key === 'Enter'){
        document.getElementById('search-btn').click();
    }
});

//cancel button
let cancelBtn=document.getElementById('cancel-btn');
cancelBtn.addEventListener('click',()=>{
    window.location.reload(true);
})
