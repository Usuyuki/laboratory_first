// function getYahooJson(){
//     console.log("hi");

//     var a= fetch("https://map.yahooapis.jp/weather/V1/place?coordinates=139.732293,35.663613&output=json&appid=dj00aiZpPXFVc2hBZ0g2NFNUTiZzPWNvbnN1bWVyc2VjcmV0Jng9Yzc-")
//     .then(response =>response.json()).then(function(json) {
//         var result = JSON.parse(json);
//         console.log(result);

//     });

// }

// getYahooJson();
getTemp();
getDate();
console.log("読み込まれてますよ");
const longitude = 139.92874; //経度
const latitude = 36.54971; //緯度
function getWeather() {
  getYahooWeather();
  getOpenWeatherMap();
  getMeteorologicalAgency();
}

function getYahooWeather() {
  //↑宇大陽東の噴水の座標
  // 35.663613みたいに
  const url =
    "https://map.yahooapis.jp/weather/V1/place?coordinates=" +
    longitude +
    "," +
    latitude +
    "&output=json&appid=dj00aiZpPXFVc2hBZ0g2NFNUTiZzPWNvbnN1bWVyc2VjcmV0Jng9Yzc-";
  // https://map.yahooapis.jp/weather/V1/place?coordinates=139.732293,35.663613&output=json&appid=dj00aiZpPXFVc2hBZ0g2NFNUTiZzPWNvbnN1bWVyc2VjcmV0Jng9Yzc-

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      var nameValue = data["Feature"][0]["Name"];
      var rainfallValue =
        data["Feature"][0]["Property"]["WeatherList"]["Weather"][2]["Rainfall"];
      var dataValue =
        data["Feature"][0]["Property"]["WeatherList"]["Weather"][2]["Date"];
      yahooDate.innerHTML =
        dataValue.substr(-4, 2) +
        "時" +
        dataValue.substr(-2) +
        "分" +
        "の予想降水量";

      // temp.innerHTML =tempValue;
      // descValue.innerHTML=descValue;

      if (rainfallValue == 0) {
        weatherIcon = '<i class="fas fa-sun"></i>';
      } else {
        weatherIcon = '<i class="fas fa-umbrella"></i>';
      }

      yahooRainfall.innerHTML = rainfallValue + "mm/h " + weatherIcon;
    });
}

function getOpenWeatherMap() {
  // {
  //     "id": 1849053,
  //     "name": "Utsunomiya",
  //     "state": "",
  //     "country": "JP",
  //     "coord": {
  //         "lon": 139.883606,
  //         "lat": 36.56583
  //     }
  // }
  const url =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&APPID=5366a31f43daa2a39126dea4dfd57fa2";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      openWeatherDate.innerHTML = data.list[3].dt_txt + "の予想天気模様";
      openWeatherIcon = data.list[3].weather[0].icon;
      openWeatherForcast.innerHTML =
        data.list[3].weather[0].description +
        "<img src='http://openweathermap.org/img/wn/" +
        openWeatherIcon +
        ".png'>";
    });
}

function getMeteorologicalAgency() {
  const url = "https://weather.tsukumijima.net/api/forecast/city/090010";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      MeteorologicalAgencyDate.innerHTML =
        data.forecasts[1].date + "の予想天気模様";
      MeteorologicalAgencyIcon = data.forecasts[1].image.url;
      MeteorologicalAgencyForecast.innerHTML =
        data.forecasts[1].image.title +
        "<img src='" +
        MeteorologicalAgencyIcon +
        "'>";
    });
}

//最低気温と最高気温取得
function getTemp() {
  //宇都宮市明保野町　宇都宮地方気象台
  const url = "https://jjwd.info/api/v2/station/41277";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      maxTempValue.innerHTML = data.station.max_temp.temp_daily_max + "度";
      maxTempTime.innerHTML =
        "観測時刻:" +
        data.station.max_temp.temp_daily_max_time_hour +
        "時" +
        data.station.max_temp.temp_daily_max_time_minute +
        "分";
      minTempValue.innerHTML = data.station.min_temp.temp_daily_min + "度";
      minTempTime.innerHTML =
        "観測時刻:" +
        data.station.min_temp.temp_daily_min_time_hour +
        "時" +
        data.station.min_temp.temp_daily_min_time_minute +
        "分";
      nowTempValue.innerHTML = data.station.min_temp.temp_daily_min + "度";
      nowTempTime.innerHTML =
        "観測時刻:" +
        data.station.min_temp.temp_daily_min_time_hour +
        "時" +
        data.station.min_temp.temp_daily_min_time_minute +
        "分";
    });
}
//日時出力
function getDate() {
  date = new Date();
  console.log(date);
  today.innerHTML =
    date.getFullYear() + "年" + date.getMonth() + "月" + date.getDate() + "日";
}

// お天気アイコン出す用
function showWeatherIcon(rainfallValue) {}
