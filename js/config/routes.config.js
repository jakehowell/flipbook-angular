(function() {

  'use strict';
  
  angular.module('flipBook.config')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('intro', {
          url : '^/',
          views: {
            'view-main' : { 
              templateUrl: 'intro.html',
              controller: 'IntroController',
              controllerAs: 'ctrl'
            }
          }
        })

        .state('home', {
          url : '^/home',
          views: {
            'view-main' : {
              templateUrl: 'home.html',
              controller: 'HomeController',
              controllerAs: 'ctrl'
            }
          }
        })

        .state('whatIf', {
          url: '^/what-if',
          views: {
            'view-main' : {
              templateUrl: 'what-if.html',
              controller: 'WhatIfController',
              controllerAs: 'ctrl'
            }
          }
        })

        .state('products', {
          url: '^/products',
          views: {
            'view-main' : {
              templateUrl: 'products.html',
              controller: 'ProductsController',
              controllerAs: 'ctrl'
            }
          }
        })

        .state('company', {
          url: '^/company',
          views: {
            'view-main' : {
              templateUrl: 'company.html',
              controller: 'CompanyController',
              controllerAs: 'ctrl'
            }
          }
        })

        .state('opportunity', {
          url: '^/opportunity',
          views: {
            'view-main' : {
              templateUrl: 'opportunity.html',
              controller: 'OpportunityController',
              controllerAs: 'ctrl'
            }
          }
        })

  }])
      
})();