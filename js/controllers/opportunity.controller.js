(function(){
	'use strict';

	angular.module('flipBook')
		.controller('OpportunityController', OpportunityController);

		OpportunityController.$inject = ['$scope', '$state', 'NarratorService']

		function OpportunityController ($scope, $state, NarratorService){

			$scope.narrator = NarratorService.narrator;
			$scope.go = $state.go;
			$scope.handleSubmit = handleSubmit;
			$scope.contactForm = {};
			$scope.formSuccess = false;

			activate();

			function activate(){
			}

			function handleSubmit(){
				console.log($scope.contactForm);
				$scope.formSuccess = true;
			}

		};

})();
