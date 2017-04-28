angular.module('example')
.filter('fuzzySearch', function() {
  return function(people, text) {
    if (!text) return people;
    var results = [];
    people.forEach(function(person) {
      if(person.lname.toLowerCase().includes(text.toLowerCase())) {
        results.push(person);
      }
    }) // end forEach
    return results;
  }
  // end function
})
