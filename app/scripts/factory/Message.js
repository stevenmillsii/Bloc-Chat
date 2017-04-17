(function() {
	function Message($firebaseArray) {
		var ref = firebase.database().ref().child("messages");
		var messages = $firebaseArray(ref);
		
		return {
			getByRoomId: function (roomId) {
				equalTo(messages, 1);	
			}
		};
	}
	
	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message]);
})();