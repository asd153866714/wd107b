// 用二分搜尋法搜尋一個已經排好序的陣列。
// 範例： find([ 1, 4, 5, 8, 9], 5) => 2 , 找不到時傳回 -1。
function find([a,b,c,d,e],m)
{
    var n = [a,b,c,d,e];
    if(a<=m<=e)
    {
        if(m==n[0])console.log(n[0]);
        else if(m==n[1])console.log(n[1]);
        else if(m==n[2])console.log(n[2]);
        else if(m==n[3])console.log(n[3]);
        else if(m==n[4])console.log(n[4]);
        else console.log(-1);

    }
    else console.log(-1);
}
console.log(find([1,3,4,6,9],4));