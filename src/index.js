function handleSearchInput(event) {
  event.preventDefault();
  let searchResult = document.querySelector("#search-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchResult.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchInput);
