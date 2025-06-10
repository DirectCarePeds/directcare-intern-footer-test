fetch("footer.html").then(response => response.text()).then(data => {
    document.getElementById("footer-placeholder").innerHTML = data;
})

// Add the following two lines where you want the footer to be in each file
// <div id="footer-placeholder"></div>
// <script src="load-footer.js"></script>