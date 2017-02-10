// Module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.controller('homeController', ['$scope', 'cityNameService', function ($scope, cityNameService) {
	
	$scope.city = cityNameService.city;

	$scope.$watch('city', function () {

		cityNameService.city = $scope.city;

	});

}]);