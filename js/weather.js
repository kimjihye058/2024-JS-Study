import CONFIG from './config.js';

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${CONFIG.API_KEY}`;
    fetch(url);
}
function onGeoError(){
    alert("Can't find you! No weather for you...");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
