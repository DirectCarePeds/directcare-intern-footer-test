fetch("nav-bar.html").then(response => response.text()).then(data => {
    document.getElementById("nav-bar-placeholder").innerHTML = data;
})

// Add the following two lines where you want the footer to be in each file
// <div id="nav-bar-placeholder"></div>
// <script src="load-nav-bar.js"></script>