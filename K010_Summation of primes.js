// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

const before = Date.now()
var gMod = require("./MyJSlib.js")
var sum=2;
var i=3;
var max=2000000;
for(i;i<=max;i=i+2){
    if (gMod.isPrime(i)) {
        sum=sum+i
    }
}
console.log('Sum of Primes until ' + max + ' = ' + sum )
console.log('Execution Time ' + (Date.now() - before) + ' msec')