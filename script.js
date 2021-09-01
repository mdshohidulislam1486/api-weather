

const serchByCityNmae = () =>{
    const search = document.getElementById('search');
    const searchValue = search.value;
    search.value ='';
   /*  url = (`https://api.openweathermap.org/data/2.5/weather?q=${searchValue},${searchValue},${searchValue}&appid=22b1c6b38ac2a4ba41cfc34612e67570

    `)
    fetch(url)
    .then(res => res.json())
    .then(data => dispalyWeather(data)) */

    url1 = (`https://openweathermap.org/data/2.5/find?q=${searchValue}&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric`);
  fetch(url1)
  .then(res1 => res1.json())
  .then(data1 => disPlayCityName(data1.list))
}

const disPlayCityName =cityCounts =>{
for(const city of cityCounts){
 console.log(city)
}
  
}



document.getElementById('search').addEventListener('keyup', function(){
  const search =document.getElementById('search').value;
  if(search.toLowerCase() === ('Dhaka').toLocaleLowerCase()){
    console.log("key is up")
  }
 
})


// kelvin convert function 

const temConvert=(kelvin)=>{
  const temp=((kelvin- 273.15) * 9/5) + 32
  var fToCel = (temp - 32) * 5/9;
 var result = (fToCel).toFixed(2) + '\xB0C.';
  
  return result;
}


/* const dispalyWeather= cities =>{
const getMainDipaly = document.getElementById('current-weather');
getMainDipaly.innerHTML = '';
const cityName = cities.name;
const getCountry = cities.sys.country

const getTemp = cities.main.temp;
const tempe = temConvert(getTemp);

const getFeelsLike  = cities.main.feels_like;
const feellikes  = temConvert(getFeelsLike);

const getWeathers =cities.weather
for(const getWeatehr of getWeathers){
  const weatherDes = getWeatehr.description
  const weaterIcon = getWeatehr.icon
  const getWeatehrMain = getWeatehr.main


const div = document.createElement('div')
div.innerHTML =`
<h1 class='fw-900'> <span id="city">${cityName},</span> <span id="country">${getCountry}</span></h1>
<h5>Feel like ${feellikes} ${getWeatehrMain}, ${weatherDes} </h5>
<h2>${tempe}</h2>
`
getMainDipaly.appendChild(div)
}
}  */