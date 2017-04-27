angular.module('todo')
.factory('todoService', function(){
	var service = {};
	
	var todos = [
	      {
		        id : 1,
		        task : 'Go round mums',
		        description : '',
		        completed : false
		      },
		      {
		        id : 2,
		        task : 'Get Liz back',
		        description : '',
		        completed : false
		      },
		      {
		        id : 3,
		        task : 'Sort life out',
		        description : '',
		        completed :  false
		      }
		    ];
	
	service.index = function(){
		return todos;
	}
	
	service.create = function(object){
		var generateId = function() {
			  return todos[todos.length-1].id + 1;
			}
		var defCompleted = false;
		object.id = generateId();
		object.completed = defCompleted;
		todos.push(angular.copy(object));
		console.log(object);
		return object;
	}
	
	service.update = function(todo){
		todos.forEach (function(item) {
			if (item.id == todo.id) {
				item.task = todo.task;
				item.description = todo.description;
				item.completed = todo.completed;
			}
		})
	}
	
	service.destroy = function(id) {
		for (var i = 0; i < todos.length; i++) {
			console.log(id);
			if (todos[i].id == id) {
				todos.splice(i,1);
			}
		}
	}
	
	return service;
})