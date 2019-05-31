/*請寫一個程式計算 10! ，也就是 10*9*8*....*1 。 */
a=1;
sum=1;
while (a<=10){
    sum = sum*a;
    a=a+1;
}
console.log("ans=",sum);