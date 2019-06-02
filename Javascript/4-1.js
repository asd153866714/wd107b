// 請在一個已經排序的陣列中之正確位置插入一個數值。
// 範例： insert([1,2,5,6,7], 3) => [1,2,3,5,6,7]
function insert(n)
{
    a = [0,1,2,3,5];
    a.push(n);
    a.sort()
    console.log(a);
}
console.log(insert(6));