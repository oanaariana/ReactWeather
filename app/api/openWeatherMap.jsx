var axios = require('axios');

const OPEN_WEATHER_MAP_URL ='http://api.openweathermap.org/data/2.5/weather?appid=4c210bbdda27cc33a16a8bcc5004311f&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(response) {
      // console.log(response.data);
      if(response.data.cod && response.data.message) {
          throw new Error('Unable to fetch weather');
      } else {
          return response.data.main.temp;
      }
      }).catch(function(error) {
           throw new Error(error.response.data.message);
      // console.log(error.response.data.message);
     });          
  }
}
