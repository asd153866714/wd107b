// 請寫一個函數找出一個排序好陣列中差異最小的兩個數之距離？
// 範例： minGap([1,3,6,7,10]) = 1
function minGap()
{
    var a =[1,4,5,7,10]
    var min=a[1]-a[0];
    var gap;
    for(i=0;i<a.length;i++)
    {
        gap=a[i+1]-a[i];
        if(gap < min)
        {
            min=gap;
        }
    }
    console.log(min)
}
console.log(minGap());