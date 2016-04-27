(function(){
	'use strict'

	angular.module('flipBook.services')
		.factory('NarratorService', NarratorService);

		function NarratorService(){
			var service;

			service = {
				narrator : 'male',
				audio: {
					intro: false,
					home: false,
					whatIf: {
						male: '/audio/what-if_male.mp3',
						female: '/audio/what-if_female.mp3',
						none: ''
					},
					products: {
						male: '/audio/products_male.mp3',
						female: '/audio/products_female.mp3',
						none: ''
					},
					company: {
						male: '/audio/company_male.mp3',
						female: '/audio/products_female.mp3',
						none: ''
					},
					opportunity: {
						male: '/audio/opportunity_male.mp3',
						female: '/audio/opportunity_female.mp3',
						none: ''
					}
				}
			}

			return service;
		}

})();