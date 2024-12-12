document.addEventListener("DOMContentLoaded", function() {
    const carouselSlide = document.querySelector(".carousel-slide");
    const carouselImages = document.querySelectorAll(".carousel-slide img");


    // Clone first set of images and append them to the end
    carouselImages.forEach(img => {
        const clone = img.cloneNode(true);
        carouselSlide.appendChild(clone);
    });

    let counter = 0;

    function resetCarousel() {
        carouselSlide.style.transition = "transform 0.5s ease-in-out"; // Add transition
        counter++;
        carouselSlide.style.transform = 'translateX(0)';
    }

    function removeTransition() {
        carouselSlide.style.transition = "none"; // Remove transition after animation ends
    }

    setInterval(resetCarousel, 5000); // Reset the carousel position every 5 seconds

    carouselSlide.addEventListener('transitionend', removeTransition);
});
