
var apiKey = "c95583aac1e8c2808350a9dfe6ba7c63"
var button = document.querySelector(".button")
var inputValue = document.querySelector(".inputValue")
var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");



button.addEventListener('click', function() {
  


 
    
      //fetch("http:api.openweathermap.org/geo/1.0/direct?q=San Diego&limit=5&appid=" + apiKey)
        //.then(function (response) {
          //return response.json()
        //})
        //.then(function (data) {
         // console.log(data)
         //var nameValue = data[0].name;
         //var tempValue = data['temp'];
         //var descValue = data['weather'];

        //name.innerHTML = JSON.stringify(nameValue)
         //temp.innerHTML = tempValue;

          
        //});

})


function oneCallApi() {

var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=32.715736&lon=-117.161087&exclude=hourly,minutely,alerts&appid=" + apiKey;

  fetch(requestUrl)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      //appendData(data);
      //var nameValue = data[0];
      var tempValue = data['current']['temp'];
      //var descValue = data['weather'];

      //name.innerHTML = JSON.stringify(nameValue)
      temp.innerHTML = tempValue;
   })
  }
  
  oneCallApi();


  




























//fetch(requestUrl)
  //.then(function (response) {
    //eturn response.json();
    //})
    //.then(function (data) {
      //console.log(data);
      //appendData(data);
    //})
  //}
   
   
    //for(var i=0; i < data.length; i++) {
      //var userContainer= document.createElement('h3');
    //var youareEl = document.createElement('p');

      //userContainer.textContent = data[i].current.temp;
      //youareEl.textContent = data[i]

      //userContainer.append(userContainer);
      //userContainer.append(youareEl);
    //}
  //}
  

//fetchButton.addEventListener('click', oneCallApi);    



































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






//var weatherContainer = document.getElementById('#weatherelements');
//var submitButton = document.getElementById('submit');

//function geolocationApi() {

  //var requestUrl = "http://api.openweathermap.org/geo/1.0/direct?q=San Diego&limit=5&appid=" + apiKey;

  //fetch(requestUrl)
  //.then(function (response) {
    //return response.json();
   // })
    //.then(function (data) {
     //console.log(data);
     //append(data);
   // })
    //for(var i=0; i < data.length; i++) {
      //var cityName = document.createElement('h3');
      //var youareEl = document.createElement('p');

      //weatherContainer.textContent = data[i].name;
      //youareEl.textContent = data[i].url;

      //weatherContainer.append(cityName);
      //userContainer.append(youareEl);
   // }
    
//}

 //submitButton.addEventListener('submit', geolocationApi);

//geolocationApi();





  //clear display
    //repoContainerEl.textContent = '';

























//function oneCallApi() {

  //var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=32.715736&lon=-117.161087&exclude=hourly,minutely,alerts&appid=" + apiKey;

  //fetch(requestUrl)
    //.then(function (response) {
      //return response.json();
    //})
    //.then(function (data) {
      //console.log(data);
      //appendData(data);
    //})
  //}
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
  

