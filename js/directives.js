// Directives
weatherApp.directive("searchResult", function () {
	return {
		restrict: 'E',
		templateUrl: 'directives/weatherResult.html',
		replace: true,
		scope: {
			weatherDay: "=",
			convertToStandard: "&",
			convertToDate: "&",
			dateFormat: "@"
		}
	}
});