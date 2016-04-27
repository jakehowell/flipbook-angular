(function(){
	'use strict';

	angular.module('flipBook')
		.controller('IntroController', IntroController);

		IntroController.$inject = ['$scope', '$state', 'NarratorService']

		function IntroController ($scope, $state, NarratorService){

			var scope = this;

			scope.narrator = NarratorService.narrator;
			scope.selectNarrator = selectNarrator;

			activate();

			function activate(){
			}

			function selectNarrator(narrator){
				NarratorService.narrator = narrator;
				$state.go('home');
			}

		};

})();
