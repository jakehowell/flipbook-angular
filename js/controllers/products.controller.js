(function(){
	'use strict';

	angular.module('flipBook')
		.controller('ProductsController', ProductsController);

		ProductsController.$inject = ['$scope', '$state', 'IntroService']

		function ProductsController ($scope, $state, IntroService){

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
