document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            let target = document.querySelector(this.getAttribute("href"));
            window.scrollTo({ top: target.offsetTop - 50, behavior: "smooth" });
        });
    });
});