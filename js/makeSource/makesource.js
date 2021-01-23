function changeUrlToSource() {
  console.log("as");
  const net_title = document.getElementById("net_title").value;
  const url = document.getElementById("url").value;
  const nameOfOrganization = document.getElementById("nameOfOrganization")
    .value;
  const dateOfView = document.getElementById("dateOfView").value;
  let string =
    net_title +
    " [URL:" +
    url +
    ",団体名:" +
    nameOfOrganization +
    ",閲覧日時:" +
    dateOfView +
    "]";
  resultOfUrl.innerHTML = string;
}

function changeBookToSource() {
  console.log("as");
  const book_title = document.getElementById("book_title").value;
  const author = document.getElementById("author").value;
  const titleOfPaper =
    document.getElementById("titleOfPaper").value !== ""
      ? "論文誌名:" + document.getElementById("titleOfPaper").value + ","
      : "";
  const volulme =
    document.getElementById("volulme").value !== ""
      ? "巻号:" + document.getElementById("volulme").value + ","
      : "";
  const page =
    document.getElementById("page").value !== ""
      ? "ページ:" + document.getElementById("page").value + ","
      : "";
  const publishDate = document.getElementById("publishDate").value;
  let string =
    book_title +
    " [著者:" +
    author +
    "," +
    titleOfPaper +
    volulme +
    page +
    "閲覧日時:" +
    publishDate +
    "]";
  resultOfBook.innerHTML = string;
}

function copyUrl() {
  var pTag = document.getElementById("resultOfUrl");
  // コピー内容を選択する.
  let range = document.createRange();
  range.selectNodeContents(pTag);
  let selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  // 選択したものをコピーする.
  document.execCommand("copy");
  // コピー内容の選択を解除する.
  selection.removeAllRanges();
  endCopyUrl.innerHTML = "<span class='fade-out'>コピーしましたよ！</span>";
  const end = () => {
    endCopyUrl.innerHTML = "";
  };

  timeoutID = window.setTimeout(end, 2500);
}

function copyBook() {
  var pTag = document.getElementById("resultOfBook");
  // コピー内容を選択する.
  let range = document.createRange();
  range.selectNodeContents(pTag);
  let selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  // 選択したものをコピーする.
  document.execCommand("copy");
  // コピー内容の選択を解除する.
  selection.removeAllRanges();
  endCopyBook.innerHTML = "<span class='fade-out'>コピーしましたよ！</span>";
  const end = () => {
    endCopyBook.innerHTML = "";
  };

  timeoutID = window.setTimeout(end, 2500);
}

function autoDate() {
  var nowTime = new Date();

  var nowYear = nowTime.getFullYear();
  // getYearは2000年問題の関係で4桁返してくれないのでgetFullYearを使用
  var nowMonth = nowTime.getMonth() + 1;
  //getMonthは0~11で返ってくるので1足した
  var nowDate = nowTime.getDate();
  var nowHour = nowTime.getHours();
  var nowMin = nowTime.getMinutes();
  console.log("aaaa");
  document.getElementById("dateOfView").value =
    nowYear +
    "年" +
    nowMonth +
    "月" +
    nowDate +
    "日" +
    nowHour +
    "時" +
    nowMin +
    "分";
}
