const btn = $(".main-menu-el__btn");
$("#main-menu-button").click(() => {
    $("#main-menu-list").slideToggle("fast");
    $(".main-menu").toggleClass("main-menu_full-screen");
});
$(".main-menu-el__btn").click((e) => {
    e.preventDefault();
    btn.parent().next(".main-menu-sub-menu").slideToggle("fast");
    btn.toggleClass("main-menu-el__btn_close");
});
