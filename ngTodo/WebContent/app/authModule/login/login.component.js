angular.module('authModule').component('login', {
	templateUrl : 'app/authModule/login/login.component.html',
	controller : function(authService, $location) {
		var vm = this;
		vm.error = null;
		
		vm.login = function(user) {
			authService.login(user).then(function(){
				$location.path('/todo');
			}).catch(function(){
				vm.error = "Something wrong";
			})
		}
		
	},
	controllerAs : 'vm'
})