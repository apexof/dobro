$("body").on("scroll", () => {
    if (document.body.scrollTop > 120) {
        $(".header").addClass("sticky-header_desctop");
        $(".cart-info").addClass("cart-info_sticky");
    }
    if (document.body.scrollTop < 80) {
        $(".header").removeClass("sticky-header_desctop");
        $(".cart-info").removeClass("cart-info_sticky");
    }
});
