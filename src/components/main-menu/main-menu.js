const btn = $(".main-menu-plus");
const subBtn = $(".main-menu-sub-menu .main-menu-plus");
$("#main-menu-button").click(() => {
    $("#main-menu-list").slideToggle("fast");
    $(".main-menu").toggleClass("main-menu_full-screen");
});

btn.click(function (e) {
    e.preventDefault();
    $(this).toggleClass("main-menu-plus_close");
    $(this).parent().next(".main-menu-sub-menu__box").slideToggle("fast");
});

subBtn.click(function () {
    $(this).parent().next(".main-menu-sub-menu2").slideToggle("fast");
});

// $(".grid").masonry({
//     itemSelector: ".grid-item",
//     columnWidth: 264,
//     horizontalOrder: true,
//     transitionDuration: 0
// });
