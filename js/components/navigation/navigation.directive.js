(function(){
	'use strict';

	angular.module('flipBook')
		.directive('navigation', function() {

			NavigationCtrl.$inject = ['$sce', '$scope', '$element', '$attrs', '$state', '$filter', 'NarratorService', 'NoteService'];

			return {
				bindToController: true,
				controller: NavigationCtrl,
				controllerAs: 'ctrl',
				restrict: 'E',
				templateUrl: '/js/components/navigation/navigation.html',
				scope: {
				}
			};

			function NavigationCtrl($sce, $scope, $element, $attrs, $state, $filter, NarratorService, NoteService){

				var current = $state.current.name;

				$scope.note = null;
				$scope.toggleNote = toggleNote;
				$scope.showNote = false;

				activate();

				function activate(){
					getNote()
						.then(function(response){
							var note = $filter('filter')(response.data, {page: $state.current.name}, true)[0];
							if(note.text){
								note.text = $sce.trustAsHtml(note.text);	
								$scope.note = note;
							}
						});
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