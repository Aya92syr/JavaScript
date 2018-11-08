let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

//add 'turtle'
favoriteAnimals.push ("turtle"); 
console.log (favoriteAnimals);

//add "meerkat" after "blowfish"
favoriteAnimals.splice (1, 0, "meerkat");
console.log ('I think the new value of the array is : "blowfish", "meerkat", "capricorn", "giraffe", "turtle"') ;
console.log (favoriteAnimals);

console.log ('The array has a length of:' + favoriteAnimals.length);

//remove 'giraffe'
favoriteAnimals.splice (3, 1);
console.log (favoriteAnimals);

 //index of "meerkat"
favoriteAnimals.lastIndexOf ("meerkat");

console.log ('The item you are looking for is at index: \t 1');
console.log ('The item you are looking for is at index: \t ' + favoriteAnimals.lastIndexOf ("meerkat") );

