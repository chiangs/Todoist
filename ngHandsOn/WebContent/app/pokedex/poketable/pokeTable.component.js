angular.module('pokedex').component('pokeTable', {
	templateUrl : 'app/pokedex/poketable/pokeTable.component.html',
	controller : function(pokemonService) {
		var vm = this;

		vm.pokemons = [];
		
		pokemonService.index().then(function(res){
			vm.pokemons = res.data;
			console.log(res);
		});

		vm.showTable = true;
		vm.selected = null;

		vm.showPokemon = function(poke) {
			vm.selected = poke;
			vm.showTable = false;
		}
		
		vm.goBack = function() {
			vm.selected = null;
			vm.showTable = true;
		}

	}, 
	controllerAs : 'vm'
})