
const API_KEY = "1b106c56711aaf334a63efb9275a8447";

//geolocation에서 location을 넘겨줌
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    //api 이용을 위한 불러오기
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //자바스크립트로 url불러오기
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name; 
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            
    });


}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

// 현재 위치를 알려준다.
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)