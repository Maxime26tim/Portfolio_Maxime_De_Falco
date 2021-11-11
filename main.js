history.scrollRestoration = 'manual';
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    }
}

var mySwiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 3000,
    },
    speed: 1000,
    loop: true,
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});




const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {

    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("open");
    });


    hamburger.classList.toggle("toggle");
});


const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,


    pagination: {
        el: '.swiper-pagination',
    },


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

    },


    scrollbar: {
        el: '.swiper-scrollbar',
    },
});