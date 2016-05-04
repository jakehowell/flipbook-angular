(function(){

	angular.module('flipBook', [
		'ui.router',

		'flipBook.config',
		'flipBook.services',
		
		'ngTouch',
        'ngAudio'

		]);
	
	angular.module('flipBook.config', []);
	angular.module('flipBook.services', []);

})();
