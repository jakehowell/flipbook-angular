(function(){
	'use strict';

	angular.module('flipBook')
		.controller('OpportunityController', OpportunityController);

		OpportunityController.$inject = ['$scope', '$state', 'IntroService']

		function OpportunityController ($scope, $state, IntroService){

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
