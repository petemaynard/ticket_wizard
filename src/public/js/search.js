document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("search-form");
  const urlParams = new URLSearchParams(window.location.search);
  const mainSearch = urlParams.get('searchQuery'); // Use 'searchQuery' or the parameter name you're using

  if (mainSearch) {
    performSearch(mainSearch);
  }

  searchForm.addEventListener("submit", function (event) {
    console.log("Search submitted.");
    event.preventDefault();
    const searchTerm = document.getElementById("search-query").value;
    performSearch(searchTerm);
  });
});

function performSearch(searchTerm) {
  fetch(`/api/concerts?searchQuery=${encodeURIComponent(searchTerm)}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      updateSearchResults(data);
    })
    .catch((error) => {
      console.error("Error:", error);
      displayError(error);
    });
}

function updateSearchResults(data) {
  const resultsContainer = document.getElementById("results-container");
  // Clear previous results and set up a new table structure
  resultsContainer.innerHTML = `
    <table class="ui celled table">
      <thead>
        <tr>
          <th>Event Date</th>
          <th>Artist Name</th>
          <th>Venue Name</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  `;

  const tableBody = resultsContainer.querySelector('tbody');

  // 
  if (data.length > 0) {
    data.forEach((event) => {
      const row = tableBody.insertRow();
      row.innerHTML = `
        <td>${event.event_date}</td>
        <td>${event.artist.artist_name}</td>
        <td>${event.venue.venue_name}</td>
        <td>${event.venue.city}</td>
      `;
    });
  }
}

function createResultElement(item, type) {
  const resultElement = document.createElement("div");
  resultElement.className = "search-result-item"; // Add a class for styling if needed
  if (type === 'artist') {
    resultElement.innerHTML = `
      <h3>${item.artist_name}</h3>
      <p>Popularity Index: ${item.popularity_index}</p>
      <p>Description: ${item.description}</p>
    `;
  } else if (type === 'venue') {
    resultElement.innerHTML = `
      <h3>${item.venue_name}</h3>
      <p>City: ${item.city}</p>
    `;
  }
  // Add event listener if you want to handle clicks on the result item
  resultElement.addEventListener("click", () => {
    // Handle click event, for example, navigate to the artist's or venue's page
    // This will need to be adjusted based on your application's routing
  });
  return resultElement;
}