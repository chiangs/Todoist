angular.module('todo').factory('todoService',function($http,  $filter, authService, $location) {
	var service = {};

	var BASE_URL = 'http://localhost:8080/RESTTodo/api/user';

	var todos = [];
	
	var completeDate = '';
		
	var checkLogin = function() {
		if (!authService.getToken().id) {
			$location.path('/login');
		}
	}

	service.index = function() {
		checkLogin();
		return $http({
			method : 'GET',
			url : BASE_URL + '/'+ authService.getToken().id + '/todo'
		}).then(function(res) {
			return res;
		})
	}
	
	service.show = function(id) {
		checkLogin();
		return $http({
			method : 'GET',
			url : BASE_URL + '/'+ authService.getToken().id + '/todo/' + id
		})
	}

	service.create = function(todo) {
		checkLogin();
		return $http({
			method : 'POST',
			url : BASE_URL + '/'+ authService.getToken().id + '/todo',
			headers : {
				'Content-Type' : 'application/json'
			},
			data : todo
		})
	};

	service.destroy = function(id) {
		checkLogin();
		return $http({
			method : 'DELETE',
			url : BASE_URL + '/'+ authService.getToken().id + '/todo/' + id
		})
	}

	service.update = function(todo) {
		checkLogin();
		if (todo.completed == false) {
			todo.completeDate = '';
		} else {
		todo.completeDate = $filter('date')(Date.now(), 'MM/dd/yyyy');
		}
		return $http({
			method : 'PUT',
			url : BASE_URL + '/'+ authService.getToken().id + '/todo/' + todo.id,
			headers : {
				'Content-Type' : 'application/json'
			},
			data : todo
		})
	};

	return service;
})