window.getWeather = function () {
    {
      event.preventDefault()
    }
    
  // let now = new Date();
  let cityName = document.querySelector("#cityName").value;
  let API_key = "165805171b61c8dc8a73c2b3d5310c06";
  let now = moment().format('MMMM Do YYYY, h:mm:ss a');
  
  
  
  axios
       .get(
         `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`
        )
        .then(function (response) {
          // handle success
          console.log(response.data);
          console.log('success')

          document.querySelector('#country').innerHTML = `Country <br/> ${response.data.sys.country}`
          document.querySelector('#humidity').innerHTML = `Humidity <br/> ${response.data.main.humidity}`
          document.querySelector('#sky').innerHTML = `Sky <br/> ${response['data']['weather']['0']['main']}`
          document.querySelector('#wind').innerHTML = `Wind <br/> ${(((response.data.wind.speed) * 2.9).toFixed())} km/h <br/> ${response.data.wind.deg}° <br/> From North`
          document.querySelector('#min-temp').innerHTML = `Minimum Temperature <br/> ${Math.trunc(response.data.main.temp_min-273.15.toFixed(0))}°C`
          document.querySelector('#max-temp').innerHTML = `Maximum Temperature <br/> ${Math.trunc(response.data.main.temp_max-273.15.toFixed(0))}°C`
          document.querySelector('#image').innerHTML = `<img src='https://openweathermap.org/img/wn/${response['data']['weather']['0']['icon']}@2x.png'>`
          document.querySelector('#feels_like').innerHTML = `Feel Like <br/> ${Math.trunc(response.data.main.feels_like-273.15.toFixed(0))}°C`
          document.querySelector('#now').innerHTML = `${now}`        
      })
  
  
  
  
  
      .catch(function (error) {
          // handle error
          console.log(error);
          document.querySelector("#result").innerHTML =
            "error in getting weather";
        });
 };

