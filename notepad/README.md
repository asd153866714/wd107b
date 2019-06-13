# 記事本

線上使用 : https://asd153866714.github.io/wd107b/notepad/notepad.html

## 功能

1.將輸入的標題和內容儲存
2.網頁關閉再開啟後內容不會遺失

## 技術手段

使用localStorage

輸入標題和內容之後，按下"Save"

function save() {
  var title = oTitle.value;
  var text  = oText.value;
  window.localStorage.setItem("notepad:"+title, text);
  showList();
}

將 標題 和 本文 的內容指派給 title 和 text 這兩個變數

利用 window.localStorage.setItem("notepad:"+title, text);  以 (key,value) 的形式將內容儲存到 localstorage
然後使用 showList() 函數


function showList() {
  var rowHtml = "";
  for (var title in window.localStorage) {
    if (title.startsWith("notepad:")) {
      rowHtml += "<tr><td><a onclick=\"loadDoc('"+title+"')\">"+title.substring(8)+"</a></td></tr>"
    }
  }
  oList.innerHTML = rowHtml;
}
先指派一個空字串 rowHtml 
用 for...in 迴圈取出 localstorage 裡的每個項目
在開頭為 "notepad" 的情況下，以 table 的形式將內容加上 rowHtml 這個空字串，並讓每條內容被滑鼠點擊時觸發 loadDoc() 函數
使用 oList.innerHTML = rowHtml 將每條標題顯示在下方的 table 中


function loadDoc(title) {
  oTitle.value = title.substring(8);
  oText.value  = window.localStorage.getItem(title);
}

loadDoc() 函數被觸發後會將儲存的標題和本文顯示在上方的欄位中
