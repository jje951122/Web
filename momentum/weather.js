const API_KEY = 'b1f83b9b490339dfda8aded28cb46401';
const weatherText = document.querySelector('#js-weather');
const COORDS = 'coords';

function setWeather(){
    const coords=loadCoords();
    const lat=coords.lat;
    const lon =coords.lon;
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric'
    )
    .then(res=>{
        return res.json();
    })
    .then(result=>{
        const temp=result.main.temp;
        const name =result.name;
        console.log(temp, name)
        weatherText.textContent='${temp}℃, ${name}';
    })
    .catch(err=>{
        console.log(err);
    });
}

function loadCoords(){
    const loadCoords=localStorage.getItem(COORDS);
    return JSON.parse(loadCoords);
}
function storeCoords(lat, lon){
    const coordsO={lat:lat, lon:lon};
    localStorage.setItem(COORDS, JSON.stringify(coordsO));
}

if(loadCoords()===null){
    window.navigator.geolocation.getCurrentPosition(res=>{
        storeCoords(res.coords.latitude, res.coords.longitude);
    });
}
else{
    setWeather();
}