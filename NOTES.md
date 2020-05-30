
my dataset: https://data.cityofnewyork.us/resource/pqg4-dm6b.json

sample query:
https://data.cityofnewyork.us/resource/pqg4-dm6b.json?bronx=Y&arts_culture=Y&housing=Y&disabilities=Y

APP TOKENS: 
"Once you have an app token, you can include it with your request either by using the X-App-Token HTTP header, or by passing it via the $$app_token parameter on your URL."

My app token: "NDQ8EOLrXHft9YeGZ2axBbxzb"

Usage notes from the docs at https://dev.socrata.com/foundry/data.cityofnewyork.us/pqg4-dm6b:
$.ajax({
    url: "https://data.cityofnewyork.us/resource/pqg4-dm6b.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "YOURAPPTOKENHERE"
    }
}).done(function(data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});