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