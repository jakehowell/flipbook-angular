(function(){
    'use strict';

    angular.module('flipBook')
        .controller('WhatIfController', WhatIfController);

        WhatIfController.$inject = ['$scope', '$state', 'IntroService']

        function WhatIfController ($scope, $state, IntroService){

            var scope = this;

            scope.narrator = IntroService.narrator;
            scope.go = $state.go;
            scope.toggleChecked = toggleChecked;
            scope.questions = [
                {
                    checked: false,
                    label: 'Spend more time with my family',
                    icon: 'family'
                },
                {
                    checked: false,
                    label: 'Wake up when I want',
                    icon: 'alarm'
                },
                {
                    checked: false,
                    label: 'Get out of debt',
                    icon: 'wallet'
                },
                {
                    checked: false,
                    label: 'Travel the world',
                    icon: 'plane'
                },
                {
                    checked: false,
                    label: 'Give more to my favorite charities',
                    icon: 'heart'
                },
                {
                    checked: false,
                    label: 'Focus more on my hobbies',
                    icon: 'golf'
                }
            ]

            activate();

            function activate(){
                if(!scope.narrator){
                    $state.go('intro');
                }
            }

            function toggleChecked(index){
                index.checked = !index.checked;
            }

        };

})();
