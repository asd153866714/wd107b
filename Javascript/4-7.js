// 請寫一個函數 random(n, a, b) 可以產生 n 個介於 a 到 b 之間的浮點亂數？
// 範例： random(3, 10, 20)= [13.76, 19,23, 14,11]
function random(n,a,b)
{
    var s = [];
    for(i=1;i<=n;i++)
    {
        r = Math.random()*a+b;
        s.push(r);
    }
    console.log(s);
}
console.log(random(4,10,11));