(function() {
     function config($stateProvider, $locationProvider) {
        $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
         
     $stateProvider
         .state('mainView', {
             url: '/',
             controller: 'ChatRoomCtrl',
             templateUrl: '/templates/chat-room.html'
         });
     }
 
     angular
         .module('blocChat', ['firebase','ui.router'])
         .config(config);
 })();