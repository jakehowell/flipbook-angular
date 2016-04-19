(function(){
	'use strict';

	angular.module('flipBook')
		.controller('HomeController', HomeController);

		HomeController.$inject = ['$scope', '$state', 'IntroService']

		function HomeController ($scope, $state, IntroService){

			var scope = this;

			scope.narrator = IntroService.narrator;
			scope.go = $state.go;

			activate();

			function activate(){
				if(!scope.narrator){
					$state.go('intro');
				}
			}

		};

})();
