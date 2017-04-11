(function() {
	function Room($firebaseArray) {
		var ref = firebase.database().ref().child("rooms");
		var rooms = $firebaseArray(ref);
		
		rooms.$add({ all: ""}).then(function(ref) {
			var id = ref.key;
			rooms.$indexFor(id);
		});
		
		return {
			all: rooms
		};
	}
	
	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();