(function(){
	'use strict';

	angular.module('flipBook')
		.directive('navigation', function($state) {

			NavigationCtrl.$inject = ['$scope', '$state'];

			return {
				bindToController: true,
				controller: SubnavigationCtrl,
				controllerAs: 'ctrl',
				restrict: 'E',
				templateUrl: '/js/components/navigation/navigation.html',
				scope: {}
			};

			function NavigationCtrl($scope, $state){

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