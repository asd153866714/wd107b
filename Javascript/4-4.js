// 請算出某陣列的平均值？
// 範例： mean([1,2,3,4,5]) => 3
function mean(a,b,c,d,e)
{
    var sum=0;
    n = [a,b,c,d,e];
    for(i=0;i<n.length;i++)
    {
        sum=sum+n[i];
    }
    m=sum/n.length;
    console.log(m);
}
console.log(mean(0,1,2,3,4))