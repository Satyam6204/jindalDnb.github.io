document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const images = carousel.querySelectorAll("img");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? "block" : "none";
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    setInterval(nextImage, 3000); // Change image every 3 seconds
});