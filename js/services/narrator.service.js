(function(){
	'use strict'

	angular.module('flipBook.services')
		.factory('NarratorService', NarratorService);

		NarratorService.$inject = ['ngAudio']

		function NarratorService(ngAudio){
			var service;

			service = {
				narrator : false,
				tracks: {
					male: {
						intro: '',
						home: '',
						whatIf: '/audio/what-if_male.mp3',
						products: '/audio/products_male.mp3',
						company: '/audio/company_male.mp3',
						opportunity: '/audio/opportunity_male.mp3'
					},
					female: {
						intro: '',
						home: '',
						whatIf: '/audio/what-if_male.mp3',
						products: '/audio/products_male.mp3',
						company: '/audio/company_male.mp3',
						opportunity: '/audio/opportunity_male.mp3'
					},
					none: {
						intro: '',
						home: '',
						whatIf: '',
						products: '',
						company: ''
					}
				},
				loaded: {},
				load: function(selection){
					angular.forEach(service.tracks[selection], function(value, key){
						var loaded = ngAudio.load(value);
						service.loaded[key] = loaded;
					});
				}
			}

			return service;
		}

})();