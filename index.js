document.addEventListener('DOMContentLoaded', function() {// Ensures the script runs after the HTML page is fully loaded
    document.getElementById('getTimeButton').addEventListener('click', fetchTime);
});// When clicked, it calls the fetchTime() function.

// Function to fetch the current time for a specified time zone
function fetchTime() {
    const timeZone = document.getElementById('timeZone').value;
    const apiUrl = `https://timeapi.io/api/time/current/zone?timeZone=${encodeURIComponent(timeZone)}`;

    // Fetch data from the TimeAPI
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {//Processes the JSON data received from the API.
            // Display the data on the page
            document.getElementById('dateTime').textContent = data.dateTime;//Displays the current time
            document.getElementById('timeZoneName').textContent = data.timeZone;//Displays the time zone name.
            document.getElementById('utcOffset').textContent = data.utcOffset;//Displays the UTC offset.
        })
        .catch(error => {
            // Handle any errors
            console.error('Error fetching time data:', error);
            alert('Failed to fetch time data. Please check the time zone format.');
        });
}
  
  