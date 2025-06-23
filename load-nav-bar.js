// Old version
// fetch("nav-bar.html").then(response => response.text()).then(data => {
//     document.getElementById("nav-bar-placeholder").innerHTML = data;
// })


// Calculate how deep we are (number of folders between current page and root)
const nav_bar_depth = location.pathname.split("/").length - 2;
const nav_bar_prefix = "../".repeat(nav_bar_depth);

// Adjust path to your actual file location
fetch(`${nav_bar_prefix}nav-bar.html`)
  .then(response => response.text())
  .then(data => {
    document.getElementById("nav-bar-placeholder").innerHTML = data;
  })
  .catch(error => {
    console.error("Error loading footer:", error);
});

// Add the following two lines where you want the footer to be in each file
// <div id="nav-bar-placeholder"></div>
// <script src="load-nav-bar.js"></script>