const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '79368a05e9msh0fd1aa9cbd017ffp10a097jsn8e05927e288c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
    city_name.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then((response) =>{
        console.log(response)

        temp.innerHTML=response.temp
        humidity.innerHTML=response.humidity
        wind.innerHTML=response.wind_speed
    }) 
        

	.catch(err => console.error(err));
}
 searchButton.addEventListener("click",(e)=>{
     e.preventDefault()
     getWeather(city.value)
})

