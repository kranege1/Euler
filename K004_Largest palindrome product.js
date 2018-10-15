// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

var min = 100*100
var max= 999*999
var i=max
var s='Pals='
checkPal:
for (i;i>=min;i--) {
    if(isPalindome(i)) {
        s = s + i
        // console.log(i + ' ')   
        for (var j=100; j<=999; j++){
            if (i % j == 0){
                var div=i/j
                var Scheck=div.toString()
                if (Scheck.length==3) {
                console.log('Highest Palindrome 3 Digits = ' + i + ' (' + j + ' * ' + (i/j) + ')')  
                break checkPal
                }
            }
        }
    }
}


function isPalindome(x){
    var isP=false
    var rs=''
    var s=x.toString()
    for (var i=0;i<s.length;i++) {
        rs=s.substring(i,i+1) +rs
    }
    if (s==rs){
       isP=true  
    }
    return isP
}

