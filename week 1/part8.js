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
//"string"
console.log (typeof yourName);
//"string"
console.log (typeof myAge);
//"number"
console.log (typeof yourAge);
//"string"

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