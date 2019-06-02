// 請檢查某數是否為質數？ 範例： isPrime(17) => true
function isPrime(a)
{
    for(i=2;i<a;i++)
    {
        if(a%i==0)   
        return false;
    }
    return true;
}
console.log(isPrime(71))