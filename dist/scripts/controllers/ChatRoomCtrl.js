(function() {
	function ChatRoomCtrl(Room, $uibModal) {
		this.rooms = Room.all;
		this.open = function (size, parentSelector) {
			var modalInstance = $uibModal.open({
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				templateUrl: '/templates/add-room.html',
				controller: 'AddRoomCtrl'
			});
		}
	}
	
	angular
		.module('blocChat')
		.controller('ChatRoomCtrl', ['Room', '$uibModal', ChatRoomCtrl]);
})();