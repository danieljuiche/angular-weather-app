// Module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// Routes
weatherApp.config(function ($routeProvider, $sceDelegateProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'homeController' 
	})
	.when('/forecast', {
		templateUrl: 'pages/forecast.html',
	 	controller: 'forecastController' 
	});

	// Whitelist
	$sceDelegateProvider.resourceUrlWhitelist(['self', 'http://api.openweathermap.org/data/2.5/forecast/daily?APPID=9f7c06d0eb23c68b0fc17fec2280429b']);
});


weatherApp.service('cityNameService', function () {
	this.city = 'New York, NY';

});

weatherApp.controller('homeController', ['$scope', 'cityNameService', function ($scope, cityNameService) {
	
	$scope.city = cityNameService.city;

	$scope.$watch('city', function () {

		cityNameService.city = $scope.city;

	});


}]);

weatherApp.controller('forecastController', ['$scope', '$resource', 'cityNameService', function ($scope, $resource, cityNameService) {
	
	$scope.city = cityNameService.city;

	$scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=9f7c06d0eb23c68b0fc17fec2280429b", { get: { method: "JSONP" }});

	$scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: 2 });

	console.log($scope.weatherResult);

}]);