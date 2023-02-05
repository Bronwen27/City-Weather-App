// onclick to trigger the Ajax call
$("#search-button").on("click", function(event) {

event.preventDefault();
// grab text from the input box
var city = $("#search-input").val().trim();
// view city in console
console.log(city)
//console title city value:
console.log("City value:", city);


//API key
let APIKey = "d0736665d026d198ed2e5a4eedc5ac57";
// creating query
let queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
// search history 
let searchHistory = []
// search history section
let searchHistorySection = $('#history');
//search box form
let searchForm = $('#search-form');
//search text input
let searchInput = $('#search-input');

function submit(event){
  event.preventDefault();
  let search = searchInput.val().trim()

}
searchForm.on("submit", submit);
// calling query with ajax
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $("#city-view").text(JSON.stringify(response));
       if (searchHistory.push(city));
        localStorage.setItem("search-history", JSON.stringify(city));
      //return value of feild
      searchHistorySection.html("")
       // loop through array of cities
      for( let i = 0; i < searchHistory.length; i++){
        // generating button for each city
        let button = $("<button>");
        button.attr("type", "button")
        button.text(searchHistory[i])
        button.addClass("history-btn btn-history")
        button.attr("data-search", searchHistory[i])
        searchHistorySection.append(button)

        function getWeather(location){
          let latitude
        }
        getWeather(response)
      };
    
    
      
  });
var currentCity = $("<h4>")
//------------------------------------------------------------
})

$()





