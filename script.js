      // Event listener for scroll animations
      document.addEventListener("scroll", function () {
        const animatedText = document.querySelectorAll(".animated-text span");
        const contentPosition = document
          .querySelector(".content")
          .getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        // If the content is in view, animate the text words
        if (contentPosition < screenPosition) {
          animatedText.forEach((span, index) => {
            setTimeout(() => {
              span.classList.add("visible"); // Add the 'visible' class to animate
            }, index * 200); // Add delay to each word's appearance
          });
        }
      });

      // Event listener for hamburger menu toggle
      document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.querySelector(".hamburger");
        const menu = document.querySelector("header ul");

        // Toggle the 'active' class on click to show/hide the menu
        hamburger.addEventListener("click", function () {
          hamburger.classList.toggle("active");
          menu.classList.toggle("active");
        });
      });