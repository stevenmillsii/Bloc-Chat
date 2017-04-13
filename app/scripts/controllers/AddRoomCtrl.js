(function() {
	function AddRoomCtrl($uibModalInstance, $scope, Room) {
		$scope.ok = function(roomName) {
			Room.addRoom(roomName);
			$uibModalInstance.close('ok');
		};
		
		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		}
		
	}
	
	angular
		.module('blocChat')
		.controller('AddRoomCtrl', ['$uibModalInstance', '$scope', 'Room', AddRoomCtrl]);
})();