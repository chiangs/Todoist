angular.module('todo').component('todoList', {
	templateUrl : 'app/todo/todoList/todoList.component.html',
	controller : function(todoService, $filter) {
		var vm = this;
		vm.todos = [];
		
		vm.showTable = true;
		vm.selected = null;
		
		vm.countTodos = function() {
			var counter = 0;
			for (var i = 0; i < vm.todos.length; i++) {
				if (vm.todos[i].completed == false) {
					counter++
				}
			}
			return counter;
		}
		
		vm.addToList = function(object) {
			todoService.create(object).then(function(res){				
				vm.reload();
			});
		}
		
		vm.deleteTodo = function(todo) {
			todoService.destroy(todo.id).then(function(res){
				vm.reload();
			});
		}
		
		vm.updateTodo = function(todo) {
			todoService.update(todo).then(function(res){
				vm.reload();
			});
		}

		vm.reload = function() {
			todoService.index().then(function(res){
				vm.todos = res.data;
			});
		}
		
		
		vm.displayTodo = function(todo) {
			vm.showTable = false;
			vm.selected = todo;
		}
		
		vm.displayTable = function() {
			vm.showTable = true;
			vm.selected = null;
		}
		
		vm.accomplishmentStatus = function() {
			var numDone = vm.countTodos();
			if (numDone > 10)
				return 'danger';
			if (numDone > 5)
				return 'warning';
			return 'safe';
		}
		vm.reload();
	},
		controllerAs : 'vm'
})