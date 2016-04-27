(function(){
	'use strict';

	angular.module('flipBook')
		.directive('navigation', function() {

			NavigationCtrl.$inject = ['$rootScope', '$sce', '$scope', '$element', '$attrs', '$state', '$filter', 'ngAudio', 'NarratorService', 'elapsedFilter', 'NoteService'];

			return {
				bindToController: true,
				controller: NavigationCtrl,
				controllerAs: 'ctrl',
				restrict: 'E',
				templateUrl: '/js/components/navigation/navigation.html',
				scope: {
				}
			};

			function NavigationCtrl($rootScope, $sce, $scope, $element, $attrs, $state, $filter, ngAudio, NarratorService, elapsedFilter, NoteService){

				var current = $state.current.name;

				$scope.narrator = NarratorService.narrator;
				$scope.track = NarratorService.audio[$state.current.name][$scope.narrator] || false;
				$scope.audio = false;
				$scope.note = null;
				$scope.playing = false;
				$scope.play = play;
				$scope.pause = pause;
				$scope.stop = stop;
				$scope.rewind = rewind;
				$scope.forward = forward;
				$scope.toggleNote = toggleNote;
				$scope.showNote = false;
				$scope.toggleDropdown = toggleDropdown;
				$scope.showNarratorDropdown = false;
				$scope.changeNarrator = changeNarrator;
				$scope.narrators = [
					{ 
						icon: 'male',
						name: 'Male Narrator',
						value: 'male'
					},
					{
						icon: 'female',
						name: 'Female Narrator',
						value: 'female'
					},
					{ 
						icon: 'none',
						name: 'No Narrator',
						value: false
					}
				];

				activate();

				function activate(){
					if($scope.narrator !== 'none' && $scope.track){
						$scope.audio = ngAudio.load($scope.track);
						play();
					}
					$rootScope.$on('$stateChangeSuccess', function(){
						if($scope.audio){
							stop();	
						}
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

				function toggleDropdown(){
					$scope.showNarratorDropdown = !$scope.showNarratorDropdown;
				}

				function changeNarrator(name){
					stop();
					$scope.narrator = name;
					if($scope.narrator){
						$scope.track = NarratorService.audio[$state.current.name][$scope.narrator] || false;
						$scope.audio = ngAudio.load($scope.track);	
						play();
					}
				}
			}
		
		});
})();