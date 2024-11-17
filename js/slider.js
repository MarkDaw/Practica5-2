let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.style.transition = 'transform 0.5s ease-in-out'; 

    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}
