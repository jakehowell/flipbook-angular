(function(){
	'use strict';

	angular.module('flipBook')
		.controller('ProductsController', ProductsController);

		ProductsController.$inject = ['$scope', '$state', 'NarratorService']

		function ProductsController ($scope, $state, NarratorService){

			var scope = this;

			scope.narrator = NarratorService.narrator;
			scope.go = $state.go;
			scope.updateRating = updateRating;

			scope.ratings = [
				{
					icon: 'health',
					label: 'Health & Wellness Products',
					ratingLevel: 0
				},
				{
					icon: 'anti-aging',
					label: 'Anti-Aging Products',
					ratingLevel: 0
				},
				{
					icon: 'beauty',
					label: 'Beauty Products',
					ratingLevel: 0
				}
			]

			activate();

			function activate(){
				if(!scope.narrator){
					$state.go('intro');
				}
			}

			function updateRating(index, rating){
				return scope.ratings[index].ratingLevel = rating;
			}

		};

})();
