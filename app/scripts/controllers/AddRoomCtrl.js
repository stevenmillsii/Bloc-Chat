(function() {
	function AddRoomCtrl($ubiModal) {

		var $ctrl = this;
		$ctrl.items = ['item1', 'item2', 'item3'];
		
		$ctrl.animationsEnabled = true;
		
		$ctrl.open = function (size, parentSelector) {
			var parentElem = parentSelector ?
				angular.element($document[0].querySelector('.modal ' + parentSelector)) : undefined;
			var modalInstance = $ubiModal.open({
				animation: $ctrl.animationsEnabled,
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				templateUrl: 'add-room.html',
				controller: 'AddRoomCtrl',
				controllerAs: 'AddRoomCtrl',
				size: 'sm',
				appendTo: parentElem,
				resolve: {
					items: function () {
						return $ctrl.items;
					}
				}
			});
		}
		
	}
	
	angular
		.module('blocChat')
		.controller('AddRoomCtrl', 'ui.bootstrap' ['$ubiModal', AddRoomCtrl]);
})();