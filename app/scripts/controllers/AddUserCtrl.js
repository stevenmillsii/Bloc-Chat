(function() {
	function AddUserCtrl($uibModalInstance, $scope) {
		$scope.ok = function(currentUser) {
			$cookies.put('blocChatCurrentUser', currentUser);
			$uibModalInstance.close('ok');
		};
	}
	
	angular
		.module('blocChat')
		.controller('AddUserCtrl', ['$uibModalInstance', '$scope', AddUserCtrl]);
})();