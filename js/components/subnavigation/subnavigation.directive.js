(function(){
	'use strict';

	angular.module('flipBook')
		.directive('subnavigation', function($state) {

			SubnavigationCtrl.$inject = ['$scope', '$state', '$filter'];

			return {
				bindToController: true,
				controller: SubnavigationCtrl,
				controllerAs: 'ctrl',
				restrict: 'E',
				templateUrl: '/js/components/subnavigation/subnavigation.html',
				scope: {}
			};

			function SubnavigationCtrl($scope, $state, $filter){
				$scope.current = $state.current.name;
				$scope.goToNext = goToNext;
				$scope.goToPrev = goToPrev;
				$scope.pages = [
                    {
                        page: 'whatIf',
                        thumb: '/img/thumb_what-if.jpg',
                        current: false
                    },
                  	{
                        page: 'products',
                        thumb: '/img/thumb_products.jpg',
                        current: false
                    },
                    {
                        page: 'company',
                        thumb: '/img/thumb_company.jpg',
                        current: false
                    },
                    {
                        page: 'opportunity',
                        thumb: '/img/thumb_opportunity.jpg',
                        current: false
                    }
                ];
                $scope.scrolling = false;
                $scope.pageArray = $scope.pages.map(function(e) { return e.page; });
                $scope.pageIndex = $scope.pageArray.indexOf($scope.current);
                $scope.firstPage = $scope.pageIndex-1 < 0;
                $scope.lastPage = $scope.pageIndex+1 > $scope.pages.length;

				activate();

				function activate(){
					getCurrent();
					document.querySelector('.page-content').addEventListener('scroll', handleScroll, false);
				}

				function handleScroll(){
					window.clearTimeout(scrollTimeout);
					$scope.scrolling = true;
					var scrollTimeout = window.setTimeout(function(){
						$scope.scrolling = false;
					}, 1000);
				}

				function getCurrent(){
					angular.forEach($scope.pages, function(value, key, obj){
						if( value.page == $scope.current ){
							value.current = true;
						}
					});
				}

				function goToNext(){
					if($scope.pageIndex+1 < $scope.pages.length){
						$state.go($scope.pages[$scope.pageIndex+1].page);
					}
				}

				function goToPrev(){
					if($scope.pageIndex-1 >= 0){
						$state.go($scope.pages[$scope.pageIndex-1].page);
					}
				}

			}
		
		});
})();