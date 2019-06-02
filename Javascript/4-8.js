// 寫一個程式做因數分解。
// 範例：factor(45) => [3, 3, 5]
function factor(n)
{
    var a=[];
    while(n!=1)
    {
        for(i=2;i<=n;i++)
        {
            if(n%i==0)
            {
                a.push(i);
                n=n/i;
                break;
            }
        }
    }
    console.log(a);
}
console.log(factor(45));