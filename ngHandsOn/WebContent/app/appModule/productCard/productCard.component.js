angular.module('appModule')
	.component('productCard', {
		templateUrl : 'app/appModule/productCard/productCard.component.html',
		controller : function() {
		var vm = this;
		},
		  controllerAs : 'vm',
		  bindings : {
				product : '<'
		  }
	})