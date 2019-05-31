// 給定兩個數字，請算出它們的最大公因數？
// 範例： commonFactor(12,15) => 3
function commonFactor(a,b)
{
    for(i=1;i<=b;i++)
    {
        if(a%i==0 && b%i==0)ans=i;
    }
    console.log(ans);
}
console.log(commonFactor(12,15));