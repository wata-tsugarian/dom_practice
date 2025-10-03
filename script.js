const afterText = "変えてみた";
const beforeText = "DOM、JavaScriptの練習";
const afterButtonText = "ヘッダーのテキストを戻すボタン"
const beforeButtonText = "ヘッダーのテキストを変えるボタン"
let changed = false;
const changeHeaderButton = document.getElementById("header-change-button")
changeHeaderButton.addEventListener("click", function() {
  let header = document.querySelector("header h1");
  if (changed === false) {
    header.textContent = afterText;
    changeHeaderButton.textContent = afterButtonText;
    changed = true;
  } else {
    header.textContent = beforeText;
    changeHeaderButton.textContent = beforeButtonText;
    changed = false;
  }
})