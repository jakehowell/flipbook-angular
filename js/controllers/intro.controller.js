(function(){
	'use strict';

	angular.module('flipBook')
		.controller('IntroController', IntroController);

		IntroController.$inject = ['$scope', '$state', 'IntroService']

		function IntroController ($scope, $state, IntroService){

			var scope = this;

			scope.narrator = IntroService.narrator;
			scope.selectNarrator = selectNarrator;

			activate();

			function activate(){
				if(scope.narrator){
					$state.go('home');
				}
			}

			function selectNarrator(narrator){
				IntroService.narrator = narrator;
				$state.go('home');
			}

		};

})();
