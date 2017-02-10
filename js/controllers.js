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

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'weatherService', 'cityNameService', function ($scope, $routeParams, weatherService, cityNameService) {
	
	// Store initial variables
	$scope.city = cityNameService.city;
	$scope.daysToDisplay = $routeParams.days || '3';

	$scope.weatherResult = weatherService.GetWeather($scope.city,$scope.daysToDisplay);

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