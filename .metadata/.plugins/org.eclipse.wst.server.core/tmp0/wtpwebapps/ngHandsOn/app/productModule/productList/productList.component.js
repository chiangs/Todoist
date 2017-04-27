angular.module('productModule')
	.component('productList', {
		templateUrl : 'app/productModule/productList/productList.component.html',
		controller : function(productService) {
			var vm = this;
			
			vm.list = [];
			
			vm.getNumList = function() {
				return vm.list.length;
			}
			
		    vm.list = productService.index();
			
			vm.onCreate = function(product) {
				productService.create(product);
				vm.list = productService.index();
				console.log(product);
			}
			
		},
		controllerAs : 'vm'
})