const App = {};

$(function () {
    App.init();
});

App.init = function () {
    console.log("hello");
    App.titleAnimation();
    // App.flick();
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



// enter.classList.remove('hidden');