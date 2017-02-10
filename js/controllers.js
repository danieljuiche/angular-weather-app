// Controllers
weatherApp.controller('homeController', ['$scope', '$location', 'cityNameService', function ($scope, $location, cityNameService) {
	
	$scope.city = cityNameService.city;

	$scope.$watch('city', function () {

		cityNameService.city = $scope.city;

	});

	$scope.submit = function () {
		$location.path("/forecast");
	}

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityNameService', function ($scope, $resource, $routeParams, cityNameService) {
	
	// Store initial variables
	$scope.city = cityNameService.city;
	$scope.daysToDisplay = $routeParams.days || '3';

	// Get data from OpenWeatherMap API
	$scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=9f7c06d0eb23c68b0fc17fec2280429b", { get: { method: "JSONP" }});
	$scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.daysToDisplay });


	// Function to convert temperature from Kelvin to Celcius
	$scope.convertToCelcius = function (degK) {
		return Math.round(degK - 273.15);
	}

	// Function to covert date from Unix to standard notation
	$scope.convertToDate = function (unixTime) {
		return new Date(unixTime * 1000);
	}

	// Console log data results
	console.log($scope.weatherResult);

}]);