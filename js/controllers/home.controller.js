(function(){
	'use strict';

	angular.module('flipBook')
		.controller('HomeController', HomeController);

		HomeController.$inject = ['$scope', '$state', 'NarratorService']

		function HomeController ($scope, $state, NarratorService){

			var scope = this;

			scope.narrator = NarratorService.narrator;
			scope.go = $state.go;

			activate();

			function activate(){
				if(!scope.narrator){
					$state.go('intro');
				}
			}

		};

})();
