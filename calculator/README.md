# 簡易計算機

線上使用 : https://asd153866714.github.io/wd107b/calculator/calculator.html

## 功能

1. 按鈕式計算機
2. 有基本加減乘除的運算功能
3. 使用數字按鈕和運算符號按鈕進行運算

## 技術手段

舉例 : 2 + 3 = 5

			function insert(num){
				document.form.textview.value=document.form.textview.value + num;
			}
			
			function equal(){
				document.form.textview.value=eval(document.form.textview.value);
			}


可以用 document.form.textview.value=document.form.textview.value + num; 
把 2 加上 value 的值做為新的一個 vaule， 以此類推

接著加上 "+" 和 "3" ， 然後按下 "=" 使用 document.form.textview.value=eval(document.form.textview.value); 進行運算 並顯示出結果

於是會顯示 5

			function clean(){
				document.form.textview.value="";
			}

			function back(){
				var answer = document.form.textview.value;
				document.form.textview.value=answer.substring(0,answer.length-1);
			}

按下 "C" 會使用 document.form.textview.value=""; 清空顯示欄

按下 "B" 會使用 document.form.textview.value=answer.substring(0,answer.length-1); 扣除顯示欄最右邊的項目
