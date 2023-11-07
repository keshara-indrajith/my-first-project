
document.addEventListener("DOMContentLoaded", function () {
        // Get references to the button and label
        const button1 = document.querySelector(".button1");
        const label1 = document.getElementById("label1");

        // Add a click event listener to the button
        button1.addEventListener("click", function () {
            // Toggle the visibility of the label
            label1.style.display = label1.style.display === "none" ? "block" : "none";
        });
    });

