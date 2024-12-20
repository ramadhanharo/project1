
## Time Zone Fetcher

# Overview
The Time Zone Fetcher is a web-based application that allows users to input a time zone (e.g., Europe/Amsterdam) and retrieve real-time data about the current time, time zone name, and UTC offset using TimeAPI. This tool is ideal for developers, travelers, or anyone needing to check the current time across different time zones.

## Features

Real-time Time Data: Fetches and displays the current time, time zone name, and UTC offset for any valid time zone.
User Input: Users can input the time zone in the format Continent/City (e.g., Asia/Tokyo).
Error Handling: Displays an error message if the time zone is invalid or if there are issues with fetching data.

## Technologies Used
HTML5: For building the page structure.
CSS: Basic styling for a user-friendly interface.
JavaScript (ES6): Handles the fetching of data from the TimeAPI and displays it dynamically.
Fetch API: Used to interact with external APIs to retrieve time data.
TimeAPI: External API used to retrieve time and related data.

## Installation & Setup
# Prerequisites
No server-side setup or installation is required. The application can be run directly in a web browser.

# Steps
Clone or Download the Repository:

Clone the repository or download the project files to your local machine.

git clone https://github.com/yourusername/time-zone-fetcher.git
Open the Project:

Open the index.html file in your browser.
Running Locally:

No additional setup is required to run locally. Simply double-click the index.html file to launch the app in your web browser.

## Usage

Input: In the input field, type a time zone in the format Continent/City (e.g., Europe/Amsterdam, Asia/Tokyo).
Fetch Time: Click on the Get Time button. The current time, time zone name, and UTC offset will be displayed below the button.
Error Handling: If the input time zone is invalid or the API call fails, an error message will appear on the screen.

## Example
For example, if you type Europe/London in the input box and click Get Time, the app will display:

Current time in London
Time zone name: Europe/London
UTC offset for the time zone
Example Input and Output
Input: Europe/Amsterdam
Output:
Current Time: 2024-12-19T14:00:00+01:00
Time Zone: Europe/Amsterdam
UTC Offset: +01:00
API Information
This application uses the TimeAPI to fetch the time and related data. The API URL is:

lua
https://timeapi.io/api/time/current/zone?timeZone={timeZone}
Where {timeZone} is the user-provided time zone.

Response Data: The API returns a JSON object with the following data:

dateTime: The current time in ISO 8601 format.
timeZone: The name of the time zone.
utcOffset: The UTC offset for the given time zone.

## Example Response


{
  "dateTime": "2024-12-19T14:00:00+01:00",
  "timeZone": "Europe/Amsterdam",
  "utcOffset": "+01:00"
}
## Troubleshooting
# Common Issues:
Invalid Time Zone Format: Ensure that the time zone is entered in the correct format (e.g., Europe/Amsterdam or America/New_York). Using an incorrect format will result in an error.
API Downtime: If the TimeAPI service is down or unavailable, the app may not be able to fetch data. This will result in an error message displayed to the user.
CORS Issues: If you're testing the app locally, CORS (Cross-Origin Resource Sharing) restrictions may block the API request. You can use a tool like CORS Anywhere to bypass these issues for testing purposes.

## Code Overview
HTML (index.html)
The HTML file defines the structure of the page: a header, an input field, a button to trigger fetching data, and a result container to display the fetched information.
JavaScript (index.js)
Event Listener: When the page is fully loaded, the DOMContentLoaded event listener attaches a click event to the "Get Time" button. When clicked, the fetchTime() function is invoked.
API Call: The fetchTime() function uses JavaScript's fetch API to send a GET request to the TimeAPI with the user-specified time zone.
Data Display: The JSON response from the API is processed and displayed in the designated areas (#dateTime, #timeZoneName, #utcOffset).

function fetchTime() {
    const timeZone = document.getElementById('timeZone').value;
    const apiUrl = `https://timeapi.io/api/time/current/zone?timeZone=${encodeURIComponent(timeZone)}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('dateTime').textContent = data.dateTime;
            document.getElementById('timeZoneName').textContent = data.timeZone;
            document.getElementById('utcOffset').textContent = data.utcOffset;
        })
        .catch(error => {
            alert('Failed to fetch time data. Please check the time zone format.');
        });
}
## Contributing
Feel free to fork the repository, make changes, and submit a pull request. Contributions are always welcome!

## License
This project is open-source and available under the MIT License.