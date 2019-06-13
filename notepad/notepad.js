var oTitle = document.getElementById("title");
var oText  = document.getElementById("text");
var oList = document.getElementById("list");

function save() {
  var title = oTitle.value;
  var text  = oText.value;
  window.localStorage.setItem("notepad:"+title, text);
  showList();
}

function showList() {
  var rowHtml = "";
  for (var title in window.localStorage) {
    if (title.startsWith("notepad:")) {
      rowHtml += "<tr><td><a onclick=\"loadDoc('"+title+"')\">"+title.substring(8)+"</a></td></tr>"
    }
  }
  oList.innerHTML = rowHtml;
}

function loadDoc(title) {
  oTitle.value = title.substring(8);
  oText.value  = window.localStorage.getItem(title);
}