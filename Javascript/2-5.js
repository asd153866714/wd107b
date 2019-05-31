// 請將分數轉換為等第 90+=A, 80+=B, 70+=C, 69-=D
// 範例： degree(85) => 'B'
function degree(a)
{
    if(a>=90)console.log("A");
    else if(a>=80)console.log("B");
    else if(a>=70)console.log("C");
    else if(a<70)console.log("D");
}
console.log(degree(85));