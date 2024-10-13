const swiper = new Swiper('.slider-swiper', {
    loop: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        Clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        620: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },

    }

})



var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    nav: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1920: {
            items: 4
        }
    }
});
// owl.on('mousewheel', '.owl-stage', function (e) {
//     if (e.deltaY > 0) {
//         owl.trigger('next.owl');
//     } else {
//         owl.trigger('prev.owl');
//     }
//     e.preventDefault();
// });


