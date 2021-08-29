

const serchByCityNmae = () =>{
    const search = document.getElementById('search');
    const searchValue = search.value;
    search.value ='';
    url = (`https://api.openweathermap.org/data/2.5/weather?q=${searchValue},${searchValue},${searchValue}&appid=22b1c6b38ac2a4ba41cfc34612e67570

    `)

    fetch(url)
    .then(res => res.json())
    .then(data => dispalyWeather(data))
}

const dispalyWeather= cities =>{
const cityName = cities.name;
console.log(cityName)
const felxboxInner = document.getElementById('current-weather');
console.log(cities.main.feels_like)
}