(function(){
	'use strict';

	angular.module('flipBook')
		.directive('navigation', function() {

			NavigationCtrl.$inject = ['$rootScope', '$scope', '$element', '$attrs', '$state', 'ngAudio', 'IntroService', 'elapsedFilter'];

			return {
				bindToController: true,
				controller: NavigationCtrl,
				controllerAs: 'ctrl',
				restrict: 'E',
				templateUrl: '/js/components/navigation/navigation.html',
				scope: {
					'audio' : '=audio'
				}
			};

			function NavigationCtrl($rootScope, $scope, $element, $attrs, $state, ngAudio, IntroService, elapsedFilter){

				$scope.narrator = IntroService.narrator;
				$scope.audio = ngAudio.load($attrs.audio);

				console.log($scope.audio);

				activate();

				function activate(){
					if($scope.narrator !== 'none'){
						$scope.audio.play();
					}
					$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
						$scope.audio.stop();
					});
				}

				function play(){
					$scope.audio.play();
				}

				function stop(){
					$scope.audio.stop();
				}

				function pause(){
					$scope.audio.pause();
				}
			}
		
		});
})();