(function() {
     function config($stateProvider, $locationProvider) {
        $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
         
     $stateProvider
         .state('mainView', {
             url: '/mainView',
             controller: 'MainCtrl as main',
             templateUrl: '/pages/main.html'
         });
     }
 
     angular
         .module('blocChat', 'firebase', ['ui.router'])
         .config(config);
 })();