(function() {
	function BlocChatCookies ($cookies, $uibModal) {
		var currentUser = $cookies.get('blocChatCurrentUser');
		if (!currentUser || currentUser === '') {
			$uibModal.open({
             controller: 'AddUserCtrl as AddUser',
             templateUrl: '/templates/add-user.html'
			}) 
		}
		
	}
	
	angular
		.module('blocChat')
		.run(['$cookies', '$uibModal', BlocChatCookies]);
})();