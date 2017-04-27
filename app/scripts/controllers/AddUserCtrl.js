(function() {
    function AddUserCtrl($uibModalInstance, $scope, $cookies) {
        $scope.ok = function(currentUser) {
            if (!currentUser || currentUser == "") {
              $scope.warning = "Must Create Username!"
            } else {
              $cookies.put('blocChatCurrentUser', currentUser);
              $uibModalInstance.close('ok')
            }
        };
    }
        
    angular
        .module('blocChat')
        .controller('AddUserCtrl', ['$uibModalInstance', '$scope', '$cookies', AddUserCtrl]);
})(); 