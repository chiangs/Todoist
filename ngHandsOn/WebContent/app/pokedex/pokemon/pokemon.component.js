angular.module('pokedex').component('pokemon', {
	templateUrl : 'app/pokedex/pokemon/pokemon.component.html',
	controller : function(pokemonService) {
		var vm = this;
		
		vm.pokemons = [];
	},
	
	controllerAs : 'vm',
	bindings : {
			disp : '<',
			displayTable : '&'
	}
})