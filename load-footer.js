// Old version
// fetch("footer.html").then(response => response.text()).then(data => {
//     document.getElementById("footer-placeholder").innerHTML = data;
// })

// Calculate how deep we are (number of folders between current page and root)
const depth = location.pathname.split("/").length - 2;
const prefix = "../".repeat(depth);

// Adjust path to your actual file location
fetch(`${prefix}footer.html`)
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer-placeholder").innerHTML = data;
  })
  .catch(error => {
    console.error("Error loading footer:", error);
});

// Add the following two lines where you want the footer to be in each file
// <div id="footer-placeholder"></div>
// <script src="load-footer.js"></script>