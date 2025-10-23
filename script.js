// Initial rendering logic – to be refactored during the lab

// Wishlist array for wishlist-related features
// Each item in the wishlist is an object with three properties:
//   id   - a unique number for the station
//   name - the name of the station
//   city - the city where the station is located
// Example:
//   { id: 1, name: "Central Park Station", city: "New York" }
const wishlist = [
  { id: 1, name: "Central Park Station", city: "New York" },
  { id: 2, name: "Union Square Station", city: "San Francisco" },
  { id: 3, name: "King's Cross", city: "London" },
  { id: 4, name: "Shinjuku Station", city: "Tokyo" },
  { id: 5, name: "Gare du Nord", city: "Paris" },
  { id: 6, name: "Flinders Street", city: "Melbourne" },
  { id: 7, name: "Berlin Hauptbahnhof", city: "Berlin" },
  { id: 8, name: "Union Station", city: "Toronto" }
];
function addStations(stations) {
  // TODO: Refactor this loop using map() or forEach()
  for (let i = 0; i < stations.length; i++) {
    addStationElement(stations[i]);
  }
}

// 🧪 TEAM FEATURES

// 💌 Wishlist Renderer
function renderWishlist() {
  // TODO: Use forEach to display items in wishlist
}

// ❌ Search Feedback
function searchStations(query) {
  // TODO: Filter stations array based on query
  // TODO: Display error if none found
}

// 🌟 Random Featured Station
function pickFeaturedStation() {
  // TODO: Use Math.random to select and display a station
    const randomIndex = Math.floor(Math.random() * stations.length);
    const featuredStation = stations[randomIndex];

    const featuredSection = document.getElementById("random-station");
    featuredSection.innerHTML = `
      <h3>${featuredStation.name}</h3>
      <p>${featuredStation.description}</p>
      <p><strong>Location:</strong> ${featuredStation.location}</p>
      <p><strong>Type:</strong> ${featuredStation.type}</p>`;

    window.addEventListener("DOMContentLoaded", pickFeaturedStation);
}

// 🏙️ Group by City
function groupStationsByCity() {
  // TODO: Loop through stations and group under each city
}

// 🔄 Filter Toggle
function toggleFilteredStations() {
  // TODO: Add toggle logic to filter stations dynamically
}

// Load stations on page start
addStations(stations);
pickFeaturedStation();
