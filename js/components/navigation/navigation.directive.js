(function(){
	'use strict';

	angular.module('flipBook')
		.directive('navigation', function() {

			NavigationCtrl.$inject = ['$rootScope', '$sce', '$scope', '$element', '$attrs', '$state', '$filter', 'ngAudio', 'IntroService', 'elapsedFilter', 'NoteService'];

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

			function NavigationCtrl($rootScope, $sce, $scope, $element, $attrs, $state, $filter, ngAudio, IntroService, elapsedFilter, NoteService){

				var current = $state.current.name;

				$scope.narrator = IntroService.narrator;
				$scope.audio = ngAudio.load($attrs.audio);
				$scope.note = null;
				$scope.playing = false;
				$scope.play = play;
				$scope.pause = pause;
				$scope.stop = stop;
				$scope.rewind = rewind;
				$scope.forward = forward;
				$scope.toggleNote = toggleNote;
				$scope.showNote = false;

				activate();

				function activate(){
					if($scope.narrator !== 'none' && $state.current.name !== 'intro'){
						play();
					}
					$rootScope.$on('$stateChangeSuccess', function(){
						stop();
					});
					getNote()
						.then(function(response){
							var note = $filter('filter')(response.data, {page: $state.current.name}, true)[0];
							note.text = $sce.trustAsHtml(note.text);
							$scope.note = note;
						});
				}

				function play(){
					$scope.audio.play();
					$scope.playing = true;
				}

				function stop(){
					$scope.audio.stop();
				}

				function pause(){
					$scope.audio.pause();
					$scope.playing = false;
				}

				function rewind(){
					var currentProgress = $scope.audio.progress;
					if( (currentProgress - .05) > 0){
						$scope.audio.progress = currentProgress - .05;
					}else{
						$scope.audio.progress = 0;
					}
				}

				function forward(){
					var currentProgress = $scope.audio.progress;
					if( (currentProgress + .05) < 1){
						$scope.audio.progress = currentProgress + .05;
					}else{
						$scope.audio.progress = 1;
					}
				}

				function getNote(){
					return NoteService.get();
				}

				function toggleNote(){
					$scope.showNote = !$scope.showNote;
				}
			}
		
		});
})();