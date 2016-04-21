(function(){
	'use strict';

	angular.module('flipBook')
		.directive('navigation', function() {

			NavigationCtrl.$inject = ['$rootScope', '$scope', '$element', '$attrs', '$state', '$filter', 'ngAudio', 'IntroService', 'elapsedFilter', 'NoteService'];

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

			function NavigationCtrl($rootScope, $scope, $element, $attrs, $state, $filter, ngAudio, IntroService, elapsedFilter, NoteService){

				$scope.narrator = IntroService.narrator;
				$scope.audio = ngAudio.load($attrs.audio);
				$scope.note = null;

				console.log($scope.audio);

				activate();

				function activate(){
					if($scope.narrator !== 'none'){
						$scope.audio.play();
					}
					$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
						$scope.audio.stop();
					});
					getNote();
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

				function getNote(){
					NoteService.get()
						.then(function(response){
							$scope.note = $filter('filter')(response.data, {page: $state.current.name}, true);
							console.log($scope.note);
						})
				}
			}
		
		});
})();