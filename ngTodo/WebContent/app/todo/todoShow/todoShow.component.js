angular.module('todo')
	.component('todoShow', {
	templateUrl: 'app/todo/todoShow/todoShow.component.html',
	controller : function() {
		var vm = this;
		
		vm.editMode = false;
		vm.editTodo = null;
		vm.setEditTodo = function() {
			vm.editMode = true;
			vm.editTodo = angular.copy(vm.todo);
		}
		
//		vm.edit = function() {
//			vm.editMode = true;
//			vm.setEditTodo();
//		}
		
		vm.cancel = function() {
			vm.editMode = false;
			vm.editTodo = null;
		}
		
		vm.save = function() {
			vm.onUpdate({todo : vm.editTodo});
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
