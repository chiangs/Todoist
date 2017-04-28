angular.module('todo')
	.component('todoShow', {
	templateUrl: 'app/todo/todoShow/todoShow.component.html',
	controller : function($routeParams, todoService) {
		var vm = this;
		if (!vm.todo && parseInt($routeParams.id)) {
			todoService.show(parseInt($routeParams.id)).then(function(res){
				  console.log(res.data);
				  vm.todo = res.data;
			  })
		}
		
		vm.editMode = false;
		vm.editTodo = null;
		vm.setEditTodo = function() {
			vm.editMode = true;
			vm.editTodo = angular.copy(vm.todo);
		}		
		
		vm.cancel = function() {
			vm.editMode = false;
			vm.editTodo = null;
		}
		
		vm.save = function() {
			vm.onUpdate({todo : vm.editTodo});
			vm.editTodo = null;
			vm.editMode = false;
		}
		
		vm.backButton = function() {
			if (parseInt($routeParams.id)) {
				$location.path('/todo')
			} else {
				vm.goBack();
			}
		}
		
		vm.saveButton = function() {
			if (parseInt($routeParams.id)) {
				todoService.update(vm.editTodo).then(function(res){
					vm.todo = res.data;
				});
			} else {
				vm.onUpdate({todo : vm.editTodo});
				vm.todo = vm.editTodo;
			}
			vm.editTodo = null;
			vm.editMode = false;
		}
	},
	controllerAs : 'vm',
	bindings : {
		todo : '<',
		goBack : '&',
		onUpdate : '&'
	}
})
