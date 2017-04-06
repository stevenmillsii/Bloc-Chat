(function() {
     function config($stateProvider, $locationProvider) {
        $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
         
     $stateProvider
         .state('chatRoom', {
             url: '/',
             controller: 'ChatRoomCtrl as main',
             templateUrl: '/templates/chat-room.html'
         });
     }
 
     angular
         .module('blocChat', ['firebase','ui.router'])
         .config(config);
 })();