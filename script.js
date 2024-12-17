window.onload = function () {
    let slides = 
        document.getElementsByClassName('carousel-item');

    function addActive(slide) {
        slide.classList.add('active');
    }

    function removeActive(slide) {
        slide.classList.remove('active');
    }

    addActive(slides[0]);
    setInterval(function () {
        for (let i = 0; i < slides.length; i++) {
            if (i + 1 == slides.length) {
                addActive(slides[0]);
                setTimeout(removeActive, 350, slides[i]);
                break;
            }
            if (slides[i].classList.contains('active')) {
                setTimeout(removeActive, 350, slides[i]);
                addActive(slides[i + 1]);
                break;
            }
        }
    }, 1500);
};


let sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right"),
    current = 0;

// Clear all images
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}

// Initial slide
function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
}

// Show previous
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
}

// Show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function () {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});

startSlide();

