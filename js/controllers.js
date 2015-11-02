var thoughtControllers = angular.module('thoughtControllers', ['$scope', '$http', function($scope, $http) {
	$http.get('random-thoughts.json').success(function(data) {
		$scope.thoughts = data;
	});
}]);