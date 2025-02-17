document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById(".hamburger");
    const navMenu = document.getElementById(".nav-links");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            navMenu.classList.toggle("show");
        });

        // Close the menu if clicking outside of it
        document.addEventListener("click", function (event) {
            if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove("show");
            }
        });
    } else {
        console.error("Menu toggle or navMenu is missing in the HTML.");
    }
});


function toggleDetails(id) {
    var details = document.getElementById(id);
    var allDetails = document.querySelectorAll('.project-details');

    allDetails.forEach(function(div) {
        if (div !== details) {
            div.style.display = "none"; // Close other open details
        }
    });

    details.style.display = details.style.display === "block" ? "none" : "block";
}
document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
        card.addEventListener("click", function() {
            this.classList.toggle("expanded");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("show");
        });
    }
});

