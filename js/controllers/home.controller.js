(function(){
	'use strict';

	angular.module('flipBook')
		.controller('HomeController', HomeController);

		HomeController.$inject = ['$scope', '$state', 'NarratorService']

		function HomeController ($scope, $state, NarratorService){

			$scope.narrator = NarratorService.narrator;
			$scope.go = $state.go;

			activate();

			function activate(){
			}

		};

})();
