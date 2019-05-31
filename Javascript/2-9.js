// 給你兩個數字，請算出這兩個數字之間有幾個質數(包含輸入的兩個數字)？
// 範例： countPrime(3, 7) => 3
function countPrime(a,b)
{
    var sum=0;
    for(i=a;i<=b;i++)
    {
        var n=0;
        for(j=2;j<i;j++)
        {
            if(i%j==0)n++;
        }
        if(n==0)sum++;
    }
    console.log(sum);
}
console.log(countPrime(3,11));