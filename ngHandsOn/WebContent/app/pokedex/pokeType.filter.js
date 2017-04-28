angular.module('pokedex')
.filter('filterType', function(){
	
	return function(pokemons, type) {
		var results = [];
		if (type == 'all') {
			results = pokemons;
		} else {
			pokemons.forEach(function(poke) {
				for (var i = 0; i < poke.types.length; i++) {
					if (poke.types[i].name == type) {
						results.push(poke);
					}
				}
			});
		}	
		return results;
	}
	
})