$("body").on("scroll", () => {
    if (document.body.scrollTop > 150) {
        $("#sticky-header").show();
    } else {
        $("#sticky-header").hide();
    }
});
