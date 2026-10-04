var city = '';
var apiKey = 'YOUR_API_KEY';

var input = document.querySelector('input');
var ul = document.querySelector('ul');
var button = document.querySelector('button');

input.addEventListener('input', function(elem) {
    city = elem.target.value;
});

button.addEventListener('click', getWeather);

async function getWeather() {

    if (city === '') {
        console.log("Please enter a city");
        return;
    }

    let response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
    );

    let data = await response.json();

    let temp = document.createElement('li');
    temp.innerText = `Temperature: ${data.current.temp_c}°C`;

    let condition = document.createElement('li');
    condition.innerText = `Condition: ${data.current.condition.text}`;

    let wind = document.createElement('li');
    wind.innerText = `Wind: ${data.current.wind_kph} km/h`;

    let humidity = document.createElement('li');
    humidity.innerText = `Humidity: ${data.current.humidity}%`;

    let heatIndex = document.createElement('li');
    heatIndex.innerText = `Heat Index: ${data.current.heatindex_c}°C`;

    ul.appendChild(temp);
    ul.appendChild(condition);
    ul.appendChild(wind);
    ul.appendChild(humidity);
    ul.appendChild(heatIndex);
}