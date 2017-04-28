angular.module('appModule', [ 'todo', 'ngRoute', 'static', 'nav' ]).config(
		function($routeProvider) {
			$routeProvider.when('/', {
				template : '<home></home>'
			}).when('/about', {
				template : '<about></about>'
			}).when('/contact', {
				template : '<contact></contact>'
			}).when('/todo', {
				template : '<todo-list></todo-list>'
			}).when('/todo/:id', {
				template : '<todo-show></todo-show>'
			}).otherwise({
				template : '<error></error>'
			})
		});