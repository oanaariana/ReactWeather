var axios = require('axios');

const OPEN_WEATHER_MAP_URL ='http://api.openweathermap.org/data/2.5/weather?appid=4c210bbdda27cc33a16a8bcc5004311f&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.response.data.message) {
        throw new Error(res.response.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.response.data.message);
    });
  }
}
