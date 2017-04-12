(function() {
	function Room($firebaseArray) {
		var ref = firebase.database().ref().child("rooms");
		var rooms = $firebaseArray(ref);
		
		return {
			all: rooms,
			addRoom: function(roomName) {
				rooms.$add({name: roomName});
			}
		};
	}
	
	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();