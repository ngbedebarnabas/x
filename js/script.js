// Dynamically setting the current year at the site's footer
const currYear = document.querySelector(".current-year");
currYear.textContent = new Date().getFullYear();
