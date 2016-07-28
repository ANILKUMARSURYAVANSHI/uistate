'use strict';
var app = angular.module('testui', ['ui.router']);  //'ui.router'
app.config(function($stateProvider, $urlRouterProvider) { 

  	$urlRouterProvider.otherwise('/');
	 $stateProvider
	 .state('state1',{
	 	url: "/",
	 	templateUrl : "meraview.html"
	 })
	  .state('state2',{
	 	url: "/anil",
	 	template : "<h6>w r uuu</h6>"
	 });
});
app.controller('anil', ['$scope', function($scope){

	$scope.rt = "kumars";
	
}]);

