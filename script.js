// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Add your JavaScript code here
    console.log("Script loaded!");
  
    // Example: Change the color of the navigation background on scroll
    window.addEventListener("scroll", function () {
      var nav = document.querySelector("nav");
      if (window.scrollY > 50) {
        nav.style.backgroundColor = "#333"; // Change to your preferred color
      } else {
        nav.style.backgroundColor = "transparent";
      }
    });
  
    // You can add more functionality as needed
  });