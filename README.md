# Weather-App
This weather app is a tool that provides real-time weather information for a specific location. It typically allows  users to enter a city  and then displays data such as temperature, humidity, and weather conditions(like sunny, rainy, or cloudy). 
# Technologies Used:
•	HTML5 – Structure of  the web page
•	CSS3 – Styling and layout
•	JavaScript –Client-side scripting &API handling
•	OpenWeatherMap API – Provides real-time weather data
# Project Objective
•	To build a user-friendly web application that displays current weather data based on user input.
•	To practice integrating third-party APIs using JavaScript.
•	To demonstrate understanding of front-end technologies.
•	To apply clean UI design principles with responsive layout.
# How to Use
1.	Clone or download the project files.
2.	Go to OpenWeatherMap API
o	Create a free account and generate an API key.
3.	In script.js, replace:
Const apiKey = ‘YOUR_API_KEY’;
With your actual API key.
    4.Open index.html in any modern browser(e.g.,Chrom,Firefox).
 # Usage:
•	Type the name of a city(e.g., London, Mumbai).
•	Click the “Get Weather”button.
•	The app will show the city’s temperature and weather description.

# How it works
1.	User Input
    User enters the city name into a text field.
2.	Event Listener
    When the “Get Weather” button is clicked, JavaScript captures the input.
3.	API Call 
    JavaScript sends a fetch request to OpenWeatherMap API with the city name and API key.
4.	Data  Handling
    The API responds with weather data in JSON format. The app extracts:
    o	City name
    o	Temperature
    o	Humidity
    o	Weather condition(e.g., clear, clouds)
5.	Display Output
    The extracted data is formatted and displayed inside a styled container on the web page.
6.	Error Handling
    If the city is not found or the API fails, a user-friendly error message is shown.

 

