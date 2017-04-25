(function() {
	function AddUserCtrl($uibModalInstance, $scope, $cookies) {
		$scope.ok = function(currentUser) {
			$cookies.put('blocChatCurrentUser', currentUser);
			
			if (currentUser == "") {
				$scope.warning = "Must Create Username!"
				} else {$uibModalInstance.close('ok')};
		};
	}
	
	angular
		.module('blocChat')
		.controller('AddUserCtrl', ['$uibModalInstance', '$scope', '$cookies', AddUserCtrl]);
})();