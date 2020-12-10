
// function getYahooJson(){
//     console.log("hi");

//     var a= fetch("https://map.yahooapis.jp/weather/V1/place?coordinates=139.732293,35.663613&output=json&appid=dj00aiZpPXFVc2hBZ0g2NFNUTiZzPWNvbnN1bWVyc2VjcmV0Jng9Yzc-")
//     .then(response =>response.json()).then(function(json) {
//         var result = JSON.parse(json);
//         console.log(result);
        
//     });

// }

// getYahooJson();

function test_click() {
    const url = 'https://map.yahooapis.jp/weather/V1/place?coordinates=139.732293,35.663613&output=json&appid=dj00aiZpPXFVc2hBZ0g2NFNUTiZzPWNvbnN1bWVyc2VjcmV0Jng9Yzc-';
    fetch(url).then(response=>response.json()
    ).then(data =>{
        var nameValue=data['Feature'][0]['Name']
        var rainfallValue=data['Feature'][0]['Property']['WeatherList']['Weather'][2]['Rainfall']
        // var tempValue=data['Property']['WeatherList']['Weather']
        // var descValue=data['weather'][0]['description']
        console.log(data)
        yahooPlace.innerHTML =nameValue;
        yahooRainfall.innerHTML =rainfallValue;
        // temp.innerHTML =tempValue;
        // descValue.innerHTML=descValue;
    }
    );
};




  