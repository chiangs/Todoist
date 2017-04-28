angular.module('pokedex').factory('pokemonService', function($http){
	var service = {};
	
	var BASE_URL = 'http://52.25.225.137:8080/pokemon/data/poke';

	service.index = function() {
		return $http({
			method : 'GET',
			url: BASE_URL
		})
	}
	
	return service;
	
})