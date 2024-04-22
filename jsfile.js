const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.createElement('button');
const nextBtn = document.createElement('button');
const slideWidth = slides[0].offsetWidth;
let currentIndex = 0;

prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';

prevBtn.classList.add('prev-btn');
nextBtn.classList.add('next-btn');

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    goToSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    goToSlide(currentIndex);
});

function goToSlide(index) {
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
}

slides.forEach(slide => {
    slide.style.fontFamily = '"Inter", sans-serif';
    slide.style.fontSize = '1rem';
    slide.style.color = 'rgba(25, 78, 138, 1)';
});

document.querySelector('header nav').appendChild(prevBtn);
document.querySelector('header nav').appendChild(nextBtn);




// Middle Banner 

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.banner-slide');
    const dotsContainer = document.querySelector('.slider-dots');
    const dots = [];

    slides.forEach((slide, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.setAttribute('data-slide', index);
        dotsContainer.appendChild(dot);
        dots.push(dot);
    });

    let currentSlide = 0;

    const showSlide = (slideIndex) => {
        slides.forEach((slide, index) => {
            if (index === slideIndex) {
                slide.style.display = 'block';
                dots[index].classList.add('active');
            } else {
                slide.style.display = 'none';
                dots[index].classList.remove('active');
            }
        });
    };

    showSlide(currentSlide);

    const goToSlide = (slideIndex) => {
        if (slideIndex < 0) {
            currentSlide = slides.length - 1;
        } else if (slideIndex >= slides.length) {
            currentSlide = 0;
        } else {
            currentSlide = slideIndex;
        }
        showSlide(currentSlide);
    };

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            goToSlide(currentSlide - 1);
        } else if (event.key === 'ArrowRight') {
            goToSlide(currentSlide + 1);
        }
    });
});


// Brands Slider 
document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.banner-slider-container');
    const slider = document.querySelector('.banner-brands-slider');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');

    let currentIndex = 0;

    const slideWidth = sliderContainer.clientWidth / 5; 

    prevArrow.addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        slide();
    });

    nextArrow.addEventListener('click', () => {
        currentIndex = Math.min(currentIndex + 1, slider.children.length - 5); 
        slide();
    });

    function slide() {
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
});


// Deal of the days 

const targetDate = new Date('2024-04-22T00:00:00');

function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.querySelector('.days').textContent = formatTime(days);
    document.querySelector('.hours').textContent = formatTime(hours);
    document.querySelector('.minutes').textContent = formatTime(minutes);
    document.querySelector('.seconds').textContent = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateCountdown, 1000);

updateCountdown();


// Most View
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.most-view-slider');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');

   
    function initSlider() {
       
        const sliderOptions = {
         
        };
       
    }

    function moveSlide(direction) {
        const slideWidth = slider.querySelector('.most-view-slide').offsetWidth;
        const currentOffset = parseInt(slider.style.transform.slice(11)) || 0;
        const newOffset = direction === 'prev' ? currentOffset + slideWidth : currentOffset - slideWidth;
        slider.style.transform = `translateX(${newOffset}px)`;
    }

    prevBtn.addEventListener('click', () => moveSlide('prev'));
    nextBtn.addEventListener('click', () => moveSlide('next'));

    initSlider();
});
