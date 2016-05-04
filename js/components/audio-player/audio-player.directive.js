(function(){
	'use strict';

	angular.module('flipBook')
		.directive('audioPlayer', function() {

			AudioPlayerCtrl.$inject = ['$rootScope', '$scope', '$element', '$attrs', '$state', 'ngAudio', 'NarratorService', 'elapsedFilter'];

			return {
				bindToController: true,
				controller: AudioPlayerCtrl,
				controllerAs: 'ctrl',
				restrict: 'E',
				replace: true,
				templateUrl: '/js/components/audio-player/audio-player.html',
				scope: {
				}
			};

			function AudioPlayerCtrl($rootScope, $scope, $element, $attrs, $state, ngAudio, NarratorService, elapsedFilter){

				$scope.narrator = NarratorService.narrator;
				$scope.audio = NarratorService.loaded[$state.current.name];
				$scope.note = null;
				$scope.play = play;
				$scope.pause = pause;
				$scope.stop = stop;
				$scope.rewind = rewind;
				$scope.forward = forward;
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
						value: 'none'
					}
				];

				activate();

				function activate(){
					if(!NarratorService.narrator){
						$state.go('intro');
					}else{
						if(NarratorService.narrator !== 'none'){
							play();
						}	
					}
					$rootScope.$on('$stateChangeSuccess', function(){
						if($scope.audio){
							stop();	
						}
					});
					document.addEventListener('click', function(event){
						if($scope.showNarratorDropdown){
							toggleDropdown();
						}
					}, true);
				}

				function play(){
					$scope.audio.play();
				}

				function pause(){
					$scope.audio.pause();
				}

				function stop(){
					$scope.audio.stop();
				}

				function rewind(){
					var currentProgress = $scope.audio.progress;
					if( (currentProgress - .05) > 0){
						$scope.audio.progress = currentProgress - .05;
					}else{
						$scope.audio.progress = 0;
					}
				}

				function forward(track){
					var currentProgress = $scope.audio.progress;
					if( (currentProgress + .05) < 1){
						$scope.audio.progress = currentProgress + .05;
					}else{
						$scope.audio.progress = 1;
					}
				}

				function toggleDropdown(){
					$scope.showNarratorDropdown = !$scope.showNarratorDropdown;
				}

				function changeNarrator(name){
					stop();
					$scope.narrator = name;
					NarratorService.narrator = name;
					NarratorService.load(name);
					$scope.audio = NarratorService.loaded[$state.current.name]
					if(NarratorService.narrator !== 'none'){
						play();
					}
				}
			}
		
		});
})();