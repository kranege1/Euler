/* A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a^2 + b^2 = c^2  :  For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc. */

// Solution #1 by guessing via Random
var a=1
var b=1
var c=1
var i=0
var count=0
const before = Date.now()
function Rand(Rstart, Rend) {
    return Rstart+Math.floor(Math.random()*(Rend-Rstart))
}
do{
    a=Rand(200,600)
    b=Rand(200,600)
    c=Math.sqrt(a*a + b*b)
        if (c - Math.floor(c) == 0 ) {
            // console.log (a + '^2 + ' + b + '^2 = ' + c + '^2 --> Sum: ' + (a+b+c))
        }
    count++
}
while ((a+b+c) != 1000)
console.log ( ' Result (within ' + count + ' tries):     ' + a + '^2 + ' + b + '^2 = ' + c + '^2 --> Sum: ' + (a+b+c))
console.log('Execution Time ' + (Date.now() - before) + ' msec')