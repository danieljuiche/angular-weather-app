// Module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// Routes
weatherApp.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'homeController' 
	})
	.when('/forecast', {
		templateUrl: 'pages/forecast.html',
	 	controller: 'forecastController' 
	})
});


weatherApp.service('cityNameService', function () {
	this.city = '';

});

weatherApp.controller('homeController', ['$scope', 'cityNameService', function ($scope, cityNameService) {
	$scope.city = '';
	$scope.$watch('city', function (newVal, oldVal) {
		$scope.city = newVal;
		cityNameService.city = $scope.city;
	})


}]);

weatherApp.controller('forecastController', ['$scope', 'cityNameService', function ($scope, cityNameService) {
	$scope.city = cityNameService.city;

}]);

/* To do

- When we click on getforecast button we want the textbox values to appear in our /forecast page
- We will need a city name in our scope for both pages. We will need to bind our textbox to the city name for that scope
- Then we want to interpolate that city name out that way

- To share data between the two we will need to build a custom service
  - Watch when the text box changes, update the service and then pull the value from the service before interpolating onto the /forecast page

- Put together our scopes for both controllers that contain a city
- Build a custom service that also contains a city
- Watch the text box value change from the text box and update custom service
- Grab the value from the custom service and assign that to scope for output for interpolation

*/