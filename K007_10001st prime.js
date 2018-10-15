var max= 10001
var count=2
var i=3
var s=''
do{
    var j=3
    var isPrime=true
    for (j;j<=Math.sqrt(i);j=j+2){
        if(i % j == 0){
            isPrime=false
        }
    }
    if (isPrime) {
        s=count  + 'th Prime = ' + i
        // console.log(count + 'th Prime = ' + i)
        count++
        break;
    }
    i=i+2
}
while(count<=max)
console.log('=====================================')
console.log(s)
