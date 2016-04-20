(function(){
	'use strict';

	angular.module('flipBook')
		.directive('subnavigation', function($state) {

			SubnavigationCtrl.$inject = ['$scope', '$state'];

			return {
				bindToController: true,
				controller: SubnavigationCtrl,
				controllerAs: 'ctrl',
				restrict: 'E',
				templateUrl: '/js/components/subnavigation/subnavigation.html',
				scope: {}
			};

			function SubnavigationCtrl($scope, $state){

				$scope.current = $state.current.name;
				$scope.subNav = [
					{
						state: 'whatIf',
						thumb: '/img/thumb_what-if.jpg',
						current: false
					},
					{
						state: 'products',
						thumb: '/img/thumb_products.jpg',
						current: false
					},
					{
						state: 'company',
						thumb: '/img/thumb_company.jpg',
						current: false
					},
					{
						state: 'opportunity',
						thumb: '/img/thumb_opportunity.jpg',
						current: false
					}
				]

				activate();

				function activate(){
					getCurrent();
				}

				function getCurrent(){
					angular.forEach($scope.subNav, function(value, key, obj){
						if( value.state == $scope.current ){
							value.current = true;
						}
					});
				}

			}
		
		});
})();