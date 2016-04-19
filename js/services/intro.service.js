(function(){
	'use strict'

	angular.module('flipBook.services')
		.factory('IntroService', IntroService);

		function IntroService(){
			var service;

			service = {
				narrator : false
			}

			return service;
		}

})();