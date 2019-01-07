const App = {};

$(function () {
    App.init();
});

App.init = function () {
    App.titleAnimation();
    App.slider();
}

App.titleAnimation = function () {
    $('.headerContent').on('transitionend', function () {
        $('.headerContent').css({ alignItems: "flex-start" });
        $('.enter').removeClass('hidden');
    })
}

App.slider = function () {
    $('.imageGallery').slick({
        // dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
        // variableWidth: true
        // arrows: true
    });
}

//create an array to store all images in a collection
//on hover of the collection on the gallery page, quickly update the 

