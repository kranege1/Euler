
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

var value = 600851475143
var max = Math.sqrt(600851475143)
var i = 3
var count=0
var sum=0
var s='factor(600851475143)='
for (i;i<max;i = i + 2){
    if (value % i == 0) {
        s=s + i + '*'
    }
    //if (count % 100 ==0 ) {
    //    console.log( i )
    //}
count++
}
console.log( s )
