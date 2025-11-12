// Adjust path to your actual file location
fetch(`testimonial.html`)
  .then(response => response.text())
  .then(data => {
    document.getElementById("testimonial-placeholder").innerHTML = data;
  })
  .catch(error => {
    console.error("Error loading footer:", error);
});

// Add the following two lines where you want the footer to be in each file
// <div id="testimonial-placeholder"></div>
// <script src="load-testimonial.js"></script>