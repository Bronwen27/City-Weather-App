// onclick to trigger the Ajax call
$("#form-input").on("click", function(event) {

event.preventDefault();

// grab text from the input box
var city = $("#search-form").val();


//API key
var APIKey = "d0736665d026d198ed2e5a4eedc5ac57"

var queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $("#city-view").text(JSON.stringify(response));
  });

  console.log("City value", city);
//------------------------------------------------------------
})



