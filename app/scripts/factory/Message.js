(function() {
	function Message ($firebaseArray) {
		var ref = firebase.database().ref().child("messages");
		var messages = $firebaseArray(ref);
		var sentAt = firebase.database().ref("sessions");
		
		return {
			getByRoomId: function (roomId) {
				return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));	
			},
			
			send: function(newMessage, currentUser, currentRoom) {
				messages.$add({content: newMessage,
							   author: currentUser,
							   roomId: currentRoom,
							   sentAt: sentAt.push({firebase.database.ServerValue.timeStamp});
							  });
			}
		};
	}
	
	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message]);
})();