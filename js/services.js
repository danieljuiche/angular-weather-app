// Services
weatherApp.service('cityNameService', function () {
	// Default city
	this.city = 'New York, NY';
});

weatherApp.service('weatherService', ['$resource', function ($resource) {
	// Get data from OpenWeatherMap API
	this.GetWeather = function (city, daysToDisplay) {
		var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=9f7c06d0eb23c68b0fc17fec2280429b", { get: { method: "JSONP" }});
		return weatherAPI.get({ q: city, cnt: daysToDisplay });
	}
}])