const button = document.getElementById('search-button');
const input = document.getElementById('city-input');    
const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');

async function getData(CityName){
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=831d14fcf2844bf4975123035262303&q=${CityName}&aqi=yes`);
return await promise.json();
}


button.addEventListener('click',async ()=> {
    const value = input.value;
    const result = await getData(value);
    cityName.innerText = `${result.location.name}, ${result.location.country}`;
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = `${result.current.temp_c}°C`;
});
