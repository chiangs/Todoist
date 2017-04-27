angular.module('todo').component('todoList', {
	templateUrl : 'app/todo/todoList/todoList.component.html',
	controller : function(todoService) {
		var vm = this;
		vm.todos = [];
		
		vm.todos = todoService.index();
		
		vm.getNumIncomplete = function() {
			var counter = 0;
			for (var i = 0; i < vm.todos.length; i++) {
				if (vm.todos[i].completed == false) {
					counter++
				}
			}
			return counter;
		}
		
		vm.addToList = function(object) {
			todoService.create(object);
			vm.todos = todoService.index();
		}
		
		vm.showTable = true;
		vm.selected = null;
		
		vm.displayTodo = function(todo) {
			vm.showTable = false;
			vm.selected = todo;
		}
		
		vm.displayTable = function() {
			vm.showTable = true;
			vm.selected = null;
		}
		
		vm.updateTodo = function(todo) {
			todoService.update(todo);
			vm.todos = todoService.index();
		}
		
		vm.deleteTodo = function(todo) {
			todoService.destroy(todo.id);
			vm.todos = todoService.index();
		}
	
	},
		controllerAs : 'vm'
})