//part-1

var en = "Hello world";
console.log (en + ' : in English') //English

var Duits = "Hallo Welt";
console.log (Duits + ' : in Duits') //Duits

var frans = "Bonjour le monde";
console.log (Duits + ' : in frans') //Frans

var italiaans = "Ciao mondo";
console.log (italiaans + ' : in Italiaans') //Italiaans

var DNederlands = "Hallo Wereld";
console.log (DNederlands + ' : in Nederlands') //Nederlands

//part-2

console.log('I\'m awesome');

//part-3 

let x ;
 console.log('the value of my variable x will be: undefined');
 console.log(x);

 let x =3;
console.log('the value of x will be: 3');
console.log(x);

 //part-4

 let y ;
 console.log('the value of my variable x will be: undefined');
 console.log(y);

 let y = 'aya';
 console.log('the value of my string will be: aya');
 console.log(y)

 let y = 'happy';
 console.log('the value of my string will be: happy');
 console.log(y)

 //part-5

 let z = 7.25
console.log(z);

let a = Math.round(z);
console.log(a);

let b = 0
if (a < z)
{
    console.log (b + z);
}
else 
{
    console.log (b + a);
}
//or 
let b = Math.max(a , z);
console.log(b);

//part-6

let array =[]
console.log ("the value of the array is : []");
console.log (array);

var myFavoriteAnimals = ["cats", "Dogs", "Hamsters"];
console.log (myFavoriteAnimals);

myFavoriteAnimals.push ("baby pig"); 
console.log (myFavoriteAnimals);

//part-7

let myString = "this is a test"
console.log (myString);

console.log(myString.length);

//part-8

let myName = "Aya";
let yourName = " i don't know " ;
let myAge = 26
let yourAge = " i don't know ";

console.log ('The value of my variable myName is: ' + myName);
console.log ('the type of your variables is : string');

console.log ('The value of my variable yourName is: ' + yourName);
console.log ('the type of your variables is : string');

console.log ('The value of my variable myAge is: ' + myAge);
console.log ('the type of your variables is : number');

console.log ('The value of my variable yourAge is: ' + yourAge);
console.log ('the type of your variables is : string');

console.log (typeof myName );
"string"
console.log (typeof yourName);
"string"
console.log (typeof myAge);
"number"
console.log (typeof yourAge);
"string"

if (typeof myName == typeof myAge) {
    console.log('SAME TYPE');
}
else
{
    console.log ("Different type");
}

if (typeof myName == typeof myName) {
    console.log('SAME TYPE');
}
else
{
    console.log ("Different type");
}

//part-9

x=7
x= x %3
console.log ('The new value of x would be : 1');

var x = 10;
var y = 3;
var z = x % y;
console.log (z);
console.log ('The value of z would be : 1');

var x = 5;
var y = 3;
var z = x % y;
console.log (z);
console.log ('The value of z would be : 2');

var x = 15;
var y = 9;
var z = x % y;
console.log (z);
console.log ('The value of z would be : 6');

//part-10

let arr1 = ["Aya", "Alhamwi", 26];
console.log (arr1);
console.log ('the type of the first element in the array is ',typeof arr1[0]);
console.log ('the type of the first element in the array is  string' );
console.log ('the type of the third element in the array is ',typeof arr1[2]);
console.log ('the type of the third element in the array is number' );
console.log ( 'the type of the array is ' ,typeof arr1);
console.log ('the type of the array is object' );
console.log ('Yes, I Can store multiple types in an array');


let x = 6/0;
let y = 10/0;
if ( x === y )
    console.log ( 'Equal value and Equal type' );
else
{
console.log ( 'Different value or Different type' );
}

let a = 10/2;
let b = 8/4;
console.log ('Equal value and Equal type');

let a = 9/3 ;
let b = Aya;
console.log ( 'Different value or Different type' );
