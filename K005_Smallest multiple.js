// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
var i=18
var x=380
do {
    if (x % i == 0){
        i=i-1
    }
    else {
        x=x+380
        i=18
    }
}
while(i>=11)
console.log( 'Smalles Number = ' + x)
for (var j=2;j<=20;j++){
    console.log(x + ' / ' + j + ' = ' + (x/j))
}