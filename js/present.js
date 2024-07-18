document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    let currentIndex = 0;

    const updateCarousel = () => {
        const width = items[currentIndex].clientWidth;
        carousel.style.transform = `translateX(${-width * currentIndex}px)`;
    };

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Update carousel on window resize to maintain responsiveness
    window.addEventListener('resize', updateCarousel);

    // Initialize carousel position
    updateCarousel();
});

function goToMain() {
    setTimeout(() => {
        location.replace('../main.html');
    }, 500);
}
