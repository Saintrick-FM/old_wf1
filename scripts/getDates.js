// getDates.js

// Dynamically update copyright year
let year = document.getElementById("year");
year.textContent = new Date().getFullYear();

// Get last modified date of the document
document.getElementById("last-modified").textContent =
  "Last modified : " + document.lastModified;
