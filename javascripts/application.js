'use strict';
var app = angular.module('testui', ['ui.router']);  //'ui.router'
app.config(function($stateProvider, $urlRouterProvider) {   
	 $stateProvider.state('state1',{
	 	url: "/",
	 	templateUrl : "meraview.html"
	 })
})
app.controller('anil', ['$scope', function($scope){

	$scope.rt = "kumars";
	
}])