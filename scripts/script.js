const App = {};

$(function () {
    App.init();
});

App.init = function () {
    console.log("hello");
    App.titleAnimation();
    App.slider();
}

App.titleAnimation = function () {
    $('.headerContent').on('transitionend', function () {
        $('.headerContent').css({ alignItems: "flex-start" });
        $('.enter').removeClass('hidden');
    })
}

// App.flick = function () {
//     $('.main-carousel').flickity({
//         // options
//         cellAlign: 'left',
//         contain: true
//     });
// }

App.slider = function () {
    $('.imageGallery').slick({
        // dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
        // arrows: true
    });
}




// enter.classList.remove('hidden');