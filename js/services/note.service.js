(function(){
    'use strict'

    angular.module('flipBook.services')
        .factory('NoteService', NoteService);

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

})();