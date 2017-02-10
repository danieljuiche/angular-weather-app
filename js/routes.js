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
	})
	.when('/forecast/:days', {
		templateUrl: 'pages/forecast.html',
	 	controller: 'forecastController'
	})

	// Whitelist the API
	$sceDelegateProvider.resourceUrlWhitelist(['self', 'http://api.openweathermap.org/data/2.5/forecast/daily?APPID=9f7c06d0eb23c68b0fc17fec2280429b']);
});