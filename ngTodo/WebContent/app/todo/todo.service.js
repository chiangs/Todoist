angular.module('todo').factory('todoService', function($http) {
	var service = {};

	var BASE_URL = 'http://localhost:8080/RESTTodo/api/user';

	var todos = [];

	service.index = function() {
		return $http({
			method : 'GET',
			url : BASE_URL + '/1/todos'
		}).then(function(res) {
			return res;
		})
	}

	service.create = function(todo) {
		return $http({
			method : 'POST',
			url : BASE_URL + '/1/todo',
			headers : {
				'Content-Type' : 'application/json'
			},
			data : todo
		})
	};

	service.destroy = function(id) {
		return $http({
			method : 'DELETE',
			url : BASE_URL + '/1/todo/' + id
		})
	}

	service.update = function(todo) {
		return $http({
			method : 'PUT',
			url : BASE_URL + '/1/todo/' + todo.id,
			headers : {
				'Content-Type' : 'application/json'
			},
			data : todo
		})
	};

	return service;
})