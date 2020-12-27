function watchRepeat() {
  showClock();
  todayRemain();
  yearRemain();
  // planetRemain();
}
drawTodayGraph();
drawYearGraph();
// drawPlanetGraph();

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
    "" +
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

  document.getElementById("todayRemainSec").innerHTML =
    parseInt(todayRemain / 1000, 10) + "second";

  var todayRemainRate =
    (todayRemain / (endToday.getTime() - startToday.getTime())) * 100; //今日残り何％か

  return todayRemainRate;
}

function yearRemain() {
  var nowTime = new Date();

  var endYear = new Date(nowTime.getFullYear() + 1, 0, 1);

  var startYear = new Date(nowTime.getFullYear(), 0, 1);

  var yearRemain = endYear.getTime() - nowTime.getTime(); //   1秒あたり995すすむ←？？

  document.getElementById("yearRemainSec").innerHTML =
    parseInt(yearRemain / 1000, 10) + "second";

  var yearRemainRate =
    (yearRemain / (endYear.getTime() - startYear.getTime())) * 100; //今日残り何％か

  return yearRemainRate;
}

function planetRemain() {
  var nowTime = new Date();

  var endPlanet = new Date(2135, 9, 22);

  var PlanetRemain = endPlanet.getTime() - nowTime.getTime(); //   1秒あたり995すすむ←？？

  document.getElementById("planetRemainSec").innerHTML =
    parseInt(PlanetRemain / 1000, 10) + "second";

  // var planetRemainRate = (planetRemain / endPlanet.getTime()) * 100; //今日残り何％か

  // return planetRemainRate;
}

function showLavel() {
  return (dataLabelPlugin = {
    afterDatasetsDraw: function (chart, easing) {
      // To only draw at the end of animation, check for easing === 1
      var ctx = chart.ctx;

      chart.data.datasets.forEach(function (dataset, i) {
        var meta = chart.getDatasetMeta(i);
        if (!meta.hidden) {
          meta.data.forEach(function (element, index) {
            // Draw the text in black, with the specified font
            ctx.fillStyle = "rgb(298,298, 298)";

            var fontSize = 16;
            var fontStyle = "normal";
            var fontFamily = "Special Elite";
            ctx.font = Chart.helpers.fontString(
              fontSize,
              fontStyle,
              fontFamily
            );

            // Just naively convert to string for now
            var dataString = dataset.data[index].toString();

            // Make sure alignment settings are correct
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            var padding = 5;
            var position = element.tooltipPosition();
            ctx.fillText(
              dataString + "%",
              position.x,
              position.y - fontSize / 2 - padding
            );
          });
        }
      });
    },
  });
}

function drawTodayGraph() {
  //chartjsでグラフ上に文字表示させるためのプラグイン
  dataLabelPlugin = showLavel();
  //グラフ描写
  var todayRemainRate = parseInt(todayRemain(), 10);
  var todayPercentCircleId = document.getElementById("todayPercentCircle");
  var todayPercentCircle = new Chart(todayPercentCircleId, {
    type: "pie",
    data: {
      labels: ["経過", "残り"],
      datasets: [
        {
          label: { fontColor: "Special Elite" },
          data: [100 - todayRemainRate, todayRemainRate],
          backgroundColor: ["#3F2B36", "#E98B2A"],
        },
      ],
    },
    options: { animation: { animateScale: true } },
    plugins: [dataLabelPlugin],
  });
}
function drawYearGraph() {
  //chartjsでグラフ上に文字表示させるためのプラグイン
  dataLabelPlugin = showLavel();
  //グラフ描写
  var yearRemainRate = parseInt(yearRemain(), 10);
  var yearPercentCircleId = document.getElementById("yearPercentCircle");
  var yearPercentCircle = new Chart(yearPercentCircleId, {
    type: "pie",
    data: {
      labels: ["経過", "残り"],
      datasets: [
        {
          label: { fontColor: "Special Elite" },
          data: [100 - yearRemainRate, yearRemainRate],
          backgroundColor: ["#3F2B36", "#E98B2A"],
        },
      ],
    },
    options: { animation: { animateScale: true } },
    plugins: [dataLabelPlugin],
  });
}

function drawPlanetGraph() {
  //chartjsでグラフ上に文字表示させるためのプラグイン
  dataLabelPlugin = showLavel();
  //グラフ描写
  var planetRemainRate = parseInt(planetRemain(), 10);
  var planetPercentCircleId = document.getElementById("planetPercentCircle");
  var planetPercentCircle = new Chart(planetPercentCircleId, {
    type: "pie",
    data: {
      labels: ["経過", "残り"],
      datasets: [
        {
          label: { fontColor: "Special Elite" },
          data: [100 - planetRemainRate, planetRemainRate],
          backgroundColor: ["#3F2B36", "#E98B2A"],
        },
      ],
    },
    options: { animation: { animateScale: true } },
    plugins: [dataLabelPlugin],
  });
}
setInterval("watchRepeat()", 1000);
setInterval("drawTodayGraph()", 60000);
setInterval("drawYearGraph()", 86400000);
// setInterval("drawPlanetGraph()", 86400000);
// ここまで
