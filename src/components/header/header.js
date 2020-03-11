const mql = window.matchMedia("all and (min-width: 992px)");

$("body").on("scroll", () => {
    if (mql.matches) {
        if (document.body.scrollTop > 120) {
            $(".header").addClass("sticky-header_desctop");
            $(".cart-info").addClass("cart-info_sticky");
        }
        if (document.body.scrollTop < 80) {
            $(".header").removeClass("sticky-header_desctop");
            $(".cart-info").removeClass("cart-info_sticky");
        }
    } else {
        if (document.body.scrollTop > 120) {
            $(".header-sticky-mobile").addClass("header-sticky-mobile_fixed");
        }
        if (document.body.scrollTop < 80) {
            $(".header-sticky-mobile").removeClass("header-sticky-mobile_fixed");
        }
    }
});
