var app = angular.module('sandboxApp', ['ngRoute']);

app.controller('ThoughtController', ['$http', function($http){
	var self = this;
	 self.thoughtList = [];
	$http.get('random-thoughts.json')
		.success(function(data) {
			self.thoughtList = data;
		});
	

	self.thought = 'If your shirt isn\'t tucked into your pants, then your pants are tucked into your shirt.';
	self.thinker = 'Nick Offerman';
	//self.count = thoughtList.length;
	console.log('ThoughtController has been created');
	console.log(self.thoughtList);
}]);