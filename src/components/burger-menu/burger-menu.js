$("#burger-button").click(() => {
    $("#burger-menu").show();
    document.body.classList.add("no-scroll");
    $("#burger-button").hide();
    $("#close-burger-button").show();
    $(".header-sticky-mobile").addClass("header-sticky-mobile_fixed");
});
$("#close-burger-button").click(() => {
    $("#burger-menu").hide();
    document.body.classList.remove("no-scroll");
    $("#burger-button").show();
    $("#close-burger-button").hide();
    if (document.body.scrollTop < 80) {
        $(".header-sticky-mobile").removeClass("header-sticky-mobile_fixed");
    }
});
