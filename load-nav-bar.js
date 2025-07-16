// Old version
// fetch("nav-bar.html").then(response => response.text()).then(data => {
//     document.getElementById("nav-bar-placeholder").innerHTML = data;
// })

// Adjust path to your actual file location
fetch(`nav-bar.html`)
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