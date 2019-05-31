// 請檢查某數是否為質數？ 範例： isPrime(17) => true
function isPrime(a)
{
    var n=0;
    for(i=2;i<a;i++)
    {
        if(a%i==0)n+=1;   
    }
    if(n==1)console.log("false");
    else console.log("true")
}
console.log(isPrime(71))