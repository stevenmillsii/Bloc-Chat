(function() {
	function ChatRoomCtrl(Room, $uibModal, $scope, Message) {
		$scope.currentRoom = null;
		$scope.messages = null;
		this.rooms = Room.all;
		this.open = function (size, parentSelector) {
			var modalInstance = $uibModal.open({
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				templateUrl: '/templates/add-room.html',
				controller: 'AddRoomCtrl'
			});
		}
		
		this.selectRoom = function (room) {
			$scope.currentRoom = room;
			$scope.messages = Message.getByRoomId(room.$id);
		}
	}
	
	angular
		.module('blocChat')
		.controller('ChatRoomCtrl', ['Room', '$uibModal', '$scope', 'Message', ChatRoomCtrl]);
})();