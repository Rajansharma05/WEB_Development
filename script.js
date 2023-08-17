const carousel = document.querySelector('.carousel');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');

let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        currentIndex = carousel.children.length - 1;
    } else if (index >= carousel.children.length) {
        currentIndex = 0;
    }

    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

function autoAdvance() {
    showSlide(currentIndex + 1);
}

const interval = setInterval(autoAdvance, 3000);

carousel.addEventListener('mouseenter', () => {
    clearInterval(interval);
});

carousel.addEventListener('mouseleave', () => {
    interval = setInterval(autoAdvance, 3000);
});

showSlide(currentIndex); // Show initial slide
