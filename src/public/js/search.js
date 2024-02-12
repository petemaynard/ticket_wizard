document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("search-form");

  searchForm.addEventListener("submit", function (event) {
    console.log("Search submitted.");
    event.preventDefault();
    const searchTerm = document.getElementById("search-query").value;
    performSearch(searchTerm);
  });
});

function performSearch(searchTerm) {
  fetch(`/api`)
  console.log("Hello")
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
  resultsContainer.innerHTML = ""; // Clear previous results

  data.forEach((item) => {
    const resultElement = createResultElement(item);
    resultsContainer.appendChild(resultElement);
  });
}

function createResultElement(item) {
  const resultElement = document.createElement("div");
  resultElement.className = "search-result-item"; // Add a class for styling if needed
  resultElement.innerHTML = `
      <h3>${item.artist}</h3>
      <p>City: ${item.city}</p>
      <p>Venue: ${item.venue}</p>
    `;
  // Add event listener if you want to handle clicks on the result item
  resultElement.addEventListener("click", () => {
    // Handle click event, for example, navigate to the artist's page
    window.location.href = `/artist/${encodeURIComponent(item.artist)}`;
  });
  return resultElement;
}

function displayError(error) {
  const resultsContainer = document.getElementById("results-container");
  resultsContainer.innerHTML = `<div class="error-message">Error: ${error.message}</div>`; // Display the error message
}