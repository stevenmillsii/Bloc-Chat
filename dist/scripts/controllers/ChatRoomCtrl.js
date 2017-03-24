(function() {
	function ChatRoomCtrl() {

	}
	
	angular
		.module('blocChat')
		.controller('ChatRoomCtrl', ['Room', ChatRoomCtrl]);
})();