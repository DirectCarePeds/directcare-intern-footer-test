// Old version
// fetch("/footer.html").then(response => response.text()).then(data => {
//     document.getElementById("footer-placeholder").innerHTML = data;
// })

// Adjust path to your actual file location
fetch(`/footer.html`)
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer-placeholder").innerHTML = data;
  })
  .catch(error => {
    console.error("Error loading footer:", error);
});

// Add the following two lines where you want the footer to be in each file
// <div id="footer-placeholder"></div>
// <script src="/load-footer.js"></script>