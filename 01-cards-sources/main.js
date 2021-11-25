const slides = document.querySelectorAll('.slide');

for(const slide of slides) {
    //1
    slide.addEventListener('click', () => {
        clearActiveClasses();
        slide.classList.add('active');
    });
};

function clearActiveClasses() {
    //2
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
};