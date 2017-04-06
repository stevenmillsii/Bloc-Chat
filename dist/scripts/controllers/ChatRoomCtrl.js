(function() {
	function ChatRoomCtrl(Room) {
		this.rooms = Room.all;
	}
	
	angular
		.module('blocChat')
		.controller('ChatRoomCtrl', ['Room', ChatRoomCtrl]);
})();