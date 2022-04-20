//   https://mattboldt.com/demos/typed-js/
//   https://github.com/mattboldt/typed.js/
//   http://imakewebthings.com/waypoints/
//   https://yiotis.net/filterizr/#/

$(document).ready(function () {
    var typed = new Typed('.element', {
        strings: ["napraviti web sajt.", "napraviti web aplikaciju.", "optimizovati web sajt."
        ],
        typeSpeed: 100,
        smartBackspace: true,
        backSpeed: 30,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000

    });

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $('.sticky').addClass('stickyAdd');

        } else {
            $('.sticky').removeClass('stickyAdd');
        }
    });

    var waypoint = new Waypoint({
        element: document.getElementById('iskustvo'),
        handler: function () {
            var progress = document.querySelectorAll('.progress-bar');
            progress[0].setAttribute('style', 'width: 95%; transition:1s all;');
            progress[1].setAttribute('style', 'width: 90%; transition:2s all;');
            progress[2].setAttribute('style', 'width: 80%; transition:3s all;');
            progress[3].setAttribute('style', 'width: 85%; transition:4s all;');
        },
        offset: '90%'
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    var filterizd = $('.filter-container').filterizr({
        animationDuration: .5,
    });
});