var mainModule = angular.module('main', [  'ui.bootstrap', 'ui.utils', 'smartTable.table' ]);

mainModule.controller('PageCtrl', function($scope) {

	$scope.tabs = [ {
		title : "Home",
		template : "/view/home",
		enabled : true,
		closable : false
	}, {
		title : "Thing",
		template : "/view/thing",
		enabled : true,
		closable : true
	} ];

	$scope.removeTab = function(index) {
		$scope.tabs[index].enabled = false;
	};

	$scope.enabledTab = function() {
		return function(friend) {
			return friend.enabled;
		};
	};

});
