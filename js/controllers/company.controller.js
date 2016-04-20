(function(){
	'use strict';

	angular.module('flipBook')
		.controller('CompanyController', CompanyController);

		CompanyController.$inject = ['$scope', '$state', 'IntroService']

		function CompanyController ($scope, $state, IntroService){

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
