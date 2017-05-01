angular.module('nav').component('navbar', {
	templateUrl : 'app/nav/navbar/nav.component.html',
	controller : function(authService) {
	var vm = this;
	
	vm.isLoggedIn = function() {
		return isNaN(authService.getToken().id);
	}
		
	},
	controllerAs : 'vm'
})
