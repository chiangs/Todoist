angular.module('todo')
.filter('incompleteFilter', function(){
	
	return function(todos, booleanMark) {
		var results = [];
		if (booleanMark == true ) {
			results = todos;
		} else {
			todos.forEach(function(todo) {
				if (todo.completed == false) {
					results.push(todo);
				}
			});
		}
		return results;
	}
})