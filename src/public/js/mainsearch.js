const searchForm = document.getElementById("search-form");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = document.getElementById("search-query").value;
  location.assign(`/search?searchQuery=${searchTerm}`);
});