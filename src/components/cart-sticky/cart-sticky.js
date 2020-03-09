const mql = window.matchMedia("all and (max-width: 768px)");

$("body").on("scroll", () => {
    if (!mql.matches) {
        if (document.body.scrollTop > 150) {
            $("#cart-sticky").css("display", "flex");
        } else {
            $("#cart-sticky").css("display", "none");
        }
    }
});
