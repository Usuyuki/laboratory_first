function watchRepeat() {
  showClock();
  todayRemain();
}

//時計用桁数調整
function set2fig(num) {
  // 桁数が1桁だったら先頭に0を加えて2桁に調整する
  var ret;
  if (num < 10) {
    ret = "0" + num;
  } else {
    ret = num;
  }
  return ret;
}

function showClock() {
  var nowTime = new Date();
  var nowUnixTime = nowTime.getTime();

  var nowYear = nowTime.getFullYear();
  // getYearは2000年問題の関係で4桁返してくれないのでgetFullYearを使用
  var nowMonth = nowTime.getMonth() + 1;
  //getMonthは0~11で返ってくるので1足した
  var nowDate = nowTime.getDate();
  var nowHour = set2fig(nowTime.getHours());
  var nowMin = set2fig(nowTime.getMinutes());
  var nowSec = set2fig(nowTime.getSeconds());
  var msg =
    "<span class='main-date'>" +
    nowYear +
    "年" +
    nowMonth +
    "月" +
    nowDate +
    "日" +
    "</span><span class='main-hour'>" +
    nowHour +
    ":" +
    nowMin +
    ":<span class='main-second'>" +
    nowSec +
    "</span>";
  document.getElementById("Watch_main_JST").innerHTML = msg;

  //時間リアルタイム表示用(ホームUTC)

  var nowYear = nowTime.getUTCFullYear();
  // getYearは2000年問題の関係で4桁返してくれないのでgetFullYearを使用
  var nowMonth = nowTime.getUTCMonth() + 1;
  //getMonthは0~11で返ってくるので1足した
  var nowDate = nowTime.getUTCDate();
  var nowHour = set2fig(nowTime.getUTCHours());
  var nowMin = set2fig(nowTime.getUTCMinutes());
  var nowSec = set2fig(nowTime.getUTCSeconds());
  var msg =
    "<span class='main-date'>" +
    nowYear +
    "年" +
    nowMonth +
    "月" +
    nowDate +
    "日" +
    "</span><span class='main-hour'>" +
    nowHour +
    ":" +
    nowMin +
    ":<span class='main-second'>" +
    nowSec +
    "</span>";
  document.getElementById("Watch_main_UTC").innerHTML = msg;

  var msg = "<span class='main-date'>" + nowUnixTime + "</span>";
  document.getElementById("Watch_main_UNIX").innerHTML = msg;
}

//-----------------------------------------------------

function todayRemain() {
  var nowTime = new Date();

  var endToday = new Date(
    nowTime.getFullYear(),
    nowTime.getMonth(),
    nowTime.getDate() + 1
  );
  var startToday = new Date(
    nowTime.getFullYear(),
    nowTime.getMonth(),
    nowTime.getDate()
  );

  var todayRemain = endToday.getTime() - nowTime.getTime(); //   1秒あたり995すすむ←？？
  document.getElementById("todayRemain").innerHTML = todayRemain;

  document.getElementById("todayRemainSec").innerHTML =
    todayRemain / 1000 / 60 + "分";
}
setInterval("watchRepeat()", 1000);
// ここまで
