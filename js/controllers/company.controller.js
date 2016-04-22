(function(){
	'use strict';

	angular.module('flipBook')
		.controller('CompanyController', CompanyController);

		CompanyController.$inject = ['$scope', '$state', 'IntroService']

		function CompanyController ($scope, $state, IntroService){

			$scope.narrator = IntroService.narrator;
			$scope.go = $state.go;
			$scope.calcEarn = 1000;
			$scope.calcInterest = .02;
			$scope.bank = 600000;
			$scope.updateEarnings = updateEarnings;
			$scope.updateInterest = updateInterest;
			$scope.calcRetirement = calcRetirement;
			$scope.earningsTable = [
				{
					label: '$1,000/month',
					amount: 1000
				},
				{
					label: '$2,500/month',
					amount: 2500
				},
				{
					label: '$5,000/month',
					amount: 5000
				}
			];
			$scope.interestTable = [
				{
					label: '2%',
					amount: .02
				},
				{
					label: '5%',
					amount: .05,
				},
				{
					label: '10%',
					amount: .1
				}
			];

			activate();

			function activate(){
				if(!$scope.narrator){
					$state.go('intro');
				}
				$scope.$watchGroup(['calcEarn', 'calcInterest'], function(newValues, oldValues){
					calcRetirement();
				});
			}

			function updateEarnings(amt){
				$scope.calcEarn = amt;
			}

			function updateInterest(amt){
				$scope.calcInterest = amt;
			}

			function calcRetirement(){
				$scope.bank = $scope.bank = ($scope.calcEarn * 12)/$scope.calcInterest;
			}

		};

})();
