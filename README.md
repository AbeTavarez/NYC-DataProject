# NYC-DataProject

## Description

This is a class group project. We'll building an website/webapp that will allow the user to search for complains made to the 311 service in NYC.
The data is provided by the [NYC Open Data API]('https://opendata.cityofnewyork.us/)

## To Do:

Users should be able to see five buttons for the five boroughs (manhattan, brooklyn, queens, staten island, bronx) of New York City when they load the page
Users should also be able to see an input box where they can put in a number of how many complaints they want to see
When the user clicks on one of the five buttons, a list of complaints should be displayed on the page, according to the number they input AND the borough they clicked on
If the user doesn't input any number, make the default be 10
Remember, also, they only want complaints that were handled by the NYPD! (hint: consider filtering for a specific "agency" when making the API call)
When the list of complaints is shown, each complaint should also have a button on it that reads something along the lines of "toggle police response"
When the user clicks on on the "toggle police response" button, it should then toggle how the police responded to that particular complaint
Make sure it only toggles the response for that one complaint, not the entire list!