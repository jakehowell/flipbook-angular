(function(){
	'use strict'

	angular.module('flipBook.services').factory('NarratorService', NarratorService);
	angular.module('flipBook.services').factory('NoteService', NoteService);
	angular.module('flipBook.services').factory('VideoBannerService', VideoBannerService);

		NarratorService.$inject = ['ngAudio'];
		NoteService.$inject = ['$http'];

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

		function NoteService($http){
            var promise;
            var service;

            service = {
                get : function(){
                    if(!promise){
                        var promise = $http.get('assets/notes.json.js')
                            .success(function(response){
                                return response.data;
                            });
                        return promise;
                    }
                }
            };
            return service;
        }

        function VideoBannerService(){
            var service;
            service = {
                banners: [
                    {
                        page: 'whatIf',
                        banner: '/video/WhatIf.jpg',
                    },
                    {
                        page: 'products',
                        banner: '/video/Products.jpg',
                    },
                    {
                        page: 'company',
                        banner: '/img/Company.jpg',
                    },
                    {
                        page: 'opportunity',
                        banner: '/img/Opportunity.jpg',
                    }
                ]
            };
            return service;
        }

})();