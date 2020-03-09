$("body").on("scroll", () => {
    if (document.body.scrollTop > 150) {
        $("#sticky-header").slideDown("fast");
    } else {
        $("#sticky-header").hide();
    }
});
