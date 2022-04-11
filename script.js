var apiKey = "c95583aac1e8c2808350a9dfe6ba7c63"

function oneCallApi() {

  var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=32.715736&lon=-117.161087&exclude=hourly,minutely,alerts&appid=" + apiKey;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //appendData(data);
    })
  }
    //function displayWeather(data)  
      //for (var i = 0; i < data.length; i++) {
        //ul.innerHTML = "curent" + data[i].humidity + '' + data[i].temp;
        //weatherContainer.appendChild("sandiego");
      //}
      

  
    //.then(function (data) {
      //console.log(data);
  
        //var tempWeather = data.current
      //var weatherContainer = document.getElementById("weatherelements");
      //for (var i = 0; i < data.length; i++) {
        //ul.innerHTML = "curent" + data[i].humidity + '' + data[i].temp;
        //weatherContainer.appendChild("sandiego");
      //}
   
    //}}
  

//function geolocationApi() {
  //var requestUrl = "http://api.openweathermap.org/geo/1.0/direct?q=San Diego&limit=5&appid=" + apiKey;

  //fetch(requestUrl)
    //.then(function (response) {
      //return response.json();
    //})
    //.then(function (data) {
      //console.log(data);
