

function onGeoOk(position){
    const API_KEY = "b14d8da414522c17dcf4b10685f9e9d0";
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(resopnse => resopnse.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}
function onGeoError(){
    alert("Can;t find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)