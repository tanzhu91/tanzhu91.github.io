document.addEventListener("DOMContentLoaded", function () {
    // Create a popup div
    let popup = document.createElement("div");
    popup.textContent = "Welcome to my portfolio!";
    popup.style.position = "fixed";
    popup.style.top = "20px";
    popup.style.left = "50%";
    popup.style.transform = "translateX(-50%)";
    popup.style.background = "black";
    popup.style.color = "white";
    popup.style.padding = "20px 20px";
    popup.style.borderRadius = "10px";
    popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.2)";
    popup.style.zIndex = "1000";

    // Add it to the page
    document.body.appendChild(popup);

    // Remove the popup after 2 seconds
    setTimeout(function () {
        popup.style.display = "none";
    }, 2000);


});

// Smooth Scroll Function

function scrollToSection(sectionId) {
    // Hide all sections first
    document.querySelectorAll("section:not(#left-sidebar)").forEach(section => {
        section.classList.remove("active");
    });

    // Show only the clicked section
    document.getElementById(sectionId).classList.add("active");

    // Smooth scroll to the section
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
};