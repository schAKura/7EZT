document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 0;
    const slideContainer = document.querySelector('.slideshow-container');
    const dotsContainer = document.querySelector('.dots-container');

    function createSlides(images) {
        images.forEach((src, index) => {
            const slideDiv = document.createElement('div');
            slideDiv.classList.add('mySlides', 'fade');

            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Zdjęcie Newag Impuls';
            img.addEventListener('click', function() {
                window.open(src, '_blank');
            });

            slideDiv.appendChild(img);
            slideContainer.appendChild(slideDiv);

            const dot = document.createElement('span');
            dot.classList.add('dot');
            dotsContainer.appendChild(dot);
        });
    }

    const images = [];
    for (let i = 1; i <= 23; i++) {
        images.push(`media/impuls/foto (${i}).jpg`);
    }
    
    createSlides(images);

    const slides = document.querySelectorAll('.mySlides');
    const dots = document.querySelectorAll('.dot');

    function showSlides() {
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = 'block';
        dots.forEach((dot) => {
            dot.className = dot.className.replace(' active', '');
        });
        dots[slideIndex - 1].className += ' active';
        setTimeout(showSlides, 2000); // Zmiana obrazów co 2 sekundy
    }

    showSlides();
});
