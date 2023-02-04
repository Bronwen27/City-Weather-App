// onclick to trigger the Ajax call
$("#form-input").on("click", function(event) {

event.preventDefault();

// grab text from the input box
var city = $("form-input").val();

//API key
var APIKey = "d0736665d026d198ed2e5a4eedc5ac57"

//var queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;

var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $("#city-view").text(JSON.stringify(response));
  });

//------------------------------------------------------------
})



