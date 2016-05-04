(function(){
	'use strict';

	angular.module('flipBook')
		.directive('canvid', function() {

			CanvidCtrl.$inject = ['$scope', '$element', '$attrs'];

			return {
				bindToController: true,
				controller: CanvidCtrl,
				controllerAs: 'ctrl',
				restrict: 'E',
				templateUrl: '/js/components/canvid/canvid.html',
				scope: {
					name: '=',
					selector: '=',
					src: '=',
					frames: '=',
					cols: '=',
					width: '=',
					height: '=',
					loops: '=',
					fps: '=',
					end: '='
				}
			};

			function CanvidCtrl($scope, $elem, $attrs){

				activate();

				var control = canvid({
					selector: 'canvid > div',
					videos: {
						video: { 
							src: $attrs.src, 
							frames: $attrs.frames, 
							cols: $attrs.cols,
							loops: $attrs.loops || false,
							fps: $attrs.fps || false,
							end: $attrs.end || false 
						}
					},
					width: $attrs.width || 800,
					height: $attrs.height || 450,
					loaded: function(){
						$scope.loaded = true;
					}
				});
				$scope.idClass = $attrs.name;
				$scope.control = null;
				$scope.loaded = false;

				function activate(){
					build();
					$scope.$watch('loaded', function(){
						control.play('video');
					})
				}

				function build(){
					$scope.control = control;
				}

			}
		
		});
})();